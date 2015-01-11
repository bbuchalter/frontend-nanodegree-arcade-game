// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(xMoveSize, yMoveSize, initialRow, initialCol, totalRows, totalCols) {
  // Calculate the initial position based on a zero-indexed initialRow and initialCol
  this.x = xMoveSize * initialCol;
  this.y = yMoveSize * initialRow;

  // Record the size of each left/right, up/down move.
  this.xMoveSize = xMoveSize;
  this.yMoveSize = yMoveSize;

  // The bounds the player can move calculated by the zero-indexed totalRows and totalCols
  this.xMin = xMoveSize * -1;
  this.xMax = xMoveSize * totalCols;
  this.yMin = yMoveSize * -1;
  this.yMax = yMoveSize * totalRows;

  // The image/sprite for our player, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function() {

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(moveDirection) {
  if(this.isValidMove(moveDirection)){
    this[moveDirection]();
  }
}

Player.prototype.isValidMove = function(moveDirection) {
  var permittedDirections = ['left', 'right', 'up', 'down'];
  return permittedDirections.indexOf(moveDirection) != -1;
}

Player.prototype.left = function() {
  var proposedXMove = this.x - this.xMoveSize;
  if(proposedXMove > this.xMin) {
    this.x = proposedXMove;
  }
}

Player.prototype.right = function() {
  var proposedXMove = this.x + this.xMoveSize;
  if(proposedXMove <= this.xMax) {
    this.x = proposedXMove;
  }
}

Player.prototype.up = function() {
  var proposedYMove = this.y - this.yMoveSize;
  if(proposedYMove > this.yMin) {
    this.y = proposedYMove;
  }
}

Player.prototype.down = function() {
  var proposedYMove = this.y + this.yMoveSize;
  if(proposedYMove <= this.yMax) {
    this.y = proposedYMove;
  }
}
