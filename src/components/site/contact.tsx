import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!message.trim()) {
      toast("Write a short note first.");
      return;
    }
    const body = [`From: ${name || "visitor"}`, `Reply email: ${email}`, "", message.trim()].join("\n");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    toast("Opening your email app.");
  }

  return (
    <section id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-card border border-line bg-surface px-5 py-10 sm:px-10 sm:py-14">
        <p className="text-center text-xs font-medium tracking-widest text-lime uppercase">07 — Contact</p>
        <h2 className="mt-3 text-center font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Let’s <span className="text-lime">connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted">
          Software and IT internships, project collaborations, and teams working in DevOps, cloud, or product engineering.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-sm">
            <a className="block rounded-card border border-line bg-bg p-4 hover:border-lime" href={`mailto:${profile.email}`}>
              <p className="text-xs tracking-wide text-dim uppercase">Email</p>
              <p className="mt-1 font-medium text-lime">{profile.email}</p>
            </a>
            <a className="block rounded-card border border-line bg-bg p-4 hover:border-lime" href={profile.phoneHref}>
              <p className="text-xs tracking-wide text-dim uppercase">Phone</p>
              <p className="mt-1 font-medium">{profile.phone}</p>
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a className="rounded-card border border-line bg-bg p-4 hover:border-lime" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="rounded-card border border-line bg-bg p-4 hover:border-lime" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <p className="text-muted">{profile.location} · open to remote</p>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <label className="block text-sm">
              <span className="text-dim">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                name="name"
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 outline-none focus:border-lime"
              />
            </label>
            <label className="block text-sm">
              <span className="text-dim">Email</span>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-3 outline-none focus:border-lime"
              />
            </label>
            <label className="block text-sm">
              <span className="text-dim">Message</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                required
                rows={5}
                className="mt-1 w-full resize-y rounded-xl border border-line bg-bg px-3 py-3 outline-none focus:border-lime"
              />
            </label>
            <button type="submit" className="inline-flex min-h-11 items-center rounded-full bg-lime px-5 text-sm font-semibold text-ink">
              Email me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
