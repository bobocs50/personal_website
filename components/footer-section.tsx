import { Sparkle, CrossSparkle } from "./sparkle-decorations"

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/10 via-[#1E3A5F]/15 to-[#1E3A5F]/20" />

      <div className="pointer-events-none absolute inset-0">
        <CrossSparkle className="absolute top-12 left-[8%] text-[#1E3A5F]/20 animate-pulse" size={16} />
        <Sparkle className="absolute top-[60%] left-[6%] text-[#1E3A5F]/15 animate-pulse" size={18} style={{ animationDelay: "1s" }} />
        <CrossSparkle className="absolute top-20 right-[5%] text-[#1E3A5F]/15 animate-pulse" size={14} style={{ animationDelay: "0.5s" }} />
        <Sparkle className="absolute bottom-32 right-[10%] text-[#1E3A5F]/20 animate-pulse" size={20} style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 pt-16 md:pt-24 pb-8">
          <h2 className="text-2xl md:text-3xl font-medium text-[#1E3A5F] mb-8 text-balance">
            {"every garden begins with a hello\u2014"}
          </h2>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1E3A5F]/40 text-center mb-16">
            {"let's grow and create together."}
          </h3>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#1E3A5F]/50 text-sm">
            {"lots of love \u00A9 2025 franceszhao"}
          </p>
          <div className="flex items-center gap-6">
            {["linkedin", "twitter", "email", "resume"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#1E3A5F]/50 text-sm underline underline-offset-4 hover:text-[#1E3A5F] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
