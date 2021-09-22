const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')
const palettes = require('nice-color-palettes')

const settings = {
  dimensions: [2048, 2048]//[2048, 2048]//'A4'
  // dimensions: [2560, 1600]
  // orientation: 'landscape',
  // units: 'cm',
  // pixelsPerInch: 300
};

//TODO add random symbols
//TODO adapt for MacBook Screensize
//TODO make it easy to change between square and MacBook size

random.setSeed(random.getRandomSeed())
console.log(random.getSeed())

const sketch = () => {
  const colorCount = random.rangeFloor(2, 6)
  const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount)
  console.log(palette)

  const createGrid = () => {
    const points = []
    const count = 70
    // for (let x = 0.5; x < count-1; ++x) {
      // for (let y = 0; y < count-9; ++y) {
    for (let x = 0; x < count; ++x) {
      for (let y = 0; y < count; ++y) {
        const u = count <= 1 ? 0.5 : x / (count - 1)
        const v = count <= 1 ? 0.5 : y / (count - 1)
        const radius = Math.abs(random.noise2D(u, v)) * 0.2
        points.push({
          color: random.pick(palette),
          radius, //: Math.abs(0.01 + random.gaussian() * 0.03),
          position: [u, v],
          rotation: random.noise2D(u, v)
        })
      }
    }
    return points
  }

  // random.setSeed(69)
  const points = createGrid().filter(() => random.value() > 0.5)
  const margin = 200
  // const colors = ['#c5a7cd', '#1d493d#', '#2e5d8d', '#96b354']

  return ({ context, width, height }) => {
    context.fillStyle = '#e5ddd2'
    context.fillRect(0, 0, width, height)

    points.forEach(data => {
      const {radius, position, color, rotation} = data
      const [u, v]  = position
      const x = lerp(margin, width - margin, u)
      const y = lerp(margin, width - margin, v)

      // context.beginPath()
      // context.arc(x, y, radius * width, 0, Math.PI * 2, false)
      // // const colorIndex = Math.floor(random.value() * colors.length)
      // // context.fillStyle = colors[colorIndex]
      // context.fillStyle = color
      // context.lineWidth = 5
      // context.fill()

      context.save()
      context.fillStyle = color
      const size = radius*width
      context.font = size+'px "Helvetica"'
      context.translate(x, y)
      context.rotate(rotation)
      context.fillText('-', 0, 0)
      context.restore()
    })
  };
};

canvasSketch(sketch, settings);

//Cool Palettes
//["#00aaff", "#ffaa00", "#aa00ff", "#ff00aa"]