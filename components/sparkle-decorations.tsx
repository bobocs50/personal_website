"use client"

export function Sparkle({ className = "", size = 24, style }: { className?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  )
}

export function CrossSparkle({ className = "", size = 20, style }: { className?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0V20M0 10H20" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function SixPointStar({ className = "", size = 28, style }: { className?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 0L16.5 11.5L28 14L16.5 16.5L14 28L11.5 16.5L0 14L11.5 11.5L14 0Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M14 4L15.5 12.5L24 14L15.5 15.5L14 24L12.5 15.5L4 14L12.5 12.5L14 4Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
    </svg>
  )
}

export function FloatingSparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Sparkle className="absolute top-20 left-[10%] text-white/70 animate-pulse" size={20} />
      <CrossSparkle className="absolute top-40 left-[5%] text-white/50 animate-pulse" size={16} style={{ animationDelay: "0.5s" }} />
      <SixPointStar className="absolute top-16 right-[15%] text-white/60 animate-pulse" size={22} style={{ animationDelay: "1s" }} />
      <CrossSparkle className="absolute bottom-32 right-[8%] text-white/40 animate-pulse" size={18} style={{ animationDelay: "1.5s" }} />
      <Sparkle className="absolute bottom-20 left-[15%] text-white/50 animate-pulse" size={16} style={{ animationDelay: "2s" }} />
      <SixPointStar className="absolute top-[60%] right-[20%] text-white/50 animate-pulse" size={20} style={{ animationDelay: "0.8s" }} />
    </div>
  )
}
