import { Experience, Project, SkillCategory, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer (Working Student)",
    company: "Sectorlens",
    location: "Berlin, Germany",
    period: "May 2025 – Present",
    highlights: [
      "Developing AI-driven platform matching users with optimal software solutions",
      "Design and implement scalable full-stack features (Node.js, React)",
      "Lead feature and bug testing for software reliability",
      "Collaborate on SEO optimization and business development initiatives",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Sectorlens",
    location: "Potsdam, Germany",
    period: "Feb 2025 – Mar 2025",
    highlights: [
      "Built scalable contract evaluation system with NLP/LLM using Haystack, improving efficiency by 40%",
      "Created React prototype that reduced contract approval cycle by 35%",
      "Integrated parsing algorithms reducing contractual errors by 25%",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Leafy",
    subtitle: "BigBerlinHack",
    description:
      "Financial assistant prototype automating expense tracking, reducing manual entry time by 60%.",
    tech: ["n8n", "React", "Express"],
    badge: "Hackathon",
  },
  {
    title: "Moodify",
    subtitle: "Hackathon Winner 🏆",
    description:
      "AI-driven platform integrating Spotify API for emotion-based playlists with real-time sentiment analysis.",
    tech: ["Hugging Face", "Spotify API", "React"],
    badge: "Winner",
  },
  {
    title: "PrepMate",
    subtitle: "Private Project",
    description:
      "Scalable meal planner dynamically adjusting ingredients and streamlining grocery lists.",
    tech: ["Python", "Flask"],
    badge: "Personal",
  },
];

export const SKILLS: SkillCategory[] = [
  { title: "Languages", skills: ["Python", "TypeScript", "C", "Java"] },
  { title: "Frontend", skills: ["React", "Tailwind CSS", "Next.js"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Flask", "TypeORM"] },
  { title: "AI/ML", skills: ["Haystack", "Hugging Face", "NLP"] },
  { title: "Tools", skills: ["Docker", "MySQL", "GitHub"] },
  { title: "Spoken", skills: ["German", "Korean", "English", "French"] },
];

export const CERTIFICATIONS = [
  "CS50: Introduction to Computer Science – Harvard",
  "CS50P: Programming with Python – Harvard",
];

export const CONTACT = {
  email: "bgbphilipp@gmail.com",
  github: "https://github.com/bobocs50",
  linkedin: "https://linkedin.com/in/bobocs50",
};
