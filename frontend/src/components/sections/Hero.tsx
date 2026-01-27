import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, FileText } from "lucide-react";
import { CONTACT } from "@/data";
import philippPhoto from "@/assets/philipp-photo.jpg";
import resume from "@/assets/PhilCV.pdf";

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center relative section-padding overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}} />
    </div>

    <div className="container-narrow relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group flex-shrink-0"
        >
          {/* Glow effect behind image */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-50 blur-2xl group-hover:opacity-75 transition-opacity duration-500" />
          
          {/* Image container */}
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-glow group-hover:border-cyan-400/50 transition-all duration-500">
            <img
              src={philippPhoto}
              alt="Philipp Huynh"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1 lg:text-left space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center lg:items-start"
          >
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-2">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-50 leading-tight">
              Philipp Huynh
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl lg:text-3xl font-semibold text-gradient pt-2"
          >
            Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-base lg:text-lg max-w-lg leading-relaxed pt-4"
          >
            Business Informatics student building AI-driven solutions and scalable full-stack applications.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 justify-center lg:justify-start pt-6"
          >
            {[
              { href: CONTACT.github, icon: Github, label: "GitHub" },
              { href: CONTACT.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: resume, icon: FileText, label: "Resume", download: "Philipp-Huynh-Resume.pdf" },
            ].map(({ href, icon: Icon, label, download }) => (
              <a
                key={label}
                href={href}
                download={download}
                target={download ? undefined : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                className="p-3 rounded-lg bg-slate-900/50 hover:bg-slate-800 hover:shadow-glow-md border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors z-10"
    >
      <ArrowDown className="w-6 h-6 animate-bounce" />
    </motion.a>
  </section>
);

export default Hero;
