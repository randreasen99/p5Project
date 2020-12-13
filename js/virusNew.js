let amountOfCells = 200;
let virus;
let cells = [];

//timer
let timer;


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < amountOfCells - 1; i++) {

    let cell = newCell(random(100, windowWidth - 100), random(100, windowWidth - 100));
    cells.push(cell);
  }

  let cell = newCell(windowWidth/2,windowHeight/2);
  cell.infected = 1;
  cell.timeInfected = millis();
  cells.push(cell)

  //sketch counts in milliseconds since it started, so set timer to the current milliseconds
  //there are a thousand milliseconds in a second
  timer = millis();

}


function draw(){
  background(0);
  noStroke();
  fill(0, 255, 0);

  // Loops through all cells
  for(let i=0;i < cells.length; i++){

    // Moves the cell
    cells[i].x = cells[i].x + cells[i].xSpeed;
    cells[i].y = cells[i].y + cells[i].ySpeed;

    // Lets the cell bounce off walls
    if(cells[i].x >= windowWidth - 10 || cells[i].x <= 10){
      cells[i].xSpeed = cells[i].xSpeed * -1;
    }

    if(cells[i].y >= windowHeight - 10 || cells[i].y <= 10){
      cells[i].ySpeed = cells[i].ySpeed * -1;
    }

    // Checks and infects this cell (also collisions)
    for(let j=0;j < cells.length; j++) {
      if (dist(cells[j].x, cells[j].y, cells[i].x, cells[i].y) < 20) {
        if(cells[j].infected === 1) {
          cells[i].infected = 1;
          if (cells[i].timeInfected == null){
            cells[i].timeInfected = millis();
          }
        }
        if(cells[i].infected === 1) {
          cells[j].infected = 1;
          if (cells[j].timeInfected == null){
            cells[j].timeInfected = millis();
          }
        }

        if(cells[j].xSpeed > 0 && cells[i].xSpeed > 0 || cells[j].xSpeed < 0 && cells[i].xSpeed < 0){
          cells[j].ySpeed = -1*cells[j].ySpeed;
          cells[i].ySpeed = -1*cells[i].ySpeed;
        }
        else if(cells[j].ySpeed > 0 && cells[i].ySpeed > 0 || cells[j].ySpeed < 0 && cells[i].ySpeed < 0){
          cells[j].xSpeed = -1*cells[j].xSpeed;
          cells[i].xSpeed = -1*cells[i].xSpeed;
        }
        else{
          cells[j].xSpeed = -1*cells[j].xSpeed;
          cells[i].xSpeed = -1*cells[i].xSpeed;
          cells[j].ySpeed = -1*cells[j].ySpeed;
          cells[i].ySpeed = -1*cells[i].ySpeed;
        }
      }
    }

    // Displays the cell
    if(cells[i].infected === 1){
      fill(255, 0, 0);
      ellipse(cells[i].x, cells[i].y, 20, 20);
    }else if(cells[i].infected === 0){
      fill(255);
      ellipse(cells[i].x, cells[i].y, 20, 20);
    }

  }

  //timer conditional triggers every 7 seconds
  //timer variable is 0 at the beginnning of the sketch.
  //As millis() goes up to 7000, 7000 - 0 (timer) = 7000, so the conditional triggers
  if(millis() - timer >= 50){
    //run through array exepct original infected so there's always one infection
    for (let i = 0; i < cells.length; i++) {
      //delete infected cells exept last ones
      if (cells[i].infected == 1 && cells[i].timeInfected <= millis() - 60000) {
        cells.splice(i, 1);
      }
    }
    //update the timer variable to the current millis() to use again in conditional above.
    //so when the first instance of it executes, timer changes from 0 to 7000,
    //then when millis() reaches 14000, 14000 - 7000 = 0 and conditional will change
    timer = millis();
  }
}


function newCell(x, y) {
  const cell = {};
  cell.x = x;
  cell.y = y;
  cell.ySpeed = 4*random();
  cell.xSpeed = 4*random();
  cell.infected = 0;
  cell.timeInfected = null;


  return cell;
};


function mousePressed() {
  for (let i = 0; i < cells.length; i++) {
    if (dist(mouseX, mouseY, cells[i].x, cells[i].y) < 20 && cells[i].infected == 1) {
      cells[i].infected = 0;

    }

  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
