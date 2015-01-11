// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Data store for enemy and player objects.
var allEnemies = [];
var player = null;

var resetGame = function (enemyCount) {
    allEnemies = [];
    addNewEnemies(enemyCount);
    player = new Player(Config.xMoveSize,
      Config.yMoveSize,
      Config.initialPlayerRow,
      Config.initialPlayerCol,
      Config.gameRowCount,
      Config.gameColCount,
      Config.playerImage);
}
var addNewEnemies = function(enemyCount) {
    for(var i = 0; i < enemyCount; i++) {
        allEnemies.push(new Enemy(Config.xMoveSize,
          Config.yMoveSize,
          RandomHelpers.getRandomInt(Config.enemyMinRow, Config.enemyMaxRow),
          Config.initialEnemyCol,
          Config.gameRowCount,
          Config.gameColCount,
          Config.enemyImage));
    }
}

resetGame(Config.initialEnemyCount);

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
