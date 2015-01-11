Config = {
// Size of board in rows and columns.
  gameRowCount: 5,
  gameColCount: 4,

// Initial position for the player in rows and columns.
  initialPlayerRow: 5,
  initialPlayerCol: 2,

// The size in pixels to move player from one cell to another.
  xMoveSize: 101,
  yMoveSize: 83,

// The min/max rows in which enemies can exist.
  enemyMinRow: 1,
  enemyMaxRow: 3,

// The starting column for enemies. Enemies start off screen.
  initialEnemyCol: -1,

// Number of enemies
  initialEnemyCount: 3,

// Adds padding to collision detection.
  allowedRangeForTouchingInPixels: 15,

  playerImage: 'images/char-boy.png',
  enemyImage: 'images/enemy-bug.png'
}
