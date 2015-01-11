// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

var player = null;

var resetGame = function () {
    allEnemies = [];
    allEnemies.push(new Enemy(101, 83, Enemy.getRandomStartingRow(), 0, 5, 4, 'images/enemy-bug.png'));
    player = new Player(101, 83, 5, 2, 5, 4, 'images/char-boy.png');
}

resetGame();

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
