// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var player = null;
var gameRowCount = 5;
var gameColCount = 4;
var initialPlayerRow = 5;
var initialPlayerCol = 2;
var xMoveSize = 101;
var yMoveSize = 83;
var enemyMinRow = 1;
var enemyMaxRow = 3;
var initialEnemyCol = -1;

var resetGame = function (enemyCount) {
    allEnemies = [];
    addNewEnemies(enemyCount);
    player = new Player(xMoveSize, yMoveSize, initialPlayerRow, initialPlayerCol, gameRowCount, gameColCount, 'images/char-boy.png');
}
var addNewEnemies = function(enemyCount) {
    for(var i = 0; i < enemyCount; i++) {
        allEnemies.push(new Enemy(xMoveSize, yMoveSize, Enemy.getRandomInt(enemyMinRow, enemyMaxRow), initialEnemyCol, gameRowCount, gameColCount, 'images/enemy-bug.png'));
    }
}

resetGame(3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
