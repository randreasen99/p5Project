
let covid19;
let posX;
let posY;

let squareNums = [25, 36, 49, 64, 82, 100, 121, 144];
let names = ['COVID-19', 'Corona', 'Rona'];
let randName;

function preload(){
  covid19 = loadImage("Images/covid19.png");

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  imageMode(CENTER);

  randName = int(random(names.length));
  stroke(140, 100, 200);

}


function draw(){

  for(let i=0; i < 1000; i++){
    posX = random(windowWidth);
    posY = random(windowHeight);
      fill(random(255), random(25), random(100))
      ellipse(posX, posY, 25, 25);
    image(covid19, posX, posY, 20, 20);
  }

  for(let i=0; i < windowHeight; i++){
    line(0, i*40, windowWidth, i*40);
  }
  for(let i=0; i < windowHeight; i++){
    line(i*40, 0,i*40, windowHeight);
  }

  for(i=0; i < squareNums.length; i++){
    print(squareNums[i]);
    fill(random(255), random(25), random(100))
    rect(random(windowWidth), random(windowHeight), squareNums[i]);
  }

  text(names[randName], 200, 300);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
