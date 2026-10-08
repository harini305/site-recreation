import type { LegalSection } from "@/content/legal";
import { PageHero } from "./PageHero";

export function LegalPage({
  title,
  eyebrow,
  path,
  sections,
}: {
  title: string;
  eyebrow: string;
  path: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        variant="contained"
        image="yoga/class-10"
        eyebrow={eyebrow}
        title={title}
        crumbs={[{ name: title, path }]}
      />
      <section className="section pt-0">
        <div className="container">
          <div className="prose" style={{ marginInline: "auto" }}>
            {sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                )}
                {s.after?.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
