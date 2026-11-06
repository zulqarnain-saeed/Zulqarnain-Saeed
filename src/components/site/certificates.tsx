import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  const [open, setOpen] = useState(false);
  const featured = certificates.filter((item) => item.featured);
  const extra = certificates.filter((item) => !item.featured);
  const shown = open ? certificates : featured;

  return (
    <section id="certificates" className="scroll-mt-20 border-t border-line bg-elev">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium tracking-widest text-lime uppercase">06 — Certificates</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Credentials you can open and check.
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Three up front. The rest stay collapsed until you ask. Each link goes to the issuer’s verify page, or LinkedIn when that is the only public record.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((item) => (
            <article key={item.id} className="flex flex-col rounded-card border border-line bg-bg p-5">
              <p className="text-xs tracking-wide text-dim uppercase">
                {item.issuer} · {item.track}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.when}</p>
              <p className="mt-1 text-xs break-all text-dim">{item.credential}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-lime"
              >
                Verify <ArrowUpRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-bg px-5 text-sm font-semibold hover:border-lime"
            aria-expanded={open}
            onClick={() => {
              setOpen((value) => !value);
              if (open) {
                requestAnimationFrame(() => {
                  document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth", block: "start" });
                });
              }
            }}
          >
            {open ? "Show fewer certificates" : `See ${extra.length} more certificates`}
          </button>
        </div>
      </div>
    </section>
  );
}
