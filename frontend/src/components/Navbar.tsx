import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT } from "@/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgb(148, 163, 184);
          padding-bottom: 6px;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #22d3ee);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover {
          color: rgb(34, 211, 238);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" 
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow flex items-center justify-between py-4 px-4 md:px-8">
          <a href="#" className="text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            PH
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 font-medium hover:shadow-lg"
            style={{boxShadow: "0 0 20px rgba(6, 182, 212, 0)"}}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(6, 182, 212, 0)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Contact
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
