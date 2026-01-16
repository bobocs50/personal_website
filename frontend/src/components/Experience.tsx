import { motion } from "framer-motion";
import { EXPERIENCES, type Experience as ExperienceType } from "@/utils/data";

const ExperienceCard = ({ experience, index }: { experience: ExperienceType; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all">
          {experience.title}
        </h3>
        <p className="text-primary font-medium">{experience.company}</p>
      </div>
      <div className="text-muted-foreground text-sm mt-2 md:mt-0 md:text-right">
        <p>{experience.period}</p>
        <p>{experience.location}</p>
      </div>
    </div>
    <ul className="space-y-2">
      {experience.highlights.map((highlight, i) => (
        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
          {highlight}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
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
