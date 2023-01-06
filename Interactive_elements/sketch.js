let pos = 0;
let r = 77;
let g = 250;
let b = 204;
let fontSize = 24;
let scroll = ["s", "c", "r", "o", "l", "l"];

function preload() {
  loadFont(
    "https://use.typekit.net/af/d86242/00000000000000007735f723/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3"
  );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // rectMode(CENTER);
  textAlign(CENTER);
  var w = windowWidth;
  var h = windowHeight;

  background(220);
  for (let i = 0; i < 10; i++) {
    let size = constrain(pos - i * 100, 0, w * 2);

    if ((i == 9 && size > w) || size < 0) {
      circle(w / 2, h / 2, w * 2);
      spiralText();
    } else {
      fill(color(r + i * 10, g - i * 26, b - i * 8));
      circle(w / 2, h / 2, size);
      print(size);
    }
  }
}

function spiralText() {
  
  var w = windowWidth;
  var h = windowHeight;
  let spinRadius = 25;
  let stagger = 1.1;
  
  fill(0);
  textFont("droog", fontSize);
  for (let i = 0; i < scroll.length; i++) {
    push();
    translate(
      w / 2 + spinRadius * cos(radians(fontSize) * -1 + i),
      h / 2 + spinRadius * sin(radians(fontSize) * -1 + i)
    );
    // rotate(fontSize);
    text(scroll[i], 0, 0);
    spinRadius += 25 + fontSize*0.4;
      pop();
  }
}

function mouseWheel(event) {
  print(event.delta);
  let mouse = constrain(event.delta, -1000, 1000);
  pos += mouse;
  r += event.delta / 15;
  g += event.delta / 20;
  b -= event.delta / 25;
  fontSize += constrain(event.delta, 0, 1);
  print(event.delta);
  //uncomment to block page scrolling
  return false;
}
/* put scroll letters in array and make them grow as user scrolls, move in circular motion. can only scroll one way to move everything, make images appear larger*/
