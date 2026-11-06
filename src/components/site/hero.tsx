import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
      <div className="flex flex-col gap-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-elev px-3 py-1 text-xs font-medium tracking-wide text-lime uppercase">
          <span className="size-1.5 rounded-full bg-lime" aria-hidden />
          {profile.availability}
        </p>
        <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I’m Zulqarnain.
          <span className="mt-2 block text-lime">I build software that holds together.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink"
          >
            See the work
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:border-lime"
          >
            Get in touch
          </a>
          <a
            href={profile.resume}
            download="Zulqarnain_Saeed_Resume.pdf"
            className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:border-lime"
          >
            Download CV
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-dim">
          <span className="tracking-wide uppercase">Elsewhere</span>
          <a className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg hover:text-lime" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="size-4" />
          </a>
          <a className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg hover:text-lime" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="size-4" />
          </a>
          <a className="inline-flex h-11 items-center rounded-full border border-line px-3 text-xs font-semibold tracking-wide text-fg uppercase hover:text-lime" href={profile.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a className="inline-flex h-11 items-center rounded-full border border-line px-3 text-xs font-semibold tracking-wide text-fg uppercase hover:text-lime" href={profile.hackerrank} target="_blank" rel="noreferrer">
            HackerRank
          </a>
        </div>
      </div>
      <figure className="relative mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-card border border-line bg-surface">
          <img
            src={profile.portrait}
            alt="Zulqarnain Saeed"
            width={1254}
            height={1254}
            className="aspect-square w-full object-cover"
          />
        </div>
        <figcaption className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-card border border-line bg-elev px-4 py-3">
            <p className="text-xs tracking-wide text-dim uppercase">University</p>
            <p className="mt-1 font-display font-semibold">UCP · BSCS</p>
          </div>
          <div className="rounded-card border border-line bg-elev px-4 py-3">
            <p className="text-xs tracking-wide text-dim uppercase">Record</p>
            <p className="mt-1 font-display font-semibold">CGPA 3.56 / 4.00</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
