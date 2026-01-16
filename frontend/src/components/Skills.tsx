import { motion } from "framer-motion";
import { SKILLS } from "@/utils/data";

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Technologies and languages I work with.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-medium text-primary">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors"
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
