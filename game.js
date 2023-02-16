// Global variables
let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");

// Game loop
function gameLoop() {
  update();
  draw();
}

// Update game state
function update() {
  // Update player position, enemies, power-ups, etc.
}

// Draw game elements
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw player sprite, enemies, power-ups, background, etc.
}

// Start game loop
setInterval(gameLoop, 1000 / 60);
