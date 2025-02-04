class HoudiniFluid {
  static get inputProperties() {
    return ["--time"]
  }

  paint(ctx, size, properties) {
    const time = properties.get("--time")
    const w = size.width
    const h = size.height

    ctx.fillStyle = "#f0f0f0"
    ctx.fillRect(0, 0, w, h)

    const drawCircle = (x, y, r, color) => {
      ctx.beginPath()
      ctx.arc(x, y, r, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
    }

    for (let i = 0; i < 5; i++) {
      const x = w / 2 + Math.sin(time * 0.1 + i) * 50
      const y = h / 2 + Math.cos(time * 0.1 + i * 2) * 50
      const r = 20 + Math.sin(time * 0.2 + i * 3) * 10
      const color = `rgba(0, 0, 0, ${0.1 + i * 0.02})`
      drawCircle(x, y, r, color)
    }
  }
}

//Import registerPaint if it's not globally available.  This is a common pattern in browser environments.
const registerPaint = window.registerPaint || (() => {}) //This will default to a no-op if registerPaint is not defined.

registerPaint("houdini-fluid", HoudiniFluid)

