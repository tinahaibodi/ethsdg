import Link from "next/link"
import { JetBrains_Mono } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"] })

interface BlogPostProps {
  post: {
    id: string
    category: string
    title: string
    description: string
    date: string
    author: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.id.toLowerCase()}`}>
        <div className="space-y-4">
          <div className={`${mono.className} text-xs text-[#B8C4B5]`}>{post.category}</div>
          <div className="space-y-2">
            <h2 className={`${mono.className} text-2xl font-normal leading-tight tracking-tight`}>{post.title}</h2>
            <div className={`flex items-center gap-x-4 text-xs text-[#B8C4B5] ${mono.className}`}>
              <time dateTime={post.date.replace(".", "-")}>{post.date}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[#B8C4B5]">{post.description}</p>
        </div>
      </Link>
    </article>
  )
}

