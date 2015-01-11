// Enemies our player must avoid
// Enemy is a subclass of Player
var Enemy = function(xMoveSize, yMoveSize, initialRow, initialCol, totalRows, totalCols, sprite) {
  Player.apply(this, arguments); // call super constructor
  this.movementSpeed = RandomHelpers.getRandomArbitrary(1,4);
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
  this.x += this.xMoveSize * dt * this.movementSpeed;
}

Enemy.prototype.isOnBoard = function() {
  return this.x < (this.xMax + this.xMoveSize);
}
