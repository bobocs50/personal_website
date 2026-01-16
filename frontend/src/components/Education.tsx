import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { CERTIFICATIONS } from "@/utils/data";

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Academic background and certifications.
        </p>
      </motion.div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">B.Sc. Business Informatics</h3>
                <span className="text-muted-foreground text-sm">Oct 2024 – Present</span>
              </div>
              <p className="text-primary">University of Potsdam</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">Abitur (High School Diploma)</h3>
                <span className="text-muted-foreground text-sm">Graduated 2023</span>
              </div>
              <p className="text-primary mb-2">Burghard Gymnasium Buchen</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• STEM innovation camp in India</li>
                <li>• Concertmaster in school symphony orchestra</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-xl bg-card border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span key={cert} className="px-3 py-2 rounded-lg bg-secondary text-sm text-foreground">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
