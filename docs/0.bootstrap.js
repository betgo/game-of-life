(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/game_of_life.js":
/*!******************************!*\
  !*** ../pkg/game_of_life.js ***!
  \******************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ \"../pkg/game_of_life_bg.wasm\");\n/* harmony import */ var _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_of_life_bg.js */ \"../pkg/game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_afb3265527cf67c8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/game_of_life.js?");

/***/ }),

/***/ "../pkg/game_of_life_bg.js":
/*!*********************************!*\
  !*** ../pkg/game_of_life_bg.js ***!
  \*********************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return __wbg_random_afb3265527cf67c8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        const ret = wasm.universe_cells(this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} width\n    */\n    set_width(width) {\n        wasm.universe_set_width(this.ptr, width);\n    }\n    /**\n    * @param {number} height\n    */\n    set_height(height) {\n        wasm.universe_set_height(this.ptr, height);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        const ret = wasm.universe_new();\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.universe_render(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    toggle_cell(row, column) {\n        wasm.universe_toggle_cell(this.ptr, row, column);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    * @param {number} cell_status\n    */\n    change_cell(row, column, cell_status) {\n        wasm.universe_change_cell(this.ptr, row, column, cell_status);\n    }\n    /**\n    */\n    destory() {\n        wasm.universe_destory(this.ptr);\n    }\n}\n\nconst __wbg_random_afb3265527cf67c8 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/game_of_life_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/game_of_life_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, __wbg_universe_free, universe_width, universe_height, universe_cells, universe_set_width, universe_set_height, universe_tick, universe_new, universe_render, universe_toggle_cell, universe_change_cell, universe_destory, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./game_of_life_bg.js */ \"../pkg/game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-of-life */ \"../pkg/game_of_life.js\");\n/* harmony import */ var game_of_life_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! game-of-life/game_of_life_bg */ \"../pkg/game_of_life_bg.wasm\");\n\n\n\nconst CELL_SIZE = 5;\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\n\nlet universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\nconst width = universe.width();\nconst height = universe.height();\n\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * height + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext(\"2d\");\n\nlet animationId = null;\nlet speed = 1;\n\nconst fps = new (class {\n  constructor() {\n    this.fps = document.getElementById(\"fps\");\n    this.frames = [];\n    this.lastFrameTimeStamp = performance.now();\n  }\n\n  render() {\n    const now = performance.now();\n    const delta = now - this.lastFrameTimeStamp;\n    this.lastFrameTimeStamp = now;\n    const fps = (1 / delta) * 1000;\n\n    this.frames.push(fps);\n    if (this.frames.length > 100) {\n      this.frames.shift();\n    }\n\n    let min = Infinity;\n    let max = -Infinity;\n    let sum = 0;\n    for (let i = 0; i < this.frames.length; i++) {\n      sum += this.frames[i];\n      min = Math.min(this.frames[i], min);\n      max = Math.max(this.frames[i], max);\n    }\n    let mean = sum / this.frames.length;\n\n    this.fps.textContent = `\n    Frames per Second:\n             latest = ${Math.round(fps)}\n    avg of last 100 = ${Math.round(mean)}\n    min of last 100 = ${Math.round(min)}\n    max of last 100 = ${Math.round(max)}\n    `.trim();\n  }\n})();\nconst renderLoop = () => {\n  fps.render();\n  for (let i = speed; i > 0; i--) {\n    universe.tick();\n  }\n\n  draw();\n  animationId = requestAnimationFrame(renderLoop);\n};\n\nconst drawGrid = () => {\n  ctx.beginPath();\n  ctx.strokeStyle = GRID_COLOR;\n\n  // Vertical lines.\n  for (let i = 0; i <= width; i++) {\n    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n  }\n\n  // Horizontal lines.\n  for (let j = 0; j <= height; j++) {\n    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n    ctx.lineTo(width * (CELL_SIZE + 1) + 1, j * (CELL_SIZE + 1) + 1);\n  }\n  ctx.stroke();\n};\n\nconst getIndex = (row, column) => {\n  return row * width + column;\n};\n\nconst drawCells = () => {\n  const cellsPtr = universe.cells();\n  const cells = new Uint8Array(game_of_life_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, cellsPtr, width * height);\n\n  ctx.beginPath();\n  // Alive cells.\n  ctx.fillStyle = ALIVE_COLOR;\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n\n      if (cells[idx] !== game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Alive) {\n        continue;\n      }\n      ctx.fillRect(\n        col * (CELL_SIZE + 1) + 1,\n        row * (CELL_SIZE + 1) + 1,\n        CELL_SIZE,\n        CELL_SIZE\n      );\n    }\n  }\n\n  // Dead cells.\n  ctx.fillStyle = DEAD_COLOR;\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n\n      if (cells[idx] !== game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead) {\n        continue;\n      }\n      ctx.fillRect(\n        col * (CELL_SIZE + 1) + 1,\n        row * (CELL_SIZE + 1) + 1,\n        CELL_SIZE,\n        CELL_SIZE\n      );\n    }\n  }\n  ctx.stroke();\n};\nconst draw = () => {\n  drawGrid();\n  drawCells();\n};\nconst isPaused = () => {\n  return animationId === null;\n};\n\nconst playPauseButton = document.getElementById(\"play-pause\");\nconst playResetButton = document.getElementById(\"play-reset\");\nconst playDestroyButton = document.getElementById(\"play-destroy\");\n\nconst play = () => {\n  playPauseButton.textContent = \"⏸\";\n  renderLoop();\n};\n\nconst pause = () => {\n  playPauseButton.textContent = \"▶\";\n  cancelAnimationFrame(animationId);\n  animationId = null;\n};\nconst reset = () => {\n  universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\n};\n\nplayPauseButton.addEventListener(\"click\", (event) => {\n  if (isPaused()) {\n    play();\n  } else {\n    pause();\n  }\n});\nplayResetButton.addEventListener(\"click\", (event) => {\n  reset();\n  draw();\n});\nplayDestroyButton.addEventListener(\"click\", (event) => {\n  universe.destory();\n  draw();\n});\nconst range = document.getElementById(\"play-speed\");\nrange.addEventListener(\"change\", (e) => {\n  speed = e.target.value;\n});\n\nconst cell_change = (event, toggle) => {\n  const boundingRect = canvas.getBoundingClientRect();\n\n  const scaleX = canvas.width / boundingRect.width;\n  const scaleY = canvas.height / boundingRect.height;\n  const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n  const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n  const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);\n  const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);\n  toggle\n    ? universe.toggle_cell(row, col)\n    : universe.change_cell(row, col, game_of_life__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Alive);\n\n  drawGrid();\n  drawCells();\n};\n\n// canvas.addEventListener(\"click\", (event) => cell_change(event, true));\nlet isDragging = false;\nlet startX;\nlet startY;\ncanvas.addEventListener(\"mousedown\", function (event) {\n  // Check if the left mouse button is clicked\n  if (event.button !== 0) {\n    return;\n  }\n\n  isDragging = true;\n  startX = event.clientX;\n  startY = event.clientY;\n});\n\ncanvas.addEventListener(\"mousemove\", function (event) {\n  if (!isDragging) {\n    return;\n  }\n\n  // Check if the mouse has moved at least 10 pixels\n  const currentX = event.clientX;\n  const currentY = event.clientY;\n\n  const distanceX = currentX - startX;\n  const distanceY = currentY - startY;\n\n  if (Math.abs(distanceX) < 10 && Math.abs(distanceY) < 10) {\n    // Mouse click detected\n    cell_change(event, true);\n  } else {\n    // Mouse drag detected\n    cell_change(event, false);\n  }\n});\n\ncanvas.addEventListener(\"mouseup\", function (event) {\n  if (!isDragging) {\n    return;\n  }\n\n  // Stop dragging\n  isDragging = false;\n});\nplay();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);