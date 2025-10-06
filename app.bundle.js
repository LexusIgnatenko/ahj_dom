/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 300:
/***/ (function() {

// GameBoard.js
class GameBoard {
  constructor(boardSize, boardElementId = "board") {
    this.boardSize = boardSize ** 2; // Общее количество ячеек
    this.previousIndexCell = -1; // Начальная ячейка
    this.currentIndexCell = 0; // Текущая ячейка
    this.boardElementId = boardElementId;
    this.imageElement = document.createElement("img");
    this.imageElement.src = "./img/goblin.png"; // Путь к изображению гоблина
    this.imageElement.alt = "Goblin";
  }

  drawBoard() {
    const board = document.getElementById(this.boardElementId);
    if (!board) {
      throw new Error(`Element with id ${this.boardElementId} not found`);
    }

    // Очищаем доску перед отрисовкой
    board.innerHTML = "";

    // Создаем ячейки
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement("div");
      itemBoard.className = "cell";
      itemBoard.id = `cell${i}`;
      board.appendChild(itemBoard);
    }

    this.randomImg();
  }

  randomImg() {
    setInterval(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * this.boardSize);
      } while (newIndex === this.previousIndexCell);

      const previousCell = document.getElementById(
        `cell${this.previousIndexCell}`,
      );
      if (previousCell) {
        previousCell.innerHTML = ""; // Очищаем предыдущую ячейку
      }

      const currentCell = document.getElementById(`cell${newIndex}`);
      if (currentCell) {
        currentCell.appendChild(this.imageElement.cloneNode()); // Перемещаем изображение в новую ячейку
      }

      this.previousIndexCell = newIndex; // Обновляем предыдущую ячейку
    }, 1000); // Перемещение каждую секунду
  }
}

// Инициализация игры
const gameBoard = new GameBoard(4);
gameBoard.drawBoard();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/js/GameBoard.js
var GameBoard = __webpack_require__(300);
;// ./src/img/goblin.png
/* harmony default export */ var goblin = (__webpack_require__.p + "img/goblin.png");
;// ./src/index.js




}();
/******/ })()
;