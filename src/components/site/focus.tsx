import { focus } from "@/data/portfolio";

export function Focus() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line bg-elev">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-lime uppercase">02 — Focus</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What I actually spend time on.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {focus.map((item) => (
            <article key={item.num} className="flex flex-col rounded-card border border-line bg-bg p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-lime">{item.num}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-dim">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
