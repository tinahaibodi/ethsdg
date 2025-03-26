import { JetBrains_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const mono = JetBrains_Mono({ subsets: ["latin"] })

interface NewsletterSignupProps {
  title: string
  description: string
}

export function NewsletterSignup({ title, description }: NewsletterSignupProps) {
  return (
    <section className={`space-y-4 ${mono.className}`}>
      <h2 className="text-lg font-normal">{title}</h2>
      <p className="text-sm text-[#B8C4B5]">{description}</p>
      <form className="mt-6 flex gap-2">
        <Input
          type="email"
          placeholder="you@example.com"
          className="h-8 max-w-xs rounded-none border-[#566453] bg-[#4A5747] text-xs text-[#E5E5E0] placeholder:text-[#B8C4B5]"
        />
        <Button type="submit" className="h-8 rounded-none bg-[#E5E5E0] px-3 text-xs text-[#3D4A3A] hover:bg-[#D1D1CC]">
          →
        </Button>
      </form>
    </section>
  )
}

