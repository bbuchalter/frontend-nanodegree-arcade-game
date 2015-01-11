// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(initialX, initialY, xMoveSize, yMoveSize, xMin, xMax, yMin, yMax) {
  this.x = initialX;
  this.y = initialY;
  this.xMoveSize = xMoveSize;
  this.yMoveSize = yMoveSize;
  this.xMin = xMin;
  this.xMax = xMax;
  this.yMin = yMin;
  this.yMax = yMax;

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
  if(proposedXMove >= this.xMin) {
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
  if(proposedYMove >= this.yMin) {
    this.y = proposedYMove;
  }
}

Player.prototype.down = function() {
  var proposedYMove = this.y + this.yMoveSize;
  if(proposedYMove <= this.yMax) {
    this.y = proposedYMove;
  }
}
