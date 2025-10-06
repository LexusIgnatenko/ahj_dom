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
