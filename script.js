var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";
function checkReady(){
    this.ready= true;
    playgame();
}

function playgame(){
    render();

}
 function render() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);


 }



document.body.appendChild(canvas);
ctx.fillText("Hello World", 10, 140);