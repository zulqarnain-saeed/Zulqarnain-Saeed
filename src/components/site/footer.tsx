import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="font-display text-xl font-semibold">
            ZS<span className="text-lime">.</span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Computer Science undergraduate at the University of Central Punjab. C++, Python, and the web — studying toward DevOps.
          </p>
        </div>
        <div>
          <h2 className="text-xs tracking-widest text-dim uppercase">Navigate</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-lime" href="#about">About</a></li>
            <li><a className="hover:text-lime" href="#projects">Projects</a></li>
            <li><a className="hover:text-lime" href="#experience">Experience</a></li>
            <li><a className="hover:text-lime" href="#certificates">Certificates</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-widest text-dim uppercase">Connect</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-lime" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:text-lime" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="hover:text-lime" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a></li>
            <li><a className="hover:text-lime" href={profile.hackerrank} target="_blank" rel="noreferrer">HackerRank</a></li>
            <li><a className="text-lime" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-5 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Zulqarnain Saeed</p>
        <a href="#top" className="hover:text-lime">Back to top</a>
      </div>
    </footer>
  );
}
