let icon;
let home;
let browse;
let page;
let clickCount = 0;
let but;

function preload() {
  icon = loadImage("images/App_Icon.jpg");
  home = loadImage("images/Home.jpg");
  browse = loadImage("images/Browse_Groups.jpg");
  page = loadImage("images/Group_Page.jpg");
}

function increase() {
  clickCount++;
}

function reset() {
  clickCount = 0;
}

function setup() {
  createCanvas(550, 575);
  but = createButton("Click Here");
  but.position(10, 50);
  but.style('padding', '5px 5px 5px 5px');
  but.style('border-radius', '15px');
  but.style('background-color', 'yellow');

  but.mousePressed(increase);
}

function draw() {
  background(255);

  switch (clickCount) {
    case 0:
      image(icon, 0, 0);
      icon.resize(550, 0);
      break;
    case 1:
      image(home, 100, 0);
      home.resize(0, 575);
      break;
    case 2:
      image(browse, 100, 0);
      browse.resize(0, 575);
      break;
    case 3:

      image(page, 100, 0);
      page.resize(0, 575);
      break;

    case 4:
      reset();
  }
}