let playerGuess;
let guess;
let button;
let tooLong = false;
let show = false;
let showH;
let showE;
let showL;
let showO;
let wrong = 7;
let showWord = ['', '', '', '', ''];
let gameOver;
let playAgain;
let win = 0;


function check() {
  let guessCap = playerGuess.toUpperCase();

  if (guess.value().length > 1 || guessCap == '') {
    tooLong = true;
    if(showH && showE && showL && showO){
          win++;
        }
    gameOver = wrong == 0 ? true : false;
    
  } else {
    tooLong = false;
    switch (guessCap) {
      case 'H':
        showH = true;
        win++;
        break;
      case 'E':
        showE = true;
        win++;
        break;
      case 'L':
        showL = true;
        win++;
        break;
      case 'O':
        showO = true;
        win++;
        break;
      default:
        showH = false;
        showE = false;
        showL = false;
        showO = false;
        wrong--;

        gameOver = wrong == -1 ? true : false;
    }
  }

  guess.value('guess letter here');
}

function onFocus() {
  guess.value('');
}

function winDisplay(){
   removeElements();
    clear();
    background(130, mouseY, 0);
    fill(255);
    textSize(30);
    textStyle(NORMAL);
    strokeWeight(1);
    text('Congrats! You Win!', 200, 50);
    gameOverBut();
    strokeWeight(0);
    fill(222, 153, 62);
    ellipse(235, 280, 90, 110);
    ellipse(165, 280, 90, 110);
    fill(250, 181, 77);
    ellipse(200, 280, 90, 110);
    fill(0);
    arc(180, 280, 25, 15, 170, 10, PIE);
    arc(220, 280, 25, 15, 170, 10, PIE);
    quad(200, 300, 170, 292, 200, 310, 230, 292);

    fill(207, 134, 52);
    ellipse(200, 230, 100, 15);
    strokeWeight(4);
    stroke(255);
    noFill();
    arc(200, 220, 100, 180, 170, 10);
}

function showHead(){
  //pumpkin head
    strokeWeight(0);
    fill(222, 153, 62);
    ellipse(215, 65, 40, 50);
    ellipse(185, 65, 40, 50);
    fill(250, 181, 77);
    ellipse(200, 65, 40, 50);
    fill(0);
    arc(188, 65, 13, 8, 170, 10, PIE);
    arc(212, 65, 13, 8, 170, 10, PIE);
    quad(200, 75, 180, 67, 200, 85, 220, 67);
}

function showBody(){
  strokeWeight(0);
    fill(156, 137, 107);
    rect(200, 120, 40, 80);
    triangle(219, 80, 260, 80, 219, 160);
    triangle(181, 80, 140, 80, 181, 160);
    triangle(180, 160, 220, 160, 200, 180);
    triangle(219, 145, 215, 160, 235, 165);
    triangle(181, 145, 185, 160, 165, 165);
    triangle(180, 145, 220, 145, 180, 175);
    triangle(220, 145, 190, 145, 220, 175);
}

function showLeftHand(){
   //left hand
    strokeWeight(3);
    stroke(82, 47, 25)
    line(338, 220, 328, 230);
    line(328, 230, 325, 240);

    line(342, 220, 345, 240);
    line(345, 240, 340, 250);

    line(349, 220, 352, 243);
    line(352, 243, 347, 254);

    line(354, 220, 359, 240);
    line(359, 240, 354, 250);

    strokeWeight(0);
    triangle(345, 195, 360, 230, 330, 225);
}

function showRightHand(){
    strokeWeight(3);
    line(62, 220, 72, 230);
    line(72, 230, 75, 240);

    line(58, 220, 55, 240);
    line(55, 240, 60, 250);

    line(51, 220, 48, 243);
    line(48, 243, 53, 254);

    line(46, 220, 41, 240);
    line(41, 240, 46, 250);

    strokeWeight(0);
    triangle(55, 195, 70, 225, 40, 230);
}

function showHat(){
    fill(207, 134, 52);
    ellipse(200, 50, 65, 15);
    fill(173, 56, 38);
    ellipse(200, 40, 95, 25);
    fill(150, 37, 29);
    ellipse(200, 41, 40, 15);
    rect(200, 25, 39, 40, 5);
    fill(173, 56, 38);
    ellipse(200, 10, 40, 15);
}

function loseDisplay(){
   fill(0);
    strokeWeight(0);
    arc(50, 180, 190, 108, 170, 10, PIE);
    arc(350, 180, 190, 108, 170, 10, PIE);
    quad(200, 300, -10, 267, 30, 410, 200, 410);
    quad(200, 300, 410, 267, 370, 410, 200, 410);
    fill(255);
    circle(50, 153, 45);
    circle(350, 153, 45);
    fill(89, 255, 0);
    circle(50, 153, 30);
    circle(350, 153, 30);
    fill(0);
    strokeWeight(10);
    point(50, 153);
    point(350, 153);
    //teeth
    strokeWeight(0);
    fill(255, 201, 243);
    quad(200, 300, -10, 267, 1, 300, 200, 330);
    quad(200, 300, 410, 267, 399, 300, 200, 330);
    fill(255, 245, 201);
    quad(35, 280, 55, 295, 35, 350, 15, 295);
    quad(105, 290, 125, 305, 105, 360, 85, 305);
    quad(175, 300, 195, 315, 175, 370, 155, 315);
    quad(245, 300, 265, 315, 245, 370, 225, 315);
    quad(315, 290, 335, 305, 315, 360, 295, 305);
    quad(385, 280, 400, 295, 385, 350, 365, 295);
}

function createElements() {
  guess = createInput('guess letter here');
  guess.style('padding', '5px 15px 5px 15px');
  guess.position(10, 335);
  guess.style('font-size', '18px');
  guess.style('border-radius', '60px');
  button = createButton('GUESS');
  button.style('padding', '5px 15px 5px 15px');
  button.position(280, 335);
  button.style('color', 'white');
  button.style('background-color', 'blue')
  button.style('font-size', '20px');
  button.style('border-radius', '60px');

  guess.mousePressed(onFocus);
  button.mousePressed(check);

}

function restart() {
  removeElements();
  clear();
  gameOver = false;
  showH = false;
  showE = false;
  showL = false;
  showO = false;
  showWord = ['', '', '', '', ''];
  wrong = 7;
  win = 0;
  createElements();
  draw();
}

function gameOverBut() {
  playAgain = createButton('Play Again');
  playAgain.position(140, 80);
  playAgain.style('padding', '5px 15px 5px 15px');
  playAgain.style('color', 'white');
  playAgain.style('background-color', 'blue')
  playAgain.style('font-size', '20px');
  playAgain.style('border-radius', '60px');

  playAgain.mousePressed(restart);

}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);
  textStyle(BOLD);
  createElements();
}

function draw() {
  background(220);
  playerGuess = guess.value();
  strokeWeight(4);
  fill(82, 47, 25);
  rect(200, 145, 15, 115);

  fill(255);
  stroke(0);
  rect(110, 250, 35, 55);
  rect(155, 250, 35, 55);
  rect(200, 250, 35, 55);
  rect(245, 250, 35, 55);
  rect(290, 250, 35, 55);

  textSize(10);
  text('guesses left: ' + wrong, 50, 50);

  if (tooLong) {
    textSize(16);
    text('Enter one letter only!', 200, 320);
  }

  if (showH) {
    showWord[0] = 'H';
  }

  if (showE) {
    showWord[1] = 'E'
  }

  if (showL) {
    showWord[2] = 'L';
    showWord[3] = 'L';
  }

  if (showO) {
    showWord[4] = 'O';
  }

  textSize(30);
  text(showWord[0], 110, 260);
  text(showWord[1], 155, 260);
  text(showWord[2], 200, 260);
  text(showWord[3], 245, 260);
  text(showWord[4], 290, 260);

  if (wrong < 5) {
    fill(82, 47, 25);
    strokeWeight(0);
    quad(215, 80, 300, 110, 295, 115, 205, 100);
    quad(300, 110, 295, 115, 340, 200, 350, 200);
  }

  if (wrong < 4) {
   showLeftHand();
  }

  if (wrong < 3) {
    quad(185, 80, 100, 110, 105, 115, 195, 100);
    quad(100, 110, 105, 115, 60, 200, 50, 200);
  }

  if (wrong < 2) {
   showRightHand();
  }

  if (wrong < 6) {
    //body
    showBody();
  }

  if (wrong < 7) {
    showHead();
  }

  if (wrong < 1) {
    //hat
   showHat();
  }

  if (gameOver) {
    removeElements();
    clear();
    background(250, 181, 77);
    textSize(25);
    text('Game Over!', 200, 50);
    gameOverBut();
   loseDisplay();
  }

  if (win == 5) {
    winDisplay();
  }
}