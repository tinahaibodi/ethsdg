"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "./components/animated-background"
import Nav from "./components/nav"

export default function Page() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gray-50 flex flex-col justify-between p-8 md:p-12 overflow-hidden">
        <AnimatedBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl relative z-10 mt-[100px]"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-light leading-relaxed tracking-wide">
            <span className="font-medium">Ethereum SDG</span> — goals and standards that help keep Ethereum more{" "}
            <span className="text-green-600">accountable</span> <span className="inline-block">↳</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10"
        >
          <Button
            variant="ghost"
            className="text-gray-900 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-lg px-0 font-light"
          >
            Learn more about ETH SDG here
            <span className="ml-2">→</span>
          </Button>
        </motion.div>
      </main>
    </>
  )
}

