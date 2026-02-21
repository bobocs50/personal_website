import { CrossSparkle, SixPointStar, Sparkle } from "./sparkle-decorations"

interface ExperienceItem {
  company: string
  link: string
  role: string
  date: string
  extra?: string
  extraLink?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "cresta",
    link: "cresta.com",
    role: "associate conversation ai design intern",
    date: "sept 2025 \u2013 dec 2025",
  },
  {
    company: "JPDynamic",
    link: "jpdynamic.com",
    role: "design engineer",
    date: "sept 2025 \u2013 present",
  },
  {
    company: "clear spider inc.",
    link: "clearspider.net",
    role: "digital design intern",
    date: "jan 2025 \u2013 apr 2025",
    extra: "view work term portfolio",
    extraLink: "#",
  },
  {
    company: "take",
    link: "takewithme.social",
    role: "chief design officer (founding team member)",
    date: "sept 2025 \u2013 dec 2025",
  },
  {
    company: "taxxi (ai tax startup)",
    link: "",
    role: "founding designer",
    date: "mar 2025 \u2013 jun 2025",
  },
]

interface OrgItem {
  org: string
  link: string
  role: string
  date: string
}

const orgs: OrgItem[] = [
  {
    org: "geesehacks",
    link: "geesehacks.com",
    role: "organizing team \u2013 design subteam",
    date: "sept 2025 \u2013 present",
  },
  {
    org: "stupid hackathon",
    link: "luma",
    role: "organizing team",
    date: "aug 2025 \u2013 sept 2025",
  },
  {
    org: "tech+ uw",
    link: "techplusuw.com",
    role: "product designer",
    date: "may 2025 \u2013 present",
  },
  {
    org: "formulatech hacks",
    link: "formulatechhacks.com",
    role: "design team lead",
    date: "mar 2025 \u2013 present",
  },
]

function MushroomIllustration() {
  return (
    <div className="relative w-48 h-64 md:w-56 md:h-72">
      <svg viewBox="0 0 200 220" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="90" rx="75" ry="55" fill="#1E3A5F" fillOpacity="0.15" />
        <ellipse cx="100" cy="90" rx="75" ry="55" fill="url(#mushGradNav)" />
        <circle cx="75" cy="75" r="12" fill="white" fillOpacity="0.4" />
        <circle cx="115" cy="65" r="8" fill="white" fillOpacity="0.3" />
        <circle cx="130" cy="90" r="10" fill="white" fillOpacity="0.35" />
        <rect x="80" y="130" width="40" height="50" rx="8" fill="#1E3A5F" fillOpacity="0.08" />
        <ellipse cx="100" cy="180" rx="50" ry="10" fill="#1E3A5F" fillOpacity="0.06" />
        <path d="M145 80Q160 60 170 85Q155 90 145 80Z" fill="#1E3A5F" fillOpacity="0.2" />
        <defs>
          <linearGradient id="mushGradNav" x1="25" y1="35" x2="175" y2="145">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1E3A5F" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-4 -right-12 text-sm text-[#1E3A5F] text-right leading-tight font-medium">
        seeking summer<br />2026 co-ops!
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Experience & Orgs */}
          <div className="flex-1 space-y-16">
            {/* Experience */}
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">experience</h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.company} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
                    <div className="sm:w-52 flex-shrink-0">
                      <p className="text-foreground text-sm font-medium">{exp.company}</p>
                      {exp.link && (
                        <a
                          href={`https://${exp.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1E3A5F] text-sm underline underline-offset-4"
                        >
                          {exp.link}
                        </a>
                      )}
                    </div>
                    <div>
                      <p className="text-foreground text-sm">
                        {exp.role}
                        {exp.extra && (
                          <>
                            {"  "}
                            <a href={exp.extraLink} className="text-[#1E3A5F] underline underline-offset-4 text-sm">
                              {exp.extra}
                            </a>
                          </>
                        )}
                      </p>
                      <p className="text-[#1E3A5F]/60 text-sm">{exp.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orgs & Involvement */}
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-8">
                {"orgs & involvement"}
              </h2>
              <div className="space-y-6">
                {orgs.map((org) => (
                  <div key={org.org} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
                    <div className="sm:w-52 flex-shrink-0">
                      <p className="text-foreground text-sm font-medium">{org.org}</p>
                      <a
                        href={org.link === "luma" ? "#" : `https://${org.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1E3A5F] text-sm underline underline-offset-4"
                      >
                        {org.link}
                      </a>
                    </div>
                    <div>
                      <p className="text-foreground text-sm">{org.role}</p>
                      <p className="text-[#1E3A5F]/60 text-sm">{org.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex flex-col items-center gap-8 pt-8">
            <MushroomIllustration />
            <div className="relative w-48 h-48">
              <CrossSparkle className="absolute top-0 left-8 text-[#1E3A5F]/30" size={16} />
              <SixPointStar className="absolute top-4 right-4 text-[#1E3A5F]/20" size={28} />
              <svg className="absolute top-8 left-0" width="100" height="80" viewBox="0 0 100 80" fill="none">
                <circle cx="50" cy="20" r="15" fill="#1E3A5F" fillOpacity="0.08" />
                <circle cx="35" cy="30" r="15" fill="#1E3A5F" fillOpacity="0.06" />
                <circle cx="65" cy="30" r="15" fill="#1E3A5F" fillOpacity="0.06" />
                <circle cx="40" cy="45" r="15" fill="#1E3A5F" fillOpacity="0.08" />
                <circle cx="60" cy="45" r="15" fill="#1E3A5F" fillOpacity="0.08" />
                <circle cx="50" cy="35" r="8" fill="#1E3A5F" fillOpacity="0.15" />
              </svg>
              <Sparkle className="absolute bottom-4 left-4 text-[#1E3A5F]/20" size={14} />
              <CrossSparkle className="absolute bottom-8 right-8 text-[#1E3A5F]/25" size={12} />
              <svg className="absolute bottom-0 right-0" width="60" height="50" viewBox="0 0 60 50" fill="none">
                <circle cx="30" cy="15" r="10" fill="#1E3A5F" fillOpacity="0.06" />
                <circle cx="20" cy="22" r="10" fill="#1E3A5F" fillOpacity="0.05" />
                <circle cx="40" cy="22" r="10" fill="#1E3A5F" fillOpacity="0.05" />
                <circle cx="30" cy="20" r="5" fill="#1E3A5F" fillOpacity="0.15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
