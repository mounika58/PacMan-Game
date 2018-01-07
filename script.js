var score = 0;
var gscore = 0;
var player = {
    x: 50,
    y: 50,
    pacmouth:320,
    pacdir: 0,
    psize: 32,
    speed: 5
}
var enemy = {
    x: 150,
    y: 250,
    speed: 5
}



var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 500;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

var keyclick = {};
document.addEventListener("keydown", function(event){
    keyclick[event.keyCode]=true;
    move(keyclick);
}, false);
document.addEventListener("keyup", function(event){
    delete keyclick[event.keyCode];
}, false);


function move(keyclick){
    if(37 in keyclick){player.x -= player.speed;player.pacdir=64;}
    if(38 in keyclick){player.y -= player.speed;player.pacdir=96;}
    if(39 in keyclick){player.x += player.speed;player.pacdir=0;}
    if(40 in keyclick){player.y += player.speed;player.pacdir=32;}
    if(player.x >= (canvas.width-32)) {player.x=0;}
    if(player.y >= (canvas.height-32)) {player.y=0;}
    if(player.x < 0) {player.x=(canvas.width-32);}
    if(player.y < 0) {player.y=(canvas.height-32);}
    if(player.pacmouth == 320){player.pacmouth = 352;}else{player.pacmouth =320;}


    render();
}


function checkReady(){
    this.ready= true;
    playgame();
}

function playgame(){
    render();
    requestAnimationFrame(playgame);
}

function myNum(n){
    return Math.floor(Math.random() *n) +1;
}
 function render() {
    context.fillStyle = "#5a82c4";
    context.fillRect(0,0,canvas.width,canvas.height);
     context.font = "20px Verdana";
     context.fillStyle = "white";
     context.fillText("Pac-Man: " +score+" vs Ghost:" +gscore, 50, 20);


     context.drawImage(mainImage, 0, 0, 32, 32, enemy.x, enemy.y, 32,32);
     context.drawImage(mainImage, player.pacmouth, player.pacdir, 32, 32, player.x, player.y, 32,32);


}



document.body.appendChild(canvas);
context.fillText("Hello World", 10, 140);