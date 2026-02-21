"use client"

import { useState } from "react"

interface Country {
  name: string
  code: string
  highlight?: string
}

const countries: Country[] = [
  { name: "Canada", code: "CA", highlight: "home base" },
  { name: "United States", code: "US", highlight: "road trips and city adventures" },
  { name: "Japan", code: "JP", highlight: "endless inspiration everywhere" },
  { name: "South Korea", code: "KR", highlight: "street food heaven" },
  { name: "China", code: "CN", highlight: "where my roots are" },
  { name: "Thailand", code: "TH", highlight: "warmth and kindness" },
  { name: "Italy", code: "IT", highlight: "art, history, and pasta" },
  { name: "France", code: "FR", highlight: "the bakeries alone are worth it" },
  { name: "United Kingdom", code: "GB", highlight: "museums and rainy walks" },
  { name: "Mexico", code: "MX", highlight: "color and culture" },
  { name: "Australia", code: "AU", highlight: "nature on another level" },
  { name: "Vietnam", code: "VN", highlight: "pho for breakfast, lunch, and dinner" },
]

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="10" cy="10" rx="4" ry="8.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 10H18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 5.5H16.5" stroke="currentColor" strokeWidth="1" />
      <path d="M3.5 14.5H16.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default function CountriesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-2xl md:text-3xl font-medium text-foreground">
            countries i traveled
          </h2>
          <GlobeIcon className="text-[#1E3A5F]" />
        </div>
        <p className="text-muted-foreground text-sm mb-12">
          {"places that have shaped my perspective and fed my curiosity. "}
          <span className="text-[#1E3A5F] font-medium">{countries.length} countries</span>
          {" and counting."}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {countries.map((country, idx) => (
            <div
              key={country.code}
              className="group relative overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-[#1E3A5F]/40 hover:shadow-md cursor-default"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Flag bar */}
              <div
                className={`h-1.5 w-full transition-all duration-300 ${
                  hoveredIdx === idx ? "bg-[#1E3A5F]" : "bg-[#1E3A5F]/15"
                }`}
              />
              <div className="p-4">
                <p className="text-xs text-[#1E3A5F]/50 font-mono mb-1">{country.code}</p>
                <p className="text-sm font-medium text-foreground mb-2">{country.name}</p>
                <p
                  className={`text-xs text-muted-foreground leading-relaxed transition-all duration-300 ${
                    hoveredIdx === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  }`}
                >
                  {country.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-12 rounded-2xl border border-border bg-[#F5F7FA] p-8 flex flex-col items-center justify-center gap-3">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-[#1E3A5F]/20">
            <ellipse cx="60" cy="30" rx="55" ry="25" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 15C25 20 35 25 45 22C55 19 60 25 70 28C80 31 95 25 100 20" stroke="currentColor" strokeWidth="1.2" />
            <path d="M15 35C25 38 40 40 50 36C60 32 75 38 85 42C95 46 105 40 110 35" stroke="currentColor" strokeWidth="1.2" />
            {/* Dots for visited countries */}
            <circle cx="30" cy="22" r="2.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="55" cy="25" r="2.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="75" cy="20" r="2.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="90" cy="30" r="2.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="42" cy="35" r="2.5" fill="currentColor" fillOpacity="0.6" />
            <circle cx="65" cy="38" r="2.5" fill="currentColor" fillOpacity="0.6" />
          </svg>
          <p className="text-xs text-muted-foreground">
            {"the world is big. can't wait to see more of it."}
          </p>
        </div>
      </div>
    </section>
  )
}
