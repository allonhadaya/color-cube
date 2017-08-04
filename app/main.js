const p5 = require('p5');

new p5(p => {

  let z = 0;
  const drawPlane = () => {
    console.log(z)
    for (let x = 0; x < 256; x++) {
      for (let y = 0; y < 256; y++) {
        p.set(x, y, p.color(x, y, z));
      }
    }
    p.updatePixels();
  };

  p.setup = () => {
    p.createCanvas(256, 256);
    drawPlane();
  };

  p.draw = () => {

    if (z > 0 && p.keyIsDown(p.DOWN_ARROW)) {
      z--;
      drawPlane();
      return;
    }

    if (z < 255 && p.keyIsDown(p.UP_ARROW)) {
      z++;
      drawPlane();
      return;
    }

  };
});
