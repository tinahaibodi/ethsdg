import { Button } from "@/components/ui/button"
import { NavigationMenu } from "./components/navigation-menu"
import { JetBrains_Mono, Inter } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#3D4A3A] text-[#E5E5E0] ${inter.className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <NavigationMenu />
        <main className="flex flex-col justify-center py-32">
          <div className="mb-16">
            <div className={`inline-flex items-center rounded-full bg-[#4A5747] px-3 py-1 text-xs ${mono.className}`}>
              INTRODUCING
              <span className="ml-2 text-[#B8C4B5]">ETHSDG</span>
            </div>
          </div>
          <div className="relative mb-8">
            <h1 className="relative text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl">
              Tracking alignment across
              <br />
              Ethereum's ecosystem
            </h1>
          </div>
          <p className={`mb-16 text-base leading-relaxed text-[#B8C4B5] ${mono.className}`}>
            Identifying coherence with Ethereum
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className={`${mono.className} h-12 rounded-none bg-[#E5E5E0] px-6 text-sm text-[#3D4A3A] hover:bg-[#D1D1CC]`}
            >
              View Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`${mono.className} h-12 rounded-none border-[#566453] bg-[#4A5747] px-6 text-sm text-[#E5E5E0] hover:bg-[#566453]`}
            >
              Read docs
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

