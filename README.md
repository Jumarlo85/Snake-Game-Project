# Snake-Game-Project
Create html tag with div id 'game board', body created with height and body 100 vh and vx, game borad created with 100vmin. In order to create the snake, must create a template row and columns wioth a repeart of 21, 1fr and for the food also.
# Game JS
Game js created for the base of the JAVASCRIPT. script credted in html to connnect the broswer, index and js to export and import for different files.

game loop created in game.js to update the game. Snake.js and Food.js created as charaters for the game.

Each fuction created in the javascript must export from js and import to the game.js as it is the base.

create function to

# Snake JS and Input.js
create export SNAKE_SPEEND movement and snake body for size with array of x: and y: than import to game. Create addListner with 'keydown' and array inputDirection for snake movement. when  entering the lastInputDirection the snake would not move with with thr arrow keys, I was able tio fix thr issue duee to the brace or brakets missing from the array.


# Food.js
pretty coiped exort functiond from snake, but ther changing the elements to food and chagaing the fromn segment x: and y: to food x: and y:. When running the game the snake would run undee the food, I had to create a const Expanion_rate = 1 so that the snake would grow one size. Also create a expand snake function with a newSegament in Snake.js