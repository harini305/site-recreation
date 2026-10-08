// Downloads the original Samadi Bali assets listed in asset-manifest.mjs into .assets-raw/.
// samadibali.com currently serves an expired TLS certificate, so certificate validation is
// relaxed for that host only. The server also returns 502s under concurrent load, so files
// are fetched one at a time with retries.
import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { assets, videos, UPLOADS } from "./asset-manifest.mjs";

const OUT = path.resolve(".assets-raw");
const agent = new https.Agent({ rejectUnauthorized: false });

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { agent, headers: { "User-Agent": "Mozilla/5.0 (asset fetch)" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return resolve(get(new URL(res.headers.location, url).href));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(Object.assign(new Error(`HTTP ${res.statusCode}`), { status: res.statusCode }));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
      // A connection dropped mid-body can close without "end" or "error".
      res.on("close", () => {
        if (!res.complete) reject(new Error("connection closed before response completed"));
      });
    });
    req.setTimeout(180_000, () => req.destroy(new Error("timeout")));
    req.on("error", reject);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      return await get(url);
    } catch (err) {
      if (err.status === 404) throw err;
      if (attempt === 4) throw err;
      await sleep(1500 * attempt);
    }
  }
}

async function download(key, entry) {
  const candidates = [entry.path, ...(entry.fallback ?? [])];
  for (const candidate of candidates) {
    const ext = path.extname(candidate).toLowerCase();
    const dest = path.join(OUT, `${key}${ext}`);
    if (fs.existsSync(dest)) return { key, status: "cached", source: candidate };
    try {
      const buf = await fetchWithRetry(UPLOADS + candidate);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, buf);
      return { key, status: candidate === entry.path ? "ok" : "fallback", source: candidate, bytes: buf.length };
    } catch (err) {
      if (err.status !== 404) return { key, status: "error", source: candidate, error: err.message };
    }
  }
  return { key, status: "missing", source: candidates.join(" | ") };
}

const results = [];
for (const [key, entry] of Object.entries({ ...assets, ...videos })) {
  if (entry.local) continue; // generated locally (e.g. video stills), nothing to download
  const r = await download(key, entry);
  results.push(r);
  console.log(`${r.status.padEnd(8)} ${key}  <- ${r.source}${r.error ? "  " + r.error : ""}`);
  await sleep(250);
}

fs.writeFileSync(path.join(OUT, "fetch-report.json"), JSON.stringify(results, null, 2));
const bad = results.filter((r) => r.status === "missing" || r.status === "error");
console.log(`\n${results.length - bad.length}/${results.length} assets available.`);
if (bad.length) process.exitCode = 1;
