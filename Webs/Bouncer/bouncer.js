//https://www.youtube.com/watch?v=ih20l3pJoeU

//Get Canvas
var canvas = document.getElementById("gameCanvas");
//Get canvas context
var gameCanvas = canvas.getContext("2d");

let balls = [];

class Ball
{
    constructor(x, y, vx, vy, radios)
    {
        this.posX = x;
        this.posY = y;
        this.velocityX = vx;
        this.velocityY = vy;
        this.ballRadios = radios;

        console.log('Ball Created !');
    }
    BallUpdate()
    {
        
    }
    BallDraw()
    {
    }
}

//Create Balls
for(let i = 0; i < 12; i++)
{
    //Random Radios
    var radios = Math.random() * 31;
    //Random Positions
    var x = 50;
    var y = 50;
    //Random Velocity
    var vx = (Math.random * 8);
    var vy = (Math.random * 8);
    //Create maa balls lol..
    balls[i] = new Ball(x, y, vx, vy, 40);
}

function update(timestamp)
{
    window.requestAnimationFrame(update);

    //Draw Background
    //Fill color
    //gameCanvas.fillStyle = "black";
    //Stroke Color
    //gameCanvas.strokeStyle = "rgb(185, 185, 185)";
    //gameCanvas.fillRect(0, 0, canvas.width, canvas.height);
    //END

    //Ball Update
    for(let i = 0; i < balls.length; i++)
    {
        balls[i].BallUpdate();
        balls[i].BallDraw();

        //Draw circle
        gameCanvas.strokeStyle = "rgb(185, 185, 185)";
        gameCanvas.fillStyle = "white";
        gameCanvas.beginPath();
        gameCanvas.arc(balls[i].posX, balls[i].posY, 12, 0, 2 * Math.PI);
        gameCanvas.stroke();
        gameCanvas.fill();
    }
}

window.requestAnimationFrame(update);