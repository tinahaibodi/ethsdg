"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 p-8 md:p-12 flex justify-end text-sm">
      <div className="space-x-6">
        {[
          { href: "/", label: "Home" },
          { href: "/updates", label: "Updates" },
          { href: "/writings", label: "Writings" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${pathname === href && href !== "/" ? "underline" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

