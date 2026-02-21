const projects = [
  {
    title: "Work One",
    subtitle: "placeholder project description",
  },
  {
    title: "Work Two",
    subtitle: "placeholder project description",
  },
  {
    title: "Work Three",
    subtitle: "placeholder project description",
  },
  {
    title: "Work Four",
    subtitle: "placeholder project description",
  },
]

export default function FeaturedWorks() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium italic text-[#1E3A5F] text-center mb-16">
          featured works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href="#"
              className="group block"
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-[#1E3A5F]/5 aspect-video" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
