import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { JetBrains_Mono } from "next/font/google"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export function Filters() {
  return (
    <div className={`flex flex-wrap gap-4 ${mono.className}`}>
      <Select>
        <SelectTrigger className="h-8 w-[180px] rounded-none border-[#566453] bg-[#4A5747] text-xs font-normal text-[#E5E5E0]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="rounded-none border-[#566453] bg-[#3D4A3A] text-xs font-normal text-[#E5E5E0]">
          <SelectItem value="l2" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            L2
          </SelectItem>
          <SelectItem value="l3" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            L3
          </SelectItem>
          <SelectItem value="sidechain" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Sidechain
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-8 w-[180px] rounded-none border-[#566453] bg-[#4A5747] text-xs font-normal text-[#E5E5E0]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent className="rounded-none border-[#566453] bg-[#3D4A3A] text-xs font-normal text-[#E5E5E0]">
          <SelectItem value="optimistic" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Optimistic Rollup
          </SelectItem>
          <SelectItem value="zk" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            ZK Rollup
          </SelectItem>
          <SelectItem value="validium" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Validium
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-8 w-[180px] rounded-none border-[#566453] bg-[#4A5747] text-xs font-normal text-[#E5E5E0]">
          <SelectValue placeholder="Stage" />
        </SelectTrigger>
        <SelectContent className="rounded-none border-[#566453] bg-[#3D4A3A] text-xs font-normal text-[#E5E5E0]">
          <SelectItem value="stage0" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Stage 0
          </SelectItem>
          <SelectItem value="stage1" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Stage 1
          </SelectItem>
          <SelectItem value="stage2" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Stage 2
          </SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-8 w-[180px] rounded-none border-[#566453] bg-[#4A5747] text-xs font-normal text-[#E5E5E0]">
          <SelectValue placeholder="Alignment Criteria" />
        </SelectTrigger>
        <SelectContent className="rounded-none border-[#566453] bg-[#3D4A3A] text-xs font-normal text-[#E5E5E0]">
          <SelectItem value="opensource" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Open Source
          </SelectItem>
          <SelectItem value="openstandards" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Open Standards
          </SelectItem>
          <SelectItem value="decentralized" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Decentralized
          </SelectItem>
          <SelectItem value="positivesum" className="focus:bg-[#4A5747] focus:text-[#E5E5E0]">
            Positive-sum
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

