"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Project = {
  id: string
  name: string
  category: string
  type: string
  stage: string
  impact: string
  change: string
  risk: string
  lastUpdated: string
  openSource: boolean
  openStandards: boolean
  decentralized: string
  positiveSum: string
}

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => <div className="w-4">{row.index}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 text-left text-xs font-normal text-[#B8C4B5] hover:text-[#E5E5E0]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NAME
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      )
    },
  },
  {
    accessorKey: "type",
    header: "TYPE",
  },
  {
    accessorKey: "stage",
    header: "STAGE",
    cell: ({ row }) => {
      const stage = row.getValue("stage") as string
      return <div className="inline-flex rounded-sm bg-[#4A5747] px-2 py-1 text-xs">{stage}</div>
    },
  },
  {
    accessorKey: "impact",
    header: "TVL",
    cell: ({ row }) => {
      const impact = row.getValue("impact") as string
      const change = row.original.change || "0%"
      return (
        <div className="flex items-center gap-2">
          <span>{impact}</span>
          <span className={change.startsWith("+") ? "text-green-400" : "text-red-400"}>{change}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "openSource",
    header: "OPEN SOURCE",
    cell: ({ row }) => {
      const isOpenSource = row.getValue("openSource") as boolean
      return (
        <div className="flex justify-center">
          {isOpenSource ? <Check className="h-4 w-4 text-green-400" /> : <X className="h-4 w-4 text-red-400" />}
        </div>
      )
    },
  },
  {
    accessorKey: "decentralized",
    header: "DECENTRALIZATION",
    cell: ({ row }) => {
      const level = row.getValue("decentralized") as string
      return (
        <div className="flex items-center justify-center">
          <div
            className={`h-2 w-16 rounded-full ${
              level === "high" ? "bg-green-400" : level === "medium" ? "bg-yellow-400" : "bg-red-400"
            }`}
          ></div>
        </div>
      )
    },
  },
  {
    accessorKey: "lastUpdated",
    header: "LAST UPDATED",
    cell: ({ row }) => {
      return <div className="text-xs text-[#B8C4B5]">{new Date(row.getValue("lastUpdated")).toLocaleDateString()}</div>
    },
  },
]

