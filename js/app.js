// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.x = 200;
    this.y = 380;

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(moveDirection) {
    if(moveDirection != undefined){
        this[moveDirection]();
    }
}

Player.prototype.left = function() {
    var xMoveSize = 100;
    var proposedXMove = this.x - xMoveSize;
    if(proposedXMove >= 0) {
        this.x = proposedXMove;
    }
    return this.x;
}

Player.prototype.right = function() {
    var xMoveSize = 100;
    var proposedXMove = this.x + xMoveSize;
    if(proposedXMove <= 400) {
        this.x = proposedXMove;
    }
    return this.x;
}

Player.prototype.up = function() {
    var yMoveSize = 83;
    var proposedYMove = this.y - yMoveSize;
    if(proposedYMove >= -35) {
        this.y = proposedYMove;
    }
    return this.y;
}

Player.prototype.down = function() {
    var yMoveSize = 83;
    var proposedYMove = this.y + yMoveSize;
    if(proposedYMove <= 380) {
        this.y = proposedYMove;
    }
    return this.y;
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];

var player = new Player();

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
