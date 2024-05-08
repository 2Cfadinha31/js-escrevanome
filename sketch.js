function setup() {
    createCanvas(500, 500);
    background("white");
  }
  
  function draw() {
    stroke("black");
    fill("blue");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }
  