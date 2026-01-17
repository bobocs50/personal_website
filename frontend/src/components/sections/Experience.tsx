import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";
import type { Experience } from "@/types";
import { ChevronRight } from "lucide-react";

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 to-transparent" />
    
    <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
      <div className="flex-1">
        <p className="text-cyan-400 font-medium text-sm tracking-wide uppercase mb-2">
          {experience.company}
        </p>
        <h3 className="text-2xl md:text-xl font-bold text-slate-50 group-hover:text-gradient transition-all">
          {experience.title}
        </h3>
      </div>
      <div className="text-slate-400 text-sm whitespace-nowrap flex-shrink-0">
        <p className="font-medium">{experience.period}</p>
        <p>{experience.location}</p>
      </div>
    </div>

    {/* Highlights */}
    <ul className="relative z-10 space-y-3">
      {experience.highlights.map((highlight, i) => (
        <li key={i} className="text-slate-400 text-sm flex items-start gap-3 group/item">
          <ChevronRight className="w-4 h-4 text-cyan-500/60 flex-shrink-0 mt-0.5 group-hover/item:text-cyan-400 transition-colors" />
          <span className="group-hover/item:text-slate-300 transition-colors">{highlight}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="section-padding bg-gradient-to-b from-slate-950 to-slate-900/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Building production-ready applications and AI-driven solutions.
        </p>
      </motion.div>

      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
