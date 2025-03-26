import Link from "next/link"
import Image from "next/image"
import { JetBrains_Mono } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export function NavigationMenu() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/197836028-hg4uqpDGzKozR767M06aDCShRq5oE3.png"
            alt="ethSDG Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </Link>
      </div>
      <div className={`hidden items-center gap-8 ${mono.className} md:flex`}>
        <Link href="/dashboard" className="text-xs text-[#B8C4B5] hover:text-[#E5E5E0] hover:underline">
          Dashboard
        </Link>
        <Link href="#" className="text-xs text-[#B8C4B5] hover:text-[#E5E5E0] hover:underline">
          Docs
        </Link>
        <Link href="/blog" className="text-xs text-[#B8C4B5] hover:text-[#E5E5E0] hover:underline">
          Blog
        </Link>
      </div>
    </nav>
  )
}

