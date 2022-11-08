import {update as updateSnake, draw as drawSnake, 
SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawfood} from './food.js'
import { outsideGrid } from './grid.js' 

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if (gameOver) {
        if (confirm('Y o u  l o s t,  P r e s s  o k  t o  r e s t a r t.')){
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
   
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()

}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawfood(gameBoard)

}
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead) || snakeIntersection()
}