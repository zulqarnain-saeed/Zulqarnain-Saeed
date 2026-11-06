import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Focus" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          ZS<span className="text-lime">.</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg",
                active === link.href && "bg-surface text-fg",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download="Zulqarnain_Saeed_Resume.pdf"
            className="hidden rounded-full border border-line px-3 py-2 text-sm text-fg hover:border-lime hover:text-lime sm:inline-flex"
          >
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink hover:bg-lime/90"
          >
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-line py-3 font-display text-lg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download="Zulqarnain_Saeed_Resume.pdf"
              className="py-3 text-lime"
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
