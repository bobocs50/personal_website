import { motion } from "framer-motion";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";
import { ExternalLink } from "lucide-react";

const badgeStyles = {
  Winner: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  Hackathon: "bg-slate-800/50 text-slate-300 border border-slate-700",
  Personal: "bg-slate-800/50 text-slate-300 border border-slate-700",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
  >
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 to-transparent" />
    
    <div className="relative z-10">
      <span className={`text-xs px-3 py-1 rounded-full font-medium ${badgeStyles[project.badge]}`}>
        {project.badge}
      </span>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-50 group-hover:text-gradient transition-all">
        {project.title}
      </h3>
      <p className="text-sm text-cyan-400 font-medium mb-3">{project.subtitle}</p>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 rounded bg-slate-800/50 border border-slate-700 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
            {t}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
      >
        View Project
        <ExternalLink className="w-3 h-3" />
      </a>
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
        className="mb-16"
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Side projects and hackathon builds that solve real problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
