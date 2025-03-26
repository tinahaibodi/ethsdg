import { JetBrains_Mono, Inter } from "next/font/google"
import { NavigationMenu } from "../components/navigation-menu"
import { DataTable } from "./components/data-table"
import { columns, Project } from "./components/columns"
import { Filters } from "./components/filters"
const baseURL = process.env.NEXT_PUBLIC_SITE_URL

const mono = JetBrains_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export default async function DashboardPage() {
  const res = await fetch(`${baseURL}/api/dashboard`, {
    cache: 'no-cache',
  })

  const data: Project[] = await res.json()

  console.log(data)

  return (
    <div className={`min-h-screen bg-[#3D4A3A] text-[#E5E5E0] ${inter.className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavigationMenu />
        <main className="py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-normal">Ethereum Alignment Dashboard</h1>
            <p className={`mt-2 text-sm text-[#B8C4B5] ${mono.className}`}>
              Tracking alignment metrics across Ethereum protocols
            </p>
          </div>
          <Filters />
          <div className="mt-6">
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </div>
    </div>
  )
}

