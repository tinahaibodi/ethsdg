import { JetBrains_Mono, Inter } from "next/font/google"
import { NavigationMenu } from "../components/navigation-menu"
import { DataTable } from "./components/data-table"
import { columns } from "./components/columns"
import { Filters } from "./components/filters"

const mono = JetBrains_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

// Sample data for Ethereum L2s
const data = [
  {
    id: "1",
    name: "Arbitrum One",
    category: "L2",
    type: "Optimistic Rollup",
    stage: "Stage 1",
    impact: "$14.25B",
    change: "+2.42%",
    risk: "medium",
    lastUpdated: "2025-02-17",
    openSource: true,
    openStandards: true,
    decentralized: "medium",
    positiveSum: "high",
  },
  {
    id: "2",
    name: "Optimism",
    category: "L2",
    type: "Optimistic Rollup",
    stage: "Stage 1",
    impact: "$11.71B",
    change: "+1.16%",
    risk: "medium",
    lastUpdated: "2025-02-16",
    openSource: true,
    openStandards: true,
    decentralized: "medium",
    positiveSum: "high",
  },
  {
    id: "3",
    name: "Base",
    category: "L2",
    type: "Optimistic Rollup",
    stage: "Stage 0",
    impact: "$5.09B",
    change: "-1.46%",
    risk: "medium",
    lastUpdated: "2025-02-15",
    openSource: true,
    openStandards: true,
    decentralized: "low",
    positiveSum: "medium",
  },
  {
    id: "4",
    name: "zkSync Era",
    category: "L2",
    type: "ZK Rollup",
    stage: "Stage 0",
    impact: "$956.12M",
    change: "-0.27%",
    risk: "medium",
    lastUpdated: "2025-02-14",
    openSource: false,
    openStandards: true,
    decentralized: "low",
    positiveSum: "medium",
  },
  {
    id: "5",
    name: "Starknet",
    category: "L2",
    type: "ZK Rollup",
    stage: "Stage 0",
    impact: "$662.44M",
    change: "-2.55%",
    risk: "medium",
    lastUpdated: "2025-02-13",
    openSource: false,
    openStandards: true,
    decentralized: "low",
    positiveSum: "medium",
  },
  {
    id: "6",
    name: "Linea",
    category: "L2",
    type: "ZK Rollup",
    stage: "Stage 0",
    impact: "$559.81M",
    change: "-2.75%",
    risk: "medium",
    lastUpdated: "2025-02-12",
    openSource: true,
    openStandards: true,
    decentralized: "low",
    positiveSum: "medium",
  },
]

export default function DashboardPage() {
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

