//Get Canvas
var canvas = document.getElementById("gameCanvas");
//Get canvas context
var gameCanvas = canvas.getContext("2d");

//Position of ball
let posX = 100, posY = 100;
let velocityX = 1, velocityY = 1;

//Random Position
posX = Math.random() * 601;
posY = Math.random() * 401;
//Random velocity
velocityX = Math.random() * 7;   //0 to 6
velocityX = Math.random() * 7;   //0 to 6

function update(timestamp)
{
    window.requestAnimationFrame(update);

    //Draw Background
    //Fill color
    gameCanvas.fillStyle = "black";
    //Stroke Color
    gameCanvas.strokeStyle = "rgb(185, 185, 185)";
    gameCanvas.fillRect(0, 0, canvas.width, canvas.height);
    //END

    //Draw circle
    gameCanvas.fillStyle = "white";
    gameCanvas.beginPath();
    gameCanvas.arc(posX, posY, 12, 0, 2 * Math.PI);
    gameCanvas.stroke();
    gameCanvas.fill();

    //Physic and Collisions
    if((posX >= 600 - 12 || posX <= 0 + 12))
    {
        velocityX = velocityX * -1;
    }else if(posY >= 400 - 12|| posY <= 0 + 12){
        velocityY = velocityY * -1;
    }

    if(posX > 600 || posX < 0)
    {
        posX = canvas.width / 2;
    }else if(posY > 400 || posY < 0)
    {
        posY = canvas.height / 2;
    }

    posX += velocityX;
    posY += velocityY;
}

window.requestAnimationFrame(update);