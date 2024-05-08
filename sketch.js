function setup() {
    createCanvas(500, 500);
    background("black");
  }
  
  function draw() {
    stroke("gray");
    fill("white");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  
