import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-widest text-lime uppercase">01 — About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A CS student who ships the assignment and the website.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I’m in the 5th semester of a BS in Computer Science at the University of Central Punjab, Lahore,
            with a CGPA of 3.56. Most of my graded work is in C++ — object-oriented programs, file handling,
            and data structures used on real-ish problems, not isolated snippets.
          </p>
          <p>
            Outside class I founded Zentorix and built sites for cafés, a restaurant, a bakery, and a boys
            hostel. Before that I worked a summer on the phones at Mindbridge, which is where the troubleshooting
            habit comes from.
          </p>
          <p>
            The direction I’m studying toward is DevOps, DevSecOps, and cloud. Linux Essentials, Google’s
            networking and security courses, and the OS simulator are the start of that path — not a finished claim.
          </p>
          <dl className="grid gap-3 pt-2 sm:grid-cols-3">
            <div className="rounded-card border border-line bg-surface p-4">
              <dt className="text-xs tracking-wide text-dim uppercase">Degree</dt>
              <dd className="mt-2 font-medium text-fg">BS Computer Science</dd>
              <dd className="text-sm">UCP · 2024–2028</dd>
            </div>
            <div className="rounded-card border border-line bg-surface p-4">
              <dt className="text-xs tracking-wide text-dim uppercase">Based</dt>
              <dd className="mt-2 font-medium text-fg">{profile.location}</dd>
              <dd className="text-sm">Open to remote</dd>
            </div>
            <div className="rounded-card border border-line bg-surface p-4">
              <dt className="text-xs tracking-wide text-dim uppercase">Now</dt>
              <dd className="mt-2 font-medium text-fg">Semester 5</dd>
              <dd className="text-sm">Internships welcome</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
