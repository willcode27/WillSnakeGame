var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gridSize = 25;
var cellSize = canvas.width / gridSize;

var snakeX = 10;
var snakeY = 10;

var snakeDirection = "right";

var snakeLength = 5;

//food
var foodX = Math.floor(Math.random() * gridSize);
var foodY = Math.floor(Math.random() * gridSize);

//food

var interval = setInterval(gameLoop, 100);

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            snakeDirection = "left";
            break;
        case "ArrowRight":
            snakeDirection = "right";
            break;
        case "ArrowUp":
            snakeDirection = "up";
            break;
        case "ArrowDown":
            snakeDirection = "down";
            break;
    
    }
}) ;

function gameLoop() {
     switch(snakeDirection)  {
              case "left":
              snakeX  -= 1;
              break;
              case "right":
                snakeX += 1;
                break;
                case "up":
                    snakeY -= 1;
                    break;
                    case "down":
                        snakeY += 1;
                        break; 
 }
 if (snakeX < 0 || snakeX >= gridSize || snakeY < 0 || snakeY >= gridSize) {
    clearInterval(interval);
    alert("game over my little child");
    return;
}

    if (snakeX == foodX && snakeY == foodY) {
        snakeLength++;
        foodX = Math.floor(Math.random() * gridSize);
        foodY = Math.floor(Math.random() * gridSize);
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize);
    

    ctx.fillStyle = "red";
     for (var i = 0; i < snakeLength; i++) {
        ctx.fillRect((snakeX - i) * cellSize, snakeY * cellSize, cellSize, cellSize);
    }
}














