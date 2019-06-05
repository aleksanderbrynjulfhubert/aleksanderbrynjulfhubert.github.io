var a = 1;

function setup() {
    background('#222222');
    noStroke();
    fill(102);
}

function draw() {
  clear();
  rect(a % width, 50, 100, 100);
}