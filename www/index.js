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
let generation = 0;

const fps = new (class {
  constructor() {
    this.fps = document.getElementById("fps");
    this.frames = [];
    this.lastFrameTimeStamp = performance.now();
  }

  render() {
    const now = performance.now();
    const delta = now - this.lastFrameTimeStamp;
    this.lastFrameTimeStamp = now;
    const fps = (1 / delta) * 1000;

    this.frames.push(fps);
    if (this.frames.length > 100) {
      this.frames.shift();
    }

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < this.frames.length; i++) {
      sum += this.frames[i];
      min = Math.min(this.frames[i], min);
      max = Math.max(this.frames[i], max);
    }
    let mean = sum / this.frames.length;

    this.fps.textContent = `
    Frames per Second:
             latest = ${Math.round(fps)}
    avg of last 100 = ${Math.round(mean)}
    min of last 100 = ${Math.round(min)}
    max of last 100 = ${Math.round(max)}
    `.trim();
  }
})();

function generationRender() {
  let generationDiv = document.getElementById("generation");
  let sysmtem_stablie = universe.get_system_stable();
  generationDiv.innerHTML = `<span>第${generation}代</span><span class="${
    sysmtem_stablie ? "stable" : "evolve"
  }">${sysmtem_stablie ? "稳定" : "进化"}</span>`;
}
const renderLoop = () => {
  fps.render();
  for (let i = speed; i > 0; i--) {
    universe.tick();
    if (!universe.get_system_stable()) {
      generation += 1;
    }
    generationRender();
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
  // Alive cells.
  ctx.fillStyle = ALIVE_COLOR;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);

      if (cells[idx] !== Cell.Alive) {
        continue;
      }
      ctx.fillRect(
        col * (CELL_SIZE + 1) + 1,
        row * (CELL_SIZE + 1) + 1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  // Dead cells.
  ctx.fillStyle = DEAD_COLOR;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);

      if (cells[idx] !== Cell.Dead) {
        continue;
      }
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
  generation = 0;
};

const destory = () => {
  universe.destory();
  generation = 0;
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
  destory();
  draw();
});
const range = document.getElementById("play-speed");
range.addEventListener("change", (e) => {
  speed = e.target.value;
});

const cell_change = (event, toggle) => {
  const boundingRect = canvas.getBoundingClientRect();

  const scaleX = canvas.width / boundingRect.width;
  const scaleY = canvas.height / boundingRect.height;
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

// canvas.addEventListener("click", (event) => cell_change(event, true));
let isDragging = false;
let startX;
let startY;
canvas.addEventListener("mousedown", function (event) {
  // Check if the left mouse button is clicked
  if (event.button !== 0) {
    return;
  }

  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
});

canvas.addEventListener("mousemove", function (event) {
  if (!isDragging) {
    return;
  }

  // Check if the mouse has moved at least 10 pixels
  const currentX = event.clientX;
  const currentY = event.clientY;

  const distanceX = currentX - startX;
  const distanceY = currentY - startY;

  if (Math.abs(distanceX) < 10 && Math.abs(distanceY) < 10) {
    // Mouse click detected
    cell_change(event, true);
  } else {
    // Mouse drag detected
    cell_change(event, false);
  }
});

canvas.addEventListener("mouseup", function (event) {
  if (!isDragging) {
    return;
  }

  // Stop dragging
  isDragging = false;
});
play();
