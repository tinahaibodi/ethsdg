"use client"

import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

const HoudiniAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    let time = 0
    const loop = () => {
      time += 0.05
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = `paint(houdini-fluid)`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // @ts-ignore
      canvas.style.setProperty("--time", time)

      requestAnimationFrame(loop)
    }

    loop()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-[400px] h-[400px] rounded-full shadow-lg"
      style={{ "--time": 0 } as React.CSSProperties}
    />
  )
}

export default HoudiniAnimation

