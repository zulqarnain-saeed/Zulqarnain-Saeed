import { achievements, experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-xs font-medium tracking-widest text-lime uppercase">05 — Experience</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Work, a society role, and the record so far.
      </h2>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <ol className="space-y-4">
          {experience.map((job) => (
            <li key={job.org} className="rounded-card border border-line bg-surface p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="text-sm text-dim">{job.when}</p>
              </div>
              <p className="mt-1 text-sm text-lime">
                {job.org} · {job.place}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <aside className="h-fit rounded-card border border-line bg-elev p-5">
          <h3 className="font-display text-lg font-semibold">Achievements</h3>
          <ul className="mt-4 space-y-4">
            {achievements.map((item) => (
              <li key={item.title}>
                <p className="font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
