import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { CONTACT } from "@/data";

const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="container-narrow text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Open to new opportunities and interesting projects. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-muted transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-muted transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
