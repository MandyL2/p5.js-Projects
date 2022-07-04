//images
let rebecca;
let annie;
let audrey;
let carly;
let landscape;
let marceline;
let nagisa;
let rosette;
let love;
let selfPortrait;
let selfPortrait2;
let bg;

//music
let kool;
let dragonAge;
let kissamile;
let bradio;
let keep;
let adventureTime;
let dango;
let mxmtoon;
let loona;


let i;
let lastNum = 9;
let item = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function preload() {
  selfPortrait = loadImage("images/Self portrait.png");
  bg = loadImage("images/MC BG.png");
  
  //audio credit: https://www.youtube.com/watch?v=UWLIgjB9gGw
  kool = loadSound("music/Celebration.mp3");
  //audio credit: https://www.youtube.com/watch?v=bBQZnLP4FLI
  dragonAge = loadSound("music/Dragon Age Origins - Grey Warden Song.mp3");
  //audio credit: https://www.youtube.com/watch?v=gF-qGr3XUq0
  kissamile = loadSound("music/KISSAMILÉ Chill Bird.mp3");
  //audio credit: https://www.youtube.com/watch?v=RCzBN-kUPHo
  bradio = loadSound("music/BRADIO Shiawase no Shanana.mp3");
  //audio credit: https://www.youtube.com/watch?v=h28xpNvW9Yw
  adventureTime = loadSound("music/I'm Just Your Problem.mp3");
  //audio credit: played by me :)) originally by Jun Maeda
  dango = loadSound("music/Dango_piano.mp3");
  //audio credit: https://www.youtube.com/watch?v=_LMclV8Ow9c
  mxmtoon = loadSound("music/Falling for U.mp3");
  //audio credit: https://www.youtube.com/watch?v=ZUa1Cye54B8
  loona = loadSound("music/Star.mp3");
  //audio credit: https://www.youtube.com/watch?v=iQBop_g73qw
  keep = loadSound("music/keepitinside - thinking about you.mp3");
} 

function setup() {
  createCanvas(850, 550);
  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);
  i = 9;
  
  rebecca = loadImage("images/2019.png");
  annie = loadImage("images/Annie.png");
  audrey = loadImage("images/Audrey.png");
  carly = loadImage("images/Carly.png");
  landscape = loadImage("images/Landscape.png");
  marceline = loadImage("images/Marceline.png");
  nagisa = loadImage("images/Nagisa.png");
  rosette = loadImage("images/Rosette.png");
  love = loadImage("images/love.png");
  selfPortrait2 = loadImage("images/Chibi_media.png");
}

function draw() {
  background(235);
  image(bg, 425, 275);
  //switch reference: https://www.w3schools.com/js/js_switch.asp
  switch (i) {
    case 0:
      image0();
      break;
    case 1:
      image1();
      break;
    case 2:
      image2();
      break;
    case 3:
      image3();
      break;
    case 4:
      image4();
      break;
    case 5:
      image5();
      break;
    case 6:
      image6();
      play = true;
      break;
    case 7:
      image7();
      break;
    case 8:
      image8();
      break;
    case -1:
      end();
      break;
    default:
      home();
  }

}

function playMusic(i, num, song){
  if(i == num) {
    song.setVolume(0.7);
    song.play();
    song.rate(1);
    song.loop();
  }
  else{
    song.stop();
  }
}

function change() {
  clear();
  removeElements();
  //splice reference: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
  i = (item.length == 0) ? -1 : random(item);
  let index = item.indexOf(i);
  item.splice(index, 1);
  playMusic(i, 0, kool);
  playMusic(i, 1, dragonAge);
  playMusic(i, 2, kissamile);
  playMusic(i, 3, bradio);
  playMusic(i, 4, keep);
  playMusic(i, 5, adventureTime);
  playMusic(i, 6, dango);
  playMusic(i, 7, mxmtoon);
  playMusic(i, 8, loona);
 
}

function enterGallery() {
  but = createButton("Enter Gallery");
  but.position(360, 430);
  but.style('padding', '15px 15px 15px 15px');
  but.style('border-radius', '15px');
  but.style('background-color', '#e5db5b');
  but.style('font-size', '25px');

  but.mousePressed(change);
}

function home() {
  textSize(30);
  //banner
  strokeWeight(0);
  fill(229, 219, 91, 200);
  rect(425, 50, 850, 80);
  strokeWeight(6);
  stroke(176, 245, 200, 200);
  line(0, 23, 850, 23);
  line(0, 77, 850, 77);
  strokeWeight(0);
  fill(0);
  text("GART Final Project. Welcome!", 425, 60);
  strokeWeight(6);
  //easel stand
  stroke(102, 57, 40);
  line(200, 240, 160, 420);
  line(200, 240, 240, 420);
  //portrait string
  line(600, 120, 520, 200);
  line(600, 120, 680, 200);
  strokeWeight(4);
  //frame
  fill(138, 85, 62);
  rect(200, 120, 10, 25);
  fill(255);
  rect(200, 240, 220, 220);
  image(selfPortrait, 200, 240, 200, 200);
  fill(138, 85, 62);
  rect(200, 130, 240, 15);
  rect(200, 350, 240, 15);
  fill(255);
  rect(600, 250, 200, 100);
  textSize(28);
  strokeWeight(0);
  fill(0);
  text("Today's artist: \nMandy Luu", 600, 240);

  enterGallery();
}

function end() {
  textSize(30);
  strokeWeight(0);
  fill(255);
  quad(635, 450, 610, 400, 630, 320, 550, 340);
  rect(425, 275, 450, 160, 20);
  fill(0);
  text("Thank you for coming!\n For more art, visit:", 425, 240);
  text("https://ruka-portfolio.carrd.co/", 425, 330);
  image(selfPortrait2, 730, 450, 200, 200);

  again = createButton("View Again");
  again.position(360, 430);
  again.style('padding', '15px 15px 15px 15px');
  again.style('border-radius', '15px');
  again.style('background-color', '#e5db5b');
  again.style('font-size', '25px');

  again.mousePressed(reset);
}

function reset() {
  removeElements();
  i = 9;
  item = [0, 1, 2, 3, 4, 5, 6, 7, 8]
}

function description(article) {
  textSize(20);
  textAlign(LEFT);
  fill(255);
  stroke(0);
  //accessing object properties reference: https://www.w3schools.com/js/js_objects.asp
  let imageX = article.img.x;
  let imageY = article.img.y;
  let imageWidth = article.img.width;
  let imageLength = article.img.length;
  let imageName = article.img.name;
  let captionX = article.caption.x;
  let captionY = article.caption.y;
  let captionWidth = article.caption.width;
  let captionLength = article.caption.length;
  let descriptionTitle = article.description.title; 
  let descriptionX = article.description.x;
  let descriptionY1 = article.description.y1;
  let descriptionDesc = article.description.desc;
  let descriptionY2 = article.description.y2;
  let songName = article.song;
  //image + frame
  rect(imageX, imageY, imageWidth, imageLength);
  image(imageName, imageX, imageY);
  //caption
  fill(176, 245, 200, 200);
  strokeWeight(0);
  rect(captionX, captionY, captionWidth, captionLength, 10);
  fill(0);
  //image description
  text(descriptionTitle, descriptionX, descriptionY1);
  textSize(16);
  text(descriptionDesc, descriptionX, descriptionY2);
  //song
  textAlign(CENTER);
  strokeWeight(3);
  fill(255);
  text("Song:", captionX, 175);
  text(songName, captionX, 200);
}

function door() {
  doorBut = createButton(" ");
  doorBut.position(713, 370);
  doorBut.style('padding', '20px 7px');
  doorBut.style('border-radius', '15px');
  doorBut.style('background-color', '#b0f5c8');
  doorBut.style('font-size', '25px');

  doorBut.mousePressed(change);

  textAlign(CENTER);
  fill(255);
  text("On to the next...", 655, 280);
  //door
  fill(0);
  strokeWeight(2);
  stroke('#e5db5b');
  rect(655, 390, 160, 200);
  rect(655, 390, 110, 140, 60, 60, 0, 0);

}

function image0() {
  let article0 = {
    img: {
      name: rebecca,
      x: 255,
      y: 270,
      width: 470,
      length: 500
    },
    caption: {
      x: 655,
      y: 85,
      width: 250,
      length: 120,
    },
    description: {
      title: 'Happy New Year, 2019\nDigital media',
      desc: 'An illustration meant to welcome \nin the new year.',
      x: 540,
      y1: 50,
      y2: 100
    },
    song:"Kool & The Gang - Celebration"
  };
  description(article0);
  door();
}

function image1() {
  let article1 = {
    img: {
      name: annie,
      x: 235,
      y: 270,
      width: 415,
      length: 500
    },
    caption: {
      x: 655,
      y: 90,
      width: 280,
      length: 125,
    },
    description: {
      title: 'The Grey Warden, 2020\nDigital media',
      desc: 'Imagining a friend as a Grey Warden \nfrom the video game Dragon Age.',
      x: 525,
      y1: 55,
      y2: 105
    },
    song: "Dragon Age Origins - Grey Warden Song"
  };
  description(article1);
  door();
}

function image2() {
  let article2 = {
    img: {
      name: audrey,
      x: 265,
      y: 270,
      width: 0,
      length: 0
    },
    caption: {
      x: 655,
      y: 80,
      width: 220,
      length: 100,
    },
    description: {
      title: 'Bubblegum, 2019\nDigital media',
      desc: 'Exploration of pastel colours',
      x: 553,
      y1: 55,
      y2: 105
    },
    song: "KISSAMILÉ - Chill Bird"
  };
  description(article2);
  door();
}

function image3() {
  let article3 = {
    img: {
      name: carly,
      x: 265,
      y: 270,
      width: 0,
      length: 0
    },
    caption: {
      x: 655,
      y: 90,
      width: 255,
      length: 120,
    },
    description: {
      title: 'How Exciting!, 2018\nDigital media',
      desc: 'Sparkling at the thought of an art \ncollaboration',
      x: 535,
      y1: 55,
      y2: 105
    },
    song: "BRADIO - Shiawase no Shanana"
  };
  description(article3);
  door();
}

function image4() {
  let article4 = {
    img: {
      name: landscape,
      x: 265,
      y: 270,
      width: 500,
      length: 500
    },
    caption: {
      x: 675,
      y: 90,
      width: 271,
      length: 120,
    },
    description: {
      title: 'Heights, 2020\nDigital media',
      desc: 'Visualization of a poem written by \n@badconversationalist on Instagram',
      x: 545,
      y1: 55,
      y2: 105
    },
    song: "keepitinside - thinking about you"
  };
  description(article4);
  door();
}

function image5() {
  let article5 = {
    img: {
      name: marceline,
      x: 265,
      y: 270,
      width: 500,
      length: 500
    },
    caption: {
      x: 685,
      y: 85,
      width: 270,
      length: 115,
    },
    description: {
      title: 'Vampire Queen, 2018\nDigital media',
      desc: 'Fanart of Marceline from Cartoon \nNetwork\'s show Adventure Time',
      x: 565,
      y1: 55,
      y2: 105
    },
    song: "Marceline - I'm Just Your Problem"
  };
  description(article5);
  door();
}

function image6() {
  let article6 = {
    img: {
      name: nagisa,
      x: 255,
      y: 270,
      width: 365,
      length: 500
    },
    caption: {
      x: 655,
      y: 90,
      width: 310,
      length: 120,
    },
    description: {
      title: 'Nagisa, 2020\nDigital media',
      desc: 'Nagisa Furukawa from the anime series \nClannad. A redraw of an older illustration.',
      x: 509,
      y1: 55,
      y2: 105
    },
    song: "CLANNAD - Dango Daikazoku"
  };
  description(article6);
  door();
}

function image7() {
  let article7 = {
    img: {
      name: rosette,
      x: 265,
      y: 280,
      width: 500,
      length: 500
    },
    caption: {
      x: 685,
      y: 88,
      width: 300,
      length: 115,
    },
    description: {
      title: 'You Make My Heart Warm, 2019\nDigital media',
      desc: 'The light and fluffy feelings of a young \ngirl experiencing her first crush.',
      x: 540,
      y1: 55,
      y2: 105
    },
    song: "mxmtoon - Falling For U"
  };
  description(article7);
  door();
}

function image8() {
  let article8 = {
    img: {
      name: love,
      x: 235,
      y: 270,
      width: 310,
      length: 500
    },
    caption: {
      x: 659,
      y: 90,
      width: 260,
      length: 120,
    },
    description: {
      title: 'Love and Daydreams, 2020\nDigital media',
      desc: 'Exploration of colours that evoke \nthe feeling of love',
      x: 535,
      y1: 55,
      y2: 105
    },
    song: "LOONA - Star"
  };
  description(article8);
  door();
}