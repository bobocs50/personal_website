const Footer = () => (
  <footer className="py-12 border-t border-slate-800 bg-slate-950/50">
    <div className="container-narrow text-center">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Philipp Huynh. Built with <span className="text-cyan-400 font-medium">React</span> & <span className="text-cyan-400 font-medium">Tailwind</span>.
      </p>
    </div>
  </footer>
);

export default Footer;
