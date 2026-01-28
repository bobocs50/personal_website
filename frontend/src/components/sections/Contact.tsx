import { Mail, FileText, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { CONTACT } from "@/data";
import resume from "@/assets/PhilCV.pdf";

const CONTACT_LINKS = [
  { icon: Mail, label: "Say Hello", href: `mailto:${CONTACT.email}`, description: "Drop me an email", primary: true },
  { icon: FileText, label: "Resume", href: resume, description: "View my CV", download: true },
  { icon: Github, label: "GitHub", href: CONTACT.github, description: "Check my code" },
  { icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin, description: "Let's connect" },
];

const Contact = () => (
  <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900/50">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
          <Sparkles size={14} />
          Available for opportunities
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-6 tracking-tight">
          Let's Build
          <span className="block text-cyan-400">Something Great</span>
        </h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
          Open to new opportunities and interesting projects. Feel free to reach out!
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_LINKS.map(({ icon: Icon, label, href, description, primary, download }) => (
            <a
              key={label}
              href={href}
              target={!download && href.startsWith("http") ? "_blank" : undefined}
              rel={!download && href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={download ? "Philipp-Huynh-Resume.pdf" : undefined}
              className={`group relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
                primary
                  ? "bg-gradient-to-br from-cyan-500 to-cyan-600 text-slate-950 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  : "bg-slate-900/50 border border-slate-700 text-slate-50 hover:border-cyan-500/40 hover:bg-slate-800"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                primary ? "bg-slate-950/20" : "bg-cyan-500/10"
              }`}>
                <Icon size={22} className={primary ? "text-slate-950" : "text-cyan-400"} />
              </div>
              <span className="font-semibold text-lg mb-1">{label}</span>
              <span className={`text-sm ${primary ? "text-slate-950/70" : "text-slate-400"}`}>{description}</span>
              {primary && (
                <ArrowRight
                  size={18}
                  className="absolute top-4 right-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-slate-400 text-sm mb-2">Or email me directly at</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors inline-flex items-center gap-2 group"
        >
          {CONTACT.email}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
