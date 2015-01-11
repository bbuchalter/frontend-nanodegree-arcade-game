// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(initialX, initialY, xMoveSize, yMoveSize) {
  this.x = initialX;
  this.y = initialY;
  this.xMoveSize = xMoveSize;
  this.yMoveSize = yMoveSize;

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
  var proposedXMove = this.x - this.xMoveSize;
  if(proposedXMove >= 0) {
    this.x = proposedXMove;
  }
  return this.x;
}

Player.prototype.right = function() {
  var proposedXMove = this.x + this.xMoveSize;
  if(proposedXMove <= 400) {
    this.x = proposedXMove;
  }
  return this.x;
}

Player.prototype.up = function() {
  var proposedYMove = this.y - this.yMoveSize;
  if(proposedYMove >= -35) {
    this.y = proposedYMove;
  }
  return this.y;
}

Player.prototype.down = function() {
  var proposedYMove = this.y + this.yMoveSize;
  if(proposedYMove <= 380) {
    this.y = proposedYMove;
  }
  return this.y;
}
