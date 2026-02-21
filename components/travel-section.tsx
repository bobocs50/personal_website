"use client"

import { useMemo, useState } from "react"
import { ComposableMap, Geographies, Geography } from "@vnedyalk0v/react19-simple-maps"
import worldData from "visionscarto-world-atlas/world/110m.json"

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

const countries = [
  { name: "Canada", code: "CA", iso3: "CAN" },
  { name: "China", code: "CN", iso3: "CHN" },
  { name: "Japan", code: "JP", iso3: "JPN" },
  { name: "South Korea", code: "KR", iso3: "KOR" },
  { name: "United States", code: "US", iso3: "USA" },
  { name: "Thailand", code: "TH", iso3: "THA" },
  { name: "Vietnam", code: "VN", iso3: "VNM" },
  { name: "Singapore", code: "SG", iso3: "SGP" },
  { name: "Malaysia", code: "MY", iso3: "MYS" },
  { name: "Italy", code: "IT", iso3: "ITA" },
  { name: "France", code: "FR", iso3: "FRA" },
  { name: "Mexico", code: "MX", iso3: "MEX" },
]

export default function TravelSection() {
  const visited = useMemo(() => new Set(countries.map((country) => country.iso3)), [])
  const [tooltip, setTooltip] = useState({ name: "", x: 0, y: 0, visible: false })

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-10">
          countries i traveled
        </h2>

        <div className="relative w-full max-w-5xl mx-auto h-[360px] md:h-[440px]">
          <ComposableMap
            projectionConfig={{ scale: 145 }}
            width={980}
            height={520}
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={worldData}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const iso3 =
                    geo.properties?.a3 ??
                    geo.properties?.ISO_A3 ??
                    geo.properties?.iso_a3 ??
                    geo.properties?.ADM0_A3 ??
                    geo.id
                  const isVisited = visited.has(iso3)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isVisited ? "#9CC4FF" : "#E6EEF8"}
                      stroke="#1D3D63"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#BBD6FF", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                      onMouseMove={(event) => {
                        const rect = event.currentTarget
                          .closest("svg")
                          ?.getBoundingClientRect()
                        if (!rect) return
                        setTooltip({
                          name: geo.properties?.name ?? "",
                          x: event.clientX - rect.left,
                          y: event.clientY - rect.top,
                          visible: true,
                        })
                      }}
                      onMouseLeave={() => setTooltip((prev) => ({ ...prev, visible: false }))}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>

          {tooltip.visible && (
            <div
              className="pointer-events-none absolute z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-[#1D3D63] shadow-[0_8px_30px_rgba(15,34,56,0.25)]"
              style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
            >
              {tooltip.name}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {countries.map((country) => (
            <span
              key={country.name}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground bg-background hover:border-[#1E3A5F]/40 hover:bg-[#1E3A5F]/5 transition-colors duration-200"
            >
              <span className="text-base">{getFlagEmoji(country.code)}</span>
              {country.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
