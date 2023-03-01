import { Universe, Cell } from "game-of-life";
import { memory } from "game-of-life/game_of_life_bg";

const CELL_SIZE = 5;
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

let universe = Universe.new();
const width = universe.width();
const height = universe.height();

const canvas = document.getElementById("game-of-life-canvas");
canvas.height = (CELL_SIZE + 1) * height + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext("2d");

let animationId = null;
let speed = 1;

const renderLoop = () => {
  for (let i = speed; i > 0; i--) {
    universe.tick();
  }

  draw();
  animationId = requestAnimationFrame(renderLoop);
};

const drawGrid = () => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // Vertical lines.
  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }

  // Horizontal lines.
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo(width * (CELL_SIZE + 1) + 1, j * (CELL_SIZE + 1) + 1);
  }
  ctx.stroke();
};

const getIndex = (row, column) => {
  return row * width + column;
};

const drawCells = () => {
  const cellsPtr = universe.cells();
  const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

  ctx.beginPath();

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);

      ctx.fillStyle = cells[idx] === Cell.Alive ? ALIVE_COLOR : DEAD_COLOR;
      ctx.fillRect(
        col * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }
  ctx.stroke();
};
const draw = () => {
  drawGrid();
  drawCells();
};
const isPaused = () => {
  return animationId === null;
};

const playPauseButton = document.getElementById("play-pause");
const playResetButton = document.getElementById("play-reset");
const playDestroyButton = document.getElementById("play-destroy");

const play = () => {
  playPauseButton.textContent = "⏸";
  renderLoop();
};

const pause = () => {
  playPauseButton.textContent = "▶";
  cancelAnimationFrame(animationId);
  animationId = null;
};
const reset = () => {
  universe = Universe.new();
};

playPauseButton.addEventListener("click", (event) => {
  if (isPaused()) {
    play();
  } else {
    pause();
  }
});
playResetButton.addEventListener("click", (event) => {
  reset();
  draw();
});
playDestroyButton.addEventListener("click", (event) => {
  universe.destory();
  draw();
});
const range = document.getElementById("play-speed");
range.addEventListener("change", (e) => {
  speed = e.target.value;
});

const boundingRect = canvas.getBoundingClientRect();

const scaleX = canvas.width / boundingRect.width;
const scaleY = canvas.height / boundingRect.height;

const cell_change = (event, toggle) => {
  const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
  const canvasTop = (event.clientY - boundingRect.top) * scaleY;

  const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
  const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

  toggle
    ? universe.toggle_cell(row, col)
    : universe.change_cell(row, col, Cell.Alive);

  drawGrid();
  drawCells();
};

canvas.addEventListener("click", (event) => cell_change(event, true));
let isDragging = false;
canvas.addEventListener("mousedown", function (event) {
  // Check if the left mouse button is clicked
  if (event.button !== 0) {
    return;
  }

  isDragging = true;
});

canvas.addEventListener("mousemove", function (event) {
  if (!isDragging) {
    return;
  }
  cell_change(event, false);
});

canvas.addEventListener("mouseup", function (event) {
  if (!isDragging) {
    return;
  }

  // Stop dragging
  isDragging = false;
});
play();
