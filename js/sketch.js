
let covid19;

function preload(){
  covid19 = loadImage("images/covid19.png");
}

function setup() {
  // put setup code here to run once

  //created canvas 500x500px
  createCanvas(windowWidth, windowHeight);

  background(0);

  //print(windowWidth);

  //changed x, y coordinates to the center of rectangle
  rectMode(CENTER);
  imageMode(CENTER);

  print(random(300));
}

function draw() {

  image(covid19, windowWidth/2, windowHeight/2, 100, 100);

  fill(120);
  stroke(400);
  strokeWeight(1);

  //points are only x, y coordinates
  point(mouseX, mouseY);

  strokeWeight(5)
  stroke(400)
  line(200, 200, 800, 200);

  strokeWeight(1)
  stroke(400)
  line(500, 400, 1000, 400);

  fill(0, random(200), random(255));
  strokeWeight(1);
  stroke(400);
  rect(700, 400, 50, 500);

  fill(random(255), 0, random(200));
  strokeWeight(1);
  stroke(400);
  rect(525, 625, 100, 100);

  strokeWeight(5)
  stroke(400)
  line(300, 600, 850, 600);

  strokeWeight(3)
  stroke(400)
  line(100, 700, 1100, 75);

  fill(0, random(255), random(200));
  strokeWeight(1);
  stroke(400);
  rect(615, 350, 300, 150);

  strokeWeight(1)
  stroke(400)
  line(550, 100, 550, 700);

  strokeWeight(5)
  stroke(400)
  line(350, 50, 350, 625);

  strokeWeight(1)
  stroke(400)
  line(900, 50, 900, 725);

  strokeWeight(1)
  stroke(400)
  line(50, 375, 850, 375);

  strokeWeight(1)
  stroke(400)
  line(150, 125, 1175, 125);

  strokeWeight(1)
  stroke(400)
  line(25, 565, 1050, 565);

  strokeWeight(3)
  stroke(400)
  line(100, 100, 575, 700);

  strokeWeight(random(1,10));
  noFill();
  circle(100, 100, 150);

  print(mouseX);

}
