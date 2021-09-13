const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [2048, 2048]//'A4',//[2048, 2048]
  // orientation: 'landscape',
  // units: 'cm',
  // pixelsPerInch: 300
};

const sketch = () => {
  const createGrid = () => {
    const points = []
    const count = 40
    for (let x = 0; x < count; ++x) {
      for (let y = 0; y < count; ++y) {
        const u = count <= 1 ? 0.5 : x / (count - 1)
        const v = count <= 1 ? 0.5 : y / (count - 1)
        points.push([u, v])
      }
    }
    return points
  }

  random.setSeed(69)
  const points = createGrid().filter(() => random.value() > 0.5)
  const margin = 200
  const colors = ['#c5a7cd', '#1d493d#', '#2e5d8d', '#96b354']

  return ({ context, width, height }) => {
    //context.fillStyle = 'white'
    context.fillStyle = '#e5ddd2'
    context.fillRect(0, 0, width, height)

    points.forEach(([u, v]) => {
      const x = lerp(margin, width - margin, u)
      const y = lerp(margin, width - margin, v)

      context.beginPath()
      context.arc(x, y, 10, 0, Math.PI * 2, false)
      const colorIndex = Math.floor(Math.random() * colors.length)
      context.strokeStyle = colors[colorIndex]
      // context.strokeStyle = 'black'
      context.lineWidth = 5
      context.stroke()
    })
  };
};

canvasSketch(sketch, settings);
