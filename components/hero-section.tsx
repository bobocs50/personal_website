"use client"

import { FloatingSparkles } from "./sparkle-decorations"

export default function HeroSection() {
  return (
    <section className="relative bg-[#1E3A5F] text-white min-h-[60vh] flex items-center overflow-hidden">
      <FloatingSparkles />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-60 h-64 md:w-72 md:h-80 rounded-lg overflow-hidden border-4 border-white bg-white/5">
                <img
                  src="/philipp.jpg"
                  alt="Portrait of Philipp"
                  className="w-full h-full object-cover scale-[1.1] object-[30%_95%] -translate-x-[10px]"
                />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex-1 space-y-5">
            <h1 className="text-3xl md:text-4xl font-normal text-balance tracking-[-0.03em]">
              {"hey there, i'm frances!"}
            </h1>
            <p className="text-white/85 leading-relaxed text-sm md:text-base">
              {"i'm a designer, builder, and systems design engineering student @ university of waterloo! i am super curious about the world and how ideas sprout, hop around, and eventually take shape: sometimes gracefully, other times like wildflowers popping up in the cracks of a sidewalk."}
            </p>
            <p className="text-white/85 leading-relaxed text-sm md:text-base">
              {"my friends often describe me as "}
              <em>{"whimsical"}</em>
              {", nonchalant (jokes), and suspiciously efficient for someone who spends half her time discovering best napping techniques. when i'm not designing, you can find me plotting my portfolio's next iteration ("}
              <a href="#" className="underline underline-offset-4">{"check out the previous"}</a>
              {"), "}
              <a href="#" className="underline underline-offset-4"><em>{"tweeting"}</em></a>
              {", or daydreaming about "}
              <span className="underline underline-offset-4">{"cheese"}</span>
              {"."}
            </p>
            <p className="text-white/85 leading-relaxed text-sm md:text-base">
              {"my goal? building experiences that feel alive and meaningful \u2014 like a meadow where both ideas and people can grow together."}
            </p>
            <p className="text-white/85 leading-relaxed text-sm md:text-base">
              {"thanks for stopping by!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
