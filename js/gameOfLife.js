

var c = document.getElementById("game");
var ctx = c.getContext("2d");
ctx.fillStyle = "#000000";

var height = ctx.canvas.height/10;
var width =  ctx.canvas.width/10;
var cellSize = 10;

var automataStates = create2DArray(width);
var stateUpdates = create2DArray(width);

var areaid;

function gliderGun(){
    clearInterval(areaid);
    zeroStates();
    //makeGlider(3,3);
    makeGliderGun(1,1);
    runLoop();
}

function glider(){
    clearInterval(areaid);
    zeroStates();
    makeGlider(3,3);
    runLoop();
}

function blinker(){
    clearInterval(areaid);
    zeroStates();
    makeBlinker(3,3);
    runLoop();
}

function clearCanvas(){
    clearInterval(areaid);
    zeroStates();
    ctx.clearRect(0, 0, width*cellSize, height*cellSize);
}

function runLoop() {
    areaid = setInterval(function(){
        gridDraw();
        updateStates();
    } ,100);
}

function fillRandom() {
    for (var j = 1; j < width-1; j++) { 
        for (var k = 1; k < height-1; k++) {
            automataStates[j][k] = Math.round((Math.random()));
        }
    }
}

function zeroStates() {
    for (var j = 0; j < width; j++) { 
        for (var k = 0; k < height; k++) {
            automataStates[j][k] = 0;
        }
    }
}

function makeGlider(x,y){
    automataStates[x+1][y] = 1;
    automataStates[x+2][y+1] = 1;
    automataStates[x][y+2] = 1;
    automataStates[x+1][y+2] = 1;
    automataStates[x+2][y+2] = 1;
}

function makeSquare(x,y){
    automataStates[x][y] = 1;
    automataStates[x+1][y] = 1;
    automataStates[x][y+1] = 1;
    automataStates[x+1][y+1] = 1;
}

function makeBlinker(x,y){
    automataStates[x][y] = 1;
    automataStates[x+1][y] = 1;
    automataStates[x+2][y] = 1;
}

function makeGliderGun(x,y){
    makeSquare(x+2, y+6)
    makeSquare(x+36, y+4)
    
    automataStates[x+12][y+6] = 1;
    automataStates[x+12][y+7] = 1;
    automataStates[x+12][y+8] = 1;
    
    automataStates[x+13][y+5] = 1;
    automataStates[x+13][y+9] = 1;
    
    automataStates[x+14][y+4] = 1;
    automataStates[x+14][y+10] = 1;
    
    automataStates[x+15][y+4] = 1;
    automataStates[x+15][y+10] = 1;
    automataStates[x+16][y+7] = 1;
    
    automataStates[x+17][y+5] = 1;
    automataStates[x+17][y+9] = 1;
    
    automataStates[x+18][y+6] = 1;
    automataStates[x+18][y+7] = 1;
    automataStates[x+18][y+8] = 1;
    automataStates[x+19][y+7] = 1;
    
    automataStates[x+22][y+4] = 1;
    automataStates[x+22][y+5] = 1;
    automataStates[x+22][y+6] = 1;
    
    automataStates[x+23][y+4] = 1;
    automataStates[x+23][y+5] = 1;
    automataStates[x+23][y+6] = 1;
    
    automataStates[x+24][y+3] = 1;
    automataStates[x+24][y+7] = 1;
    
    automataStates[x+26][y+2] = 1;
    automataStates[x+26][y+3] = 1;
    automataStates[x+26][y+7] = 1;
    automataStates[x+26][y+8] = 1;
    
}


function create2DArray(rows) { 
    var rowsize = rows;
    var arr = [];
    for (var i = 0; i < rowsize; i++) {
        arr[i] = [];
    }
    return arr;
}

function gridDraw(){
    ctx.clearRect(0, 0, width*cellSize, height*cellSize);
    for (var j = 1; j < width-1; j++) {
        for (var k = 1; k < height-1; k++) {
            if (automataStates[j][k] === 1) {
            
                ctx.fillRect(j*cellSize, k*cellSize, cellSize, cellSize);
            }
        }
    }
}

function updateStates(){
    var temp = [];
    var temp = create2DArray(width);
    for (var j = 1; j < width-1; j++) { 
        for (var k = 1; k < height-1; k++) {
            var state = automataStates[j][k];
            var liveNeighbors = 0;
            liveNeighbors += automataStates[j - 1][k - 1]; 
            liveNeighbors += automataStates[j - 1][k];
            liveNeighbors += automataStates[j - 1][k + 1];

            liveNeighbors += automataStates[j][k - 1];
            liveNeighbors += automataStates[j][k + 1];

            liveNeighbors += automataStates[j + 1][k - 1];
            liveNeighbors += automataStates[j + 1][k];
            liveNeighbors += automataStates[j + 1][k + 1];
            console.log(liveNeighbors)
            if(state === 1 && liveNeighbors === 2){
                console.log(liveNeighbors)
                temp[j][k] = 1;
            }else if(liveNeighbors === 3){
                temp[j][k] = 1;
            }else{
                temp[j][k] = 0;
            }
        
        }
    }
    automataStates = temp;

}