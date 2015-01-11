// Enemies our player must avoid
// Enemy is a subclass of Player
var Enemy = function(xMoveSize, yMoveSize, initialRow, initialCol, totalRows, totalCols, sprite) {
  Player.apply(this, arguments); // call super constructor
}

// subclass (Enemy) extends superclass (Player)
Enemy.prototype = Object.create(Player.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
}

Enemy.prototype.getRandomStartingRow = function() {
  var minRow = 1;
  var maxRow = 3;
  // Returns a random integer between minRow (included) and maxRow (included)
  // Using Math.round() will give you a non-uniform distribution!
  // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (maxRow - minRow + 1)) + minRow;
}
