"use client"

import { useRef } from "react"

interface JoyCard {
  caption: string
  color: string
}

const row1: JoyCard[] = [
  { caption: "building communities for the joy of humanity", color: "#1E3A5F0D" },
  { caption: "trying out all sorts of new cuisine and food", color: "#1E3A5F14" },
  { caption: "animals! animals! animals!", color: "#1E3A5F0A" },
  { caption: "successfully fixing broken things", color: "#1E3A5F0F" },
]

const row2: JoyCard[] = [
  { caption: "my amazing and talented friends", color: "#1E3A5F12" },
  { caption: "my family, who support me through everything", color: "#1E3A5F0D" },
  { caption: "the horizon, and what lies beyond", color: "#1E3A5F0A" },
  { caption: "going to concerts and live music", color: "#1E3A5F14" },
]

function ScrollRow({ items, label }: { items: JoyCard[]; label: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        role="region"
        aria-label={label}
      >
        {items.map((item) => (
          <div key={item.caption} className="flex-shrink-0 w-48 md:w-52 snap-start">
            <div
              className="w-full aspect-[4/5] rounded-lg mb-2 overflow-hidden"
              style={{ backgroundColor: item.color }}
            >
              <div className="w-full h-full flex items-center justify-center p-4">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-20">
                  <rect x="5" y="5" width="50" height="50" rx="8" stroke="currentColor" strokeWidth="2" />
                  <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 45L22 30L32 38L42 25L50 35" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <p className="text-foreground text-xs md:text-sm text-center leading-snug px-1">{item.caption}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 h-1 bg-[#1E3A5F]/10 rounded-full overflow-hidden max-w-2xl">
        <div className="h-full w-3/4 bg-[#1E3A5F] rounded-full" />
      </div>
    </div>
  )
}

export default function BigJoys() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
          the big joys in my life
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          {"what brings a huge smile to my face, raising my cheekbones till they hurt! (swipe to view)"}
        </p>

        <div className="space-y-10">
          <ScrollRow items={row1} label="Big joys row 1" />
          <ScrollRow items={row2} label="Big joys row 2" />
        </div>
      </div>
    </section>
  )
}
