export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  badge: "Winner" | "Hackathon" | "Personal";
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
