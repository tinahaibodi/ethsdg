import { JetBrains_Mono, Inter } from "next/font/google"
import { NavigationMenu } from "../components/navigation-menu"
import { BlogPost } from "./components/blog-post"
import { NewsletterSignup } from "./components/newsletter-signup"

const mono = JetBrains_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const posts = [
  {
    id: "SDG-0002",
    category: "Research",
    title: "App Integration Guidelines",
    description: "Building sustainable applications with ethSDG verification.",
    date: "2024.11.26",
    author: "Ethereum Research Team",
  },
  {
    id: "SDG-0001",
    category: "Research",
    title: "Sustainability Metrics Implementation",
    description: "Exploring SDG metrics, RPC implementation, & Account Delegation on Ethereum",
    date: "2024.10.18",
    author: "Ethereum Research Team",
  },
]

export default function BlogPage() {
  return (
    <div className={`min-h-screen bg-[#3D4A3A] text-[#E5E5E0] ${inter.className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <NavigationMenu />
        <main className="py-16">
          <div className="mb-16">
            <h1 className="text-2xl font-normal">Blog</h1>
            <p className={`mt-2 text-sm text-[#B8C4B5] ${mono.className}`}>
              Updates and insights on Ethereum sustainability standards
            </p>
          </div>

          <div className="space-y-16">
            {posts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-32">
            <NewsletterSignup />
          </div>
        </main>
      </div>
    </div>
  )
}

