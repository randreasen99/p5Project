let amountOfCells = 125;
let virus;
let cells = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < amountOfCells - 1; i++) {

    let cell = newCell(random(100, windowWidth - 100), random(100, windowWidth - 100));
    cells.push(cell);
  }

  let cell = newCell(125,125);
  cell.infected = 1;
  cells.push(cell)

}


function draw(){
  background(0);
  noStroke();
  fill(0, 255, 0);

  // Loops through all cells
  for(let i=0;i < amountOfCells; i++){

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
    for(let j=0;j < amountOfCells; j++) {
      if (dist(cells[j].x, cells[j].y, cells[i].x, cells[i].y) < 20) {
        if(cells[j].infected === 1 || cells[i].infected === 1) {
          cells[i].infected = 1;
          cells[j].infected = 1;
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
}


function newCell(x, y) {
    const cell = {};
    cell.x = x;
    cell.y = y;
    cell.ySpeed = 3*random();
    cell.xSpeed = 3*random();
    cell.infected = 0;


    return cell;
};


function mousePressed() {
  // Heal victims

  for (let i = 0; i < amountOfCells; i++) {
    if (dist(mouseX, mouseY, cells[i].x, cells[i].y) < 20) {
      cells[i].infected = 0;
    }
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
