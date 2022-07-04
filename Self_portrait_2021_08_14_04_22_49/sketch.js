function setup() {
  createCanvas(250, 250);
}

function draw() {
  background(220);
  strokeWeight(1);
  smooth(); 
  
  //face
  stroke(0);
  fill(255, 239, 230);
  rect(45, 90, 149, 110, 50); 
  strokeWeight(0);
  circle(120, 120, 150);
  fill(232, 208, 190);
  triangle(84, 55, 112, 108, 180, 118);
  quad(90, 55, 90, 85, 50, 140, 80, 50);
  rect(100, 150, 35, 15, 40);
  quad(45, 130, 65, 180, 80, 197, 60, 185);
  quad(190, 120, 190, 180, 160, 197, 170, 180);
  
  //side hair left
  strokeWeight(1);
  fill(37, 36, 46);
  triangle(170, 100, 200, 100, 210, 150);
  fill(56, 58, 66);
  triangle(170, 90, 185, 230, 210, 205);
  triangle(170, 90, 210, 205, 220, 160);
  triangle(194, 160, 200, 235, 210, 205);
  triangle(178, 165, 170, 230, 182, 210);
  //shading
  fill(37, 36, 46);
  triangle(210, 148, 220, 160, 210, 205);
  triangle(197, 140, 209, 160, 210, 205);
  triangle(195, 175, 198, 218, 186, 230);
  triangle(186, 230, 187, 170, 190, 200);
  stroke(37, 36, 46);
  strokeWeight(6);
  strokeCap(SQUARE);
  line(173, 114, 205, 120);
  
  stroke(0);
  strokeWeight(1);
  fill(56, 58, 66);
  
  //side hair right
  triangle(65, 80, 55, 230, 35, 210); 
  triangle(65, 80, 35, 210, 25, 160); 
  triangle(59, 165, 65, 230, 57, 205);
  //shading
  fill(37, 36, 46);
  triangle(55, 230, 35, 211, 44, 175);
  triangle(55, 119, 40, 165, 48, 127); 
  
  //bangs hair
  quad(85, 55, 85, 80, 70, 100, 60, 100);
  fill(56, 58, 66);
  triangle(85, 55, 112, 100, 116, 95);
  triangle(85, 55, 120, 100, 170, 110);
  triangle(85, 55, 170, 110, 220, 120);
  triangle(85, 55, 70, 100, 45, 130);
  quad(85, 55, 45, 130, 35, 135, 50, 70);
  quad(85, 55, 120, 40, 170, 60, 220, 120);
  triangle(85, 55, 65, 45, 88, 10);
  //shading
  fill(37, 36, 46);
  triangle(85, 55, 65, 45, 73, 35); 
  quad(160, 90, 190, 100, 186, 80, 220, 120);
  triangle(154, 100, 170, 110, 220, 120);
  triangle(104, 80, 120, 100, 165, 108);
  triangle(61, 100, 45, 130, 35, 135);
  
  //hair highlights
  fill(116, 116, 130);
  triangle(73, 34, 79, 25, 85, 55);
  triangle(150, 53, 170, 60, 186, 80);
  quad(55, 75, 55, 90, 49, 98, 47, 88);
  quad(58, 88, 61, 92, 57, 96, 55, 92);
  quad(103, 71, 110, 75, 118, 85, 102, 75); 
  quad(123, 62, 133, 68, 138, 75, 121, 70);
  quad(142, 60, 150, 65, 148, 72, 138, 65);
  
  triangle(25, 160, 33, 144, 30, 180);
  triangle(44, 175, 49, 154, 48, 190);
  triangle(175, 130, 182, 138, 179, 160);
  triangle(195, 160, 182, 120, 194, 135);
  
  //face
  //eyebrows
  fill(31, 32, 38);
  triangle(60, 95, 70, 85, 100, 95);
  triangle(130, 95, 160, 85, 170, 95);
  
  //eyes
  //eye whites
  fill(252, 254, 255);
  ellipse(85, 134, 40, 35);
  ellipse(150, 134, 40, 35);
  fill(193, 202, 212);
  arc(85, 135, 40, 40, PI, 0);
  arc(150, 135, 40, 40, PI, 0);
  //irises
  fill(66, 44, 36);
  circle(85, 135, 30);
  circle(150, 135, 30);
  fill(51, 31, 26);
  arc(85, 135, 30, 30, PI, 0);
  arc(150, 135, 30, 30, PI, 0);
  fill(214, 195, 146, 75);
  ellipse(85, 143, 20, 12);
  ellipse(150, 143, 20, 12);
  fill(247, 229, 181, 30);
  ellipse(85, 126, 18, 10);
  ellipse(150, 126, 18, 10);
  fill(255, 239, 173);
  quad(77, 123, 83, 129, 77, 135, 71, 129);
  quad(142, 123, 148, 129, 142, 135, 136, 129);
  strokeWeight(6);
  noFill();
  arc(85, 125, 40, 15, PI, 0);
  arc(150, 125, 40, 15, PI, 0);
  strokeWeight(2);
  arc(85, 151, 25, 2, PI, 0);
  arc(150, 151, 25, 2, PI, 0);
  //pupils
  fill(0);
  circle(85, 135, 10);
  circle(150, 135, 10);
  
  //mouth
  fill(217, 144, 143);
  strokeWeight(2);
  rect(89, 170, 60, 20, 60);
  stroke(255, 255, 255);
  line(95, 173, 142, 173);
  strokeWeight(6);
  point(96, 175);
  strokeWeight(4);
  point(142, 174);
  strokeWeight(2);
  line(92, 175, 97, 180);
  line(97, 180, 99, 175);
  line(99, 175, 145, 175);
  
  //glasses
  strokeWeight(4);
  stroke(255, 255, 255, 80);
  line(62, 127, 88, 155);
  line(126, 127, 151, 155);
  strokeWeight(2);
  line(64, 123, 93, 154);
  line(130, 124, 158, 156);
  fill(240, 250, 255, 50);
  stroke(0);
  ellipse(85, 135, 50, 40);
  ellipse(150, 135, 50, 40);
  arc(118, 140, 16, 5, PI, 0);
  
}