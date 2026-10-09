"use client";

import { useSyncExternalStore } from "react";

/** Basket: product id → quantity. Kept in localStorage so it survives reloads and page changes. */
export type Cart = Record<string, number>;

const KEY = "samadi-basket";
const EMPTY: Cart = {};
const listeners = new Set<() => void>();
let cache: Cart | null = null;

function read(): Cart {
  if (cache) return cache;
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) ?? "{}");
    cache = parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    cache = {};
  }
  return cache!;
}

function write(next: Cart) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Private mode / storage full: the basket still works for this visit.
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  // Keep tabs in sync
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    cache = null;
    cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function setQty(id: string, qty: number) {
  const next = { ...read() };
  if (qty > 0) next[id] = Math.min(qty, 99);
  else delete next[id];
  write(next);
}

export const addOne = (id: string) => setQty(id, (read()[id] ?? 0) + 1);
export const clearCart = () => write({});

export const formatIDR = (n: number) => `IDR ${new Intl.NumberFormat("id-ID").format(n)}`;
