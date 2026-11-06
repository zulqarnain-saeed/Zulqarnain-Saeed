import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Github, X } from "lucide-react";
import { filters, projects, type Project, type SkillKey } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "@/components/site/project-art";

function Card({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block aspect-video w-full overflow-hidden text-left"
      >
        <ProjectVisual project={project} />
      </button>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs tracking-wide text-lime uppercase">{project.eyebrow}</p>
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <li key={tag} className="rounded-md bg-bg px-2 py-1 text-xs text-dim">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3">
          <button type="button" onClick={() => onOpen(project)} className="text-sm font-semibold hover:text-lime">
            Quick view
          </button>
          <div className="flex gap-2">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-lime"
              >
                Live <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line hover:text-lime"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | SkillKey>("all");
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (window.location.hash === "#explore") setOpen(true);
  }, []);

  const visible = useMemo(
    () => rest.filter((project) => filter === "all" || project.skills.includes(filter)),
    [filter, rest],
  );

  function expand(scroll: boolean) {
    setOpen(true);
    if (scroll) {
      requestAnimationFrame(() => {
        document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-elev">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest text-lime uppercase">04 — Projects</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Three to start. The rest are one click away.
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Every card links to its own GitHub repository. Live sites are the real deployed pages, not mockups.
            </p>
          </div>
          <a
            href="https://github.com/zulqarnain-saeed?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-lime"
          >
            All repositories
          </a>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featured.map((project) => (
            <Card key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg px-5 text-sm font-semibold hover:border-lime"
            aria-expanded={open}
            aria-controls="explore"
            onClick={() => (open ? setOpen(false) : expand(true))}
          >
            {open ? "Show fewer projects" : `Explore all ${projects.length} projects`}
          </button>
        </div>

        <div id="explore" hidden={!open} className="scroll-mt-20">
          {open ? (
            <div className="pt-10">
              <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
                {filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={filter === item.id}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      "min-h-11 rounded-full border border-line px-4 text-sm",
                      filter === item.id ? "bg-lime text-ink" : "bg-bg text-fg",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {visible.map((project) => (
                  <Card key={project.id} project={project} onOpen={setActive} />
                ))}
              </div>
              {visible.length === 0 ? (
                <p className="mt-6 text-sm text-muted">Nothing in this filter. Try All.</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      <Dialog.Root open={Boolean(active)} onOpenChange={(next) => !next && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 max-h-[90vh] w-[min(720px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-card border border-line bg-surface p-4 shadow-none sm:p-6">
            {active ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-wide text-lime uppercase">{active.eyebrow}</p>
                    <Dialog.Title className="mt-1 font-display text-2xl font-semibold">{active.title}</Dialog.Title>
                  </div>
                  <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-full border border-line" aria-label="Close">
                    <X className="size-4" />
                  </Dialog.Close>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl border border-line">
                  <ProjectVisual project={active} />
                </div>
                <Dialog.Description className="text-sm leading-relaxed text-muted">{active.detail}</Dialog.Description>
                <ul className="flex flex-wrap gap-2">
                  {active.stack.map((tag) => (
                    <li key={tag} className="rounded-md bg-bg px-2 py-1 text-xs text-dim">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-4 text-sm font-semibold text-ink"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                  {active.live ? (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold"
                    >
                      Live site <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
