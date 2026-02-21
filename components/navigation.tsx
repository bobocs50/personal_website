"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "works", href: "/" },
  { label: "about", href: "/about" },
]

export default function Navigation() {
  const pathname = usePathname()
  const isOnDarkBg = pathname === "/" || pathname.startsWith("/about")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 md:px-12 lg:px-16">
      <Link
        href="/"
        aria-label="Home"
        className={`font-medium text-lg ${isOnDarkBg ? "text-white/90" : "text-[#1E3A5F]"}`}
      >
        fz
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-sm underline-offset-4 hover:underline transition-colors ${
              isOnDarkBg ? "text-white/80 hover:text-white" : "text-[#1E3A5F] hover:text-[#1E3A5F]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
