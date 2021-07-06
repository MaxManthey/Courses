const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width/2,height/2, 400, 0, Math.PI * 1, false)
    context.fillStyle = 'purple';
    context.fill()

    context.lineWidth = 20;
    context.strokeStyle = "green"
    context.stroke();
    // context.endPath();
  };
};

canvasSketch(sketch, settings);
