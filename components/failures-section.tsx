export default function FailuresSection() {
  const failures = [
    {
      label: "rejected from 40+ internships in one cycle",
      lesson: "persistence matters more than perfection",
    },
    {
      label: "failed a project presentation in front of 200 people",
      lesson: "vulnerability is not weakness",
    },
    {
      label: "built a startup that never launched",
      lesson: "execution beats ideas every time",
    },
    {
      label: "lost a leadership role i cared deeply about",
      lesson: "titles don't define impact",
    },
    {
      label: "burned out trying to do everything at once",
      lesson: "rest is productive, not lazy",
    },
    {
      label: "submitted a design i knew wasn't my best",
      lesson: "done is better than perfect, but own it",
    },
    {
      label: "had a falling out with a close collaborator",
      lesson: "communication is a skill you never stop learning",
    },
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
          {"i'm shaped by my failures."}
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          {"the moments that didn't go as planned taught me the most."}
        </p>

        <div className="rounded-2xl border border-[#1E3A5F]/10 bg-[#1E3A5F]/[0.03] overflow-hidden">
          {failures.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 px-6 py-4 ${
                i !== failures.length - 1 ? "border-b border-[#1E3A5F]/8" : ""
              }`}
            >
              <span className="text-sm md:text-base font-medium text-foreground">
                {item.label}
              </span>
              <span className="text-sm italic text-muted-foreground">
                {item.lesson}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
