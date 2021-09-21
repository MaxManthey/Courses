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
    const count = 20
    for (let x = 0; x < count; ++x) {
      for (let y = 0; y < count; ++y) {
        const u = count <= 1 ? 0.5 : x / (count - 1)
        const v = count <= 1 ? 0.5 : y / (count - 1)
        points.push({
          radius: Math.abs(0.01 + random.gaussian() * 0.03),
          position: [u, v]
        })
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

    points.forEach(data => {
      const {radius, position} = data
      const [u, v]  = position
      const x = lerp(margin, width - margin, u)
      const y = lerp(margin, width - margin, v)

      context.beginPath()
      context.arc(x, y, radius * width, 0, Math.PI * 2, false)
      const colorIndex = Math.floor(Math.random() * colors.length)
      context.fillStyle = colors[colorIndex]
      // context.strokeStyle = 'black'
      context.lineWidth = 5
      context.fill()
    })
  };
};

canvasSketch(sketch, settings);
