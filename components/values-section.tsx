"use client"

import { useState } from "react"

interface Value {
  title: string
  icon: React.ReactNode
  description: string
}

const values: Value[] = [
  {
    title: "mind",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4C10 4 6 8.5 6 14C6 18 8 20.5 10 22V26H14L15 23H17L18 26H22V22C24 20.5 26 18 26 14C26 8.5 22 4 16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: "curiosity is my compass. i believe in nurturing the mind through learning, questioning, and staying open to ideas that challenge how i see the world.",
  },
  {
    title: "body",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16C10 14 12.7 13 16 13C19.3 13 22 14 22 16V20L19 28H17L16 22L15 28H13L10 20V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "taking care of the vessel that carries everything. rest, movement, good food, and knowing when to pause and recharge.",
  },
  {
    title: "career",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12V9C12 7.34 13.34 6 15 6H17C18.66 6 20 7.34 20 9V12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 18H26" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="16" width="4" height="4" rx="1" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
    description: "building meaningful work that blends craft, impact, and growth. i want to create things that matter and keep evolving as a designer and maker.",
  },
  {
    title: "family",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 22C5 19 7 17 10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 17C25 17 27 19 27 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 26C11 24 13 22.5 16 22.5C19 22.5 21 24 21 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    description: "the people who ground me. family is both the roots and the safety net -- the constant through every season of change.",
  },
  {
    title: "love",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28S4 20 4 13C4 9 7 6 11 6C13.5 6 15.5 7.5 16 8.5C16.5 7.5 18.5 6 21 6C25 6 28 9 28 13C28 20 16 28 16 28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description: "in all its forms -- for people, for ideas, for the act of creation itself. love is what makes everything feel worth it.",
  },
]

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
          5 values i believe in
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          {"the pillars that shape how i move through design, work, and life."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, idx) => {
            const isActive = activeIndex === idx
            return (
              <button
                key={value.title}
                type="button"
                onClick={() => setActiveIndex(isActive ? null : idx)}
                className={`group relative flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#1E3A5F] text-white border-[#1E3A5F] shadow-lg shadow-[#1E3A5F]/20"
                    : "bg-background text-foreground border-border hover:border-[#1E3A5F]/30 hover:shadow-md"
                }`}
              >
                <div className={`mb-4 transition-colors duration-300 ${isActive ? "text-white" : "text-[#1E3A5F]"}`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                  isActive ? "text-white/80" : "text-muted-foreground"
                }`}>
                  {value.description}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
