// Enemies our player must avoid
var Enemy = function() {
  this.x = 100;
  this.y = 100;
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

Enemy.prototype.getRandomStartingRow = function() {
  var minRow = 1;
  var maxRow = 3;
  // Returns a random integer between minRow (included) and maxRow (included)
  // Using Math.round() will give you a non-uniform distribution!
  // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxRow - minRow + 1)) + minRow;
}
