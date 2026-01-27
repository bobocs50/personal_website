import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, FileText } from "lucide-react";
import { CONTACT } from "@/data";
import resume from "@/assets/PhilCV.pdf";

const Contact = () => (
  <section id="contact" className="section-padding bg-gradient-to-b from-slate-950 to-slate-900/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle max-w-lg mx-auto">
          Open to new opportunities and interesting projects. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
      >
        {/* Primary CTA */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 font-semibold hover:shadow-glow-md transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Say Hello
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Resume Download */}
        <a
          href={resume}
          download="Philipp-Huynh-Resume.pdf"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-50 font-semibold hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300"
        >
          <FileText className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          Resume
        </a>

        {/* Secondary CTAs */}
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-50 font-semibold hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300"
        >
          <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          GitHub
        </a>

        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-50 font-semibold hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
          LinkedIn
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
