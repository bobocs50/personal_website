const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container-narrow text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Philipp Huynh. Built with React & Tailwind.
      </p>
    </div>
  </footer>
);

export default Footer;
