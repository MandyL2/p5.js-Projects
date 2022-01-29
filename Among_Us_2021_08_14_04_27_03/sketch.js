let ejectBut;
let slider;
let val;
let isPressed;
let angle = 0;
let name;
let reset;
let impostCount = 2;
let impostor;
let playAgain;

function counter() {
  impostCount--;
}

function eject() {
  removeElements();
  clear();
  isPressed = true;
  let val = slider.value();

  reset = createButton('RESET');
  reset.style('padding', '10px 20px 10px 20px');
  reset.position(150, 335);
  reset.style('background-color', 'red');
  reset.style('font-size', '20px');
  reset.style('border-radius', '60px');

  reset.mousePressed(restart);

  if ((val >= 0 && val <= 10) || (val >= 110 && val <= 140)) {
    counter();
  }

}

function createElements() {
  slider = createSlider(0, 255);
  slider.position(134, 290);

  name = createInput('Enter Crewmate\'s name');
  name.position(30, 340);
  name.style('padding', '5px 15px 5px 15px');
  name.style('background-color', 'white');
  name.style('font-size', '16px');
  name.style('border-radius', '10px');

  ejectBut = createButton("EJECT");
  ejectBut.position(280, 335);
  ejectBut.style('padding', '10px 20px 10px 20px');
  ejectBut.style('background-color', 'red');
  ejectBut.style('font-size', '20px');
  ejectBut.style('border-radius', '60px');
  ejectBut.mousePressed(eject);

}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  textAlign(CENTER);
  createElements();
}

function impostorCheck(val) {
  textSize(16);
  textStyle(BOLD);
  if ((val >= 0 && val <= 10) || (val >= 110 && val <= 140)) {
    impostor = true;
    text(name.value() + " was an Impostor", 200, 60);

  } else {
    text(name.value() + " was not an Impostor.", 200, 45);
    impostor = false;
  }
  text(impostCount + " Impostors left.", 200, 90);

}

function draw() {
  background(220);
  cursor('ZOOM-IN');
  rectMode(CENTER);
  let val = slider.value();

  //eject animation
  if (isPressed) {
    background(231, 56, 15);
    impostorCheck(val);
    strokeWeight(3);
    /*Translate, rotate, & angle code from Daniel Shiffman on YouTube https://www.youtube.com/watch?v=o9sgjuh-CBM*/
    translate(angle, 200);
    rectMode(CENTER);
    rotate(angle);
    fill(val, 97, 61);
    //body
    rect(-20, 3, 15, 30, 5);
    strokeWeight(0);
    fill(val, 48, 37);
    rect(-20, 7, 12, 20, 5);
    strokeWeight(3);
    fill(val, 97, 61);
    rect(-11, 23, 17, 30, 5);
    rect(11, 23, 17, 30, 5);
    rect(0, 0, 39, 63, 60);
    strokeWeight(0);
    rect(-11, 23, 14, 26, 5);
    rect(11, 23, 14, 26, 5);

    //shading
    fill(val, 48, 37);
    arc(0, 20, 25, 20, 350, 190);
    rect(-11, 27, 14, 19, 5);
    rect(11, 27, 14, 19, 5);
    triangle(-18, 20, -5, 20, -18, -10);
    triangle(10, 20, 18, 20, 18, 5);

    //helmet
    strokeWeight(3);
    fill(197, 55, 96);
    ellipse(7, -15, 30, 20);
    strokeWeight(0);
    fill(100);
    ellipse(10, -12, 15, 5);

    angle += 2;

  }
  //character selection scene
  else {
    //character
    fill(196, 0, 0);
    textSize(20);
    textStyle(BOLD);
    text("Find the Impostor!", 200, 45);

    rect(200, 300, 135, 30, 8);
    strokeWeight(4);
    fill(val, 73, 73);
    rect(130, 190, 30, 85, 8);

    strokeWeight(0);
    fill(val, 48, 37);
    rect(130, 199, 26, 65, 8);

    strokeWeight(4);
    fill(val, 73, 73);
    rect(163, 225, 50, 85, 8);
    rect(237, 225, 50, 85, 8);
    rect(200, 160, 124, 185, 70);
    strokeWeight(0);
    rect(163, 225, 46, 81, 8);
    rect(237, 225, 46, 81, 8);

    //shading
    fill(val, 48, 37);
    arc(200, 221, 80, 60, 355, 210);
    triangle(140, 120, 150, 145, 150, 95);
    quad(140, 120, 140, 266, 186, 266, 186, 220);
    quad(214, 230, 214, 266, 260, 266, 260, 200);
    triangle(235, 220, 260, 200, 260, 170);

    //helmet
    strokeWeight(4);
    fill(mouseX, 55, 96);
    ellipse(223, 140, 90, 70);

    strokeWeight(0);
    fill(196, 0, 100);
    ellipse(230, 125, 45, 20);

  }

  if (impostCount == 0) {
    noLoop();
    completed();
  }
}

function restart() {
  removeElements();
  clear();
  isPressed = false;
  angle = 0;
  createElements();
  draw();
  loop();
}

function completed() {
  resetMatrix();
  removeElements();
  clear();
  background(231, 56, 15);

  textSize(16);
  textStyle(BOLD);
  text('Congrats! \nYou\'ve found all the Impostors.\nPlay Again?', 200, 200);
  playAgain = createButton('PLAY AGAIN');
  playAgain.style('padding', '10px 20px 10px 20px');
  playAgain.position(130, 335);
  playAgain.style('background-color', 'red');
  playAgain.style('font-size', '20px');
  playAgain.style('border-radius', '60px');

  impostCount = 2;
  playAgain.mousePressed(restart);
}