const canvasSketch = require('canvas-sketch');

const settings = {
  // dimension: [256,256]
  dimensions: "A4",
  // orientation: "landscape",
  units: "cm",
  pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width/2,height/2, 8, 0, Math.PI * 1, false)
    context.fillStyle = 'purple';
    context.fill()

    context.lineWidth = 1;
    context.strokeStyle = "green"
    context.stroke();
    // context.endPath();
  };
};

canvasSketch(sketch, settings);
