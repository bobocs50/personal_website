import { motion } from "framer-motion";
import { SKILLS } from "@/data";

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and languages I work with.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="space-y-4 group"
          >
            <h3 className="text-sm font-bold text-cyan-400 tracking-wide uppercase group-hover:text-cyan-300 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-slate-900 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
