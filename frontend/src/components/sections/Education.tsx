import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data";
import uniPotsdam from "@/assets/unipotsdam_icon.png";
import sogang from "@/assets/sogang_icon.png";

const Education = () => (
  <section id="education" className="section-padding bg-gradient-to-b from-slate-900/50 to-slate-950">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic background and certifications.
        </p>
      </motion.div>

      <div className="space-y-6">
        {/* Education Items */}
        {EDUCATION.map((edu, index) => {
          const isUniPotsdam = edu.institution === "University of Potsdam";
          const isSogang = edu.institution === "Sogang University";
          
          return (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 to-transparent" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                  {isUniPotsdam ? (
                    <img src={uniPotsdam} alt={edu.institution} className="w-6 h-6 object-cover" />
                  ) : isSogang ? (
                    <img src={sogang} alt={edu.institution} className="w-6 h-6 object-cover" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-50">{edu.title}</h3>
                    <span className="text-slate-400 text-sm font-medium">{edu.period}</span>
                  </div>
                  <p className="text-cyan-400 font-medium">{edu.institution}</p>
                  {edu.highlights && (
                    <ul className="mt-3 text-sm text-slate-400 space-y-1">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: EDUCATION.length * 0.1 }}
          className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 to-transparent" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Certifications</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span key={cert} className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/30 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
