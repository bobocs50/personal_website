"use client"

import { useState } from "react"

const joys = [
  "discovering fire music",
  "rewatching my favorite movies",
  "trying out new cheese recipes!",
  "observing people during transit",
]

const surprises = [
  "keshi, beabadoobee, wave to earth",
  "spirited away & howl's moving castle",
  "brie with honey is top tier",
  "everyone has a story to tell",
]

export default function SmallJoys() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
          the small joys in my life
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          {"the little hobbies and tidbits that make me grin and giggle! (hover for a surprise)"}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {joys.map((joy, idx) => (
            <div
              key={joy}
              className="relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                className="px-8 py-5 rounded-full bg-[#1E3A5F] text-white text-sm md:text-base font-medium transition-all duration-300 hover:bg-[#162D4A] hover:scale-105 cursor-default shadow-lg shadow-[#1E3A5F]/20"
                type="button"
                aria-label={joy}
              >
                {hoveredIndex === idx ? surprises[idx] : joy}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
