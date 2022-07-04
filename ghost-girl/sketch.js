let ghost;
let thunder;
let flash = false;
let current;
let fade;
let dur;
let time;


function preload() {
  ghost = loadImage('assets/Mono_Redraw_2020.png');
  thunder = loadSound('assets/Thunder2.mp3');
}

function setup() {
  createCanvas(400, 480);
  imageMode(CENTER);
  time = 0;
}

function draw() {
  background(220);
  image(ghost, 200, 240, 400, 480);
  time++;
  current = thunder.currentTime();
  dur = thunder.duration();
  fade = map(current, 0, dur, 0, 255) * 2;
  
  if (flash) {
    if (time % 3 == 0 && fade > 50) {
      fill(255, 249, 179, 50)
    } else {
      fill(130, 124, 77, 50);
    }
    rect(0, 0, 400, 480);
    fill(0, 0, 0, fade);
  } else {
    fill(0);
  }
  rect(0, 0, 400, 480);
}

function mouseClicked() {
  if (!thunder.isPlaying()) {
    thunder.play();
    flash = true;
  } else {
   thunder.jump(0, 7);
  }
  time = 0;
}