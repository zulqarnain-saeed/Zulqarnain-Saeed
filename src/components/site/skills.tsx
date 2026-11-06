import { skillGroups, stackBars } from "@/data/portfolio";

const max = Math.max(...stackBars.map((bar) => bar.value));

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-xs font-medium tracking-widest text-lime uppercase">03 — Skills</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        The stack I can defend in an interview.
      </h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-card border border-line bg-surface p-5">
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-lg border border-line bg-bg px-3 py-2 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-card border border-line bg-surface p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold">Where the public work sits</h3>
        <p className="mt-1 text-sm text-muted">Counted from GitHub repositories and verified course certificates — not a self-score.</p>
        <ul className="mt-6 space-y-4">
          {stackBars.map((bar) => (
            <li key={bar.label}>
              <div className="mb-2 flex items-baseline justify-between gap-3 text-sm">
                <span>{bar.label}</span>
                <span className="text-dim">{bar.note}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-bg">
                <div
                  className="h-full rounded-full bg-lime"
                  style={{ width: `${(bar.value / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
