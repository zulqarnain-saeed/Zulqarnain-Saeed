const stats = [
  { value: "3.56", suffix: "/4", label: "Current CGPA" },
  { value: "5th", suffix: "", label: "Semester at UCP" },
  { value: "17th", suffix: "", label: "HPE CodeWars 2025" },
  { value: "13", suffix: "", label: "Public repositories" },
  { value: "2028", suffix: "", label: "Expected graduation" },
];

export function Stats() {
  return (
    <section aria-label="Highlights" className="border-y border-line bg-elev">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-6 sm:px-6">
            <dt className="font-display text-3xl font-semibold tracking-tight text-lime">
              {stat.value}
              {stat.suffix ? <span className="text-lg text-fg">{stat.suffix}</span> : null}
            </dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
