import type { ReactNode } from "react";
import type { Project } from "@/data/portfolio";

function Poster({
  label,
  kicker,
  title,
  children,
}: {
  label: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative h-full w-full bg-bg text-lime">
      <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label={label}>
        <rect width="640" height="400" fill="#101013" />
        <text x="36" y="48" fill="#d6f23a" fontFamily="Space Grotesk, sans-serif" fontSize="14" letterSpacing="3">
          {kicker}
        </text>
        <text x="36" y="92" fill="#f4f4f5" fontFamily="Space Grotesk, sans-serif" fontSize="36" fontWeight="600">
          {title}
        </text>
        {children}
      </svg>
    </div>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} — live page`}
        width={1280}
        height={800}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
    );
  }
  if (project.art === "nexus") {
    return (
      <Poster label="Route graph for Nexus Grid" kicker="C++  ·  DSA" title="Nexus Grid">
        <g fill="none" stroke="#d6f23a" strokeWidth="1.5" opacity="0.35">
          {Array.from({ length: 7 }, (_, i) => (
            <line key={i} x1={48 + i * 88} y1="130" x2={48 + i * 88} y2="360" />
          ))}
        </g>
        <polyline points="80,320 180,210 300,250 420,160 560,200" fill="none" stroke="#d6f23a" strokeWidth="4" />
        {[
          [80, 320],
          [180, 210],
          [300, 250],
          [420, 160],
          [560, 200],
        ].map(([x, y]) => (
          <g key={`${x}${y}`}>
            <circle cx={x} cy={y} r="14" fill="#101013" stroke="#d6f23a" strokeWidth="3" />
            <circle cx={x} cy={y} r="4" fill="#d6f23a" />
          </g>
        ))}
      </Poster>
    );
  }
  if (project.art === "os") {
    return (
      <Poster label="Scheduler blocks for the OS simulator" kicker="C++  ·  OOP" title="OS Simulator">
        {["FCFS", "PRIORITY", "MEMORY", "FILES"].map((name, index) => (
          <g key={name}>
            <rect
              x={36 + (index % 2) * 290}
              y={150 + Math.floor(index / 2) * 100}
              width="260"
              height="72"
              rx="12"
              fill="none"
              stroke="#d6f23a"
              strokeWidth={index === 0 ? 3 : 1.5}
            />
            <text
              x={56 + (index % 2) * 290}
              y={194 + Math.floor(index / 2) * 100}
              fill="#f4f4f5"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="18"
            >
              {name}
            </text>
          </g>
        ))}
      </Poster>
    );
  }
  if (project.art === "zaq") {
    return (
      <Poster label="Account ledger for ZAQ Bank" kicker="C++  ·  FILES" title="ZAQ Bank">
        <rect x="36" y="140" width="568" height="210" rx="16" fill="none" stroke="#d6f23a" strokeWidth="2" />
        {["ACCT", "DEPOSIT", "TRANSFER", "HISTORY"].map((row, index) => (
          <g key={row}>
            <text x="64" y={190 + index * 40} fill="#d6f23a" fontFamily="Space Grotesk, sans-serif" fontSize="16">
              {row}
            </text>
            <line x1="220" x2="560" y1={184 + index * 40} y2={184 + index * 40} stroke="#f4f4f5" strokeWidth="2" opacity="0.35" />
          </g>
        ))}
      </Poster>
    );
  }
  if (project.art === "zsat") {
    return (
      <Poster label="ATM panel for Z-SAT Bank" kicker="C++  ·  GROUP" title="Z-SAT Bank">
        <rect x="230" y="130" width="180" height="230" rx="16" fill="none" stroke="#d6f23a" strokeWidth="2" />
        <rect x="254" y="154" width="132" height="48" rx="8" fill="#d6f23a" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
          <rect
            key={key}
            x={254 + (key % 3) * 44}
            y={220 + Math.floor(key / 3) * 40}
            width="32"
            height="26"
            rx="6"
            fill="none"
            stroke="#d6f23a"
          />
        ))}
      </Poster>
    );
  }
  return (
    <Poster label="Nisab mark for the Zakat calculator" kicker="C++  ·  TOOL" title="Zakat">
      <circle cx="460" cy="250" r="90" fill="none" stroke="#d6f23a" strokeWidth="2" />
      <circle cx="460" cy="250" r="54" fill="none" stroke="#d6f23a" strokeWidth="10" />
      <text x="36" y="210" fill="#f4f4f5" fontFamily="Space Grotesk, sans-serif" fontSize="22">
        2.5% of net wealth
      </text>
      <text x="36" y="250" fill="#a1a1aa" fontFamily="Space Grotesk, sans-serif" fontSize="16">
        Gold nisab · liabilities out
      </text>
    </Poster>
  );
}
