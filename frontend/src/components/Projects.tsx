import { motion } from "framer-motion";
import { PROJECTS, type Project as ProjectType } from "@/utils/data";

const badgeStyles = {
  Winner: "bg-primary/20 text-primary",
  Hackathon: "bg-secondary text-muted-foreground",
  Personal: "bg-secondary text-muted-foreground",
};

const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1"
  >
    <span className={`text-xs px-2 py-1 rounded-full ${badgeStyles[project.badge]}`}>
      {project.badge}
    </span>
    <h3 className="text-xl font-semibold mt-3 mb-1 text-foreground group-hover:text-gradient transition-all">
      {project.title}
    </h3>
    <p className="text-sm text-primary mb-3">{project.subtitle}</p>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Side projects and hackathon builds that solve real problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
