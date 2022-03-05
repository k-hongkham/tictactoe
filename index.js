//Game objective is to get 3 in a row
//starting point given by workshop

const board = document.querySelector("#board");
const xoText = document.getElementsByClassName("inner-text");
const footer = document.querySelector("#who-turn");

let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "X",
  gameRunning: true,
  gameStatus: "LIVE",
};

// //access above by gameState.board[0][0]
// const board so we can add divs for playerturn records, announcements

// starting with changing players -ref pixelate workshop

board.addEventListener("click", function (event) {
  let firstPosition = event.target.id[0];
  let secondPosition = event.target.id[2];
  let position = gameState.board[firstPosition][secondPosition];
  if (position !== null) {
    return;
  }

  gameState.board[firstPosition][secondPosition] = gameState.currentPlayer;

  render();
  turn();
});

// const imageX = document.createElement('img')
// imageX.src = url("https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_red-1024.png");

function render() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let k = 0; k < gameState.board[i].length; k++) {
      let currentElement = gameState.board[i][k];
      let cell = document.getElementById(`${i}-${k}`);
      cell.innerText = currentElement;
      playerTurn.innerText = gameState.currentPlayer;
      // render gamestatus
    }
  }
  checkWin();
}

function turn() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else if (gameState.currentPlayer === "O") {
    gameState.currentPlayer = "X";
  }
}

function checkRow(array) {
  let x = 0;
  let o = 0;
  for (let w = 0; w < array.length; w++) {
    if (xoText[array[w]].innerText === "X") {
      x++;
    } else if (xoText[array[w]].innerText === "O") {
      o++;
    }
  }
  if (x >= 3) {
    console.log(`${gameState.currentPlayer} wins`);
    winScreen();
  } else if (o >= 3) {
    winScreen();
    console.log(`${gameState.currentPlayer} wins`);
  }
  drawScreen();
  console.log("no win yet");
  return false;
}

const checkWin = function () {
  let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winning.length; i++) {
    checkRow(winning[i]);
  }
};

function winScreen() {
  return `PLAYER ${gameState.currentPlayer} WINS!!!`;
}

function drawScreen() {
  return "DRAW GAME!!! TRY AGAIN!!!";
}

const playerTurn = document.createElement("div");
playerTurn.classList.add("turn-display");
footer.appendChild(playerTurn);

const gameStatus = document.createElement("div");
gameStatus.classList.add("status");
footer.appendChild(gameStatus);
gameStatus.innerText = gameState.gameStatus;

// //include a reset button once the game is over
// //need to make a board first then reset back to null
const resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
footer.appendChild(resetBtn);
resetBtn.innerText = "RESET";

resetBtn.addEventListener("click", function () {
  reset();
  render();
});

function reset() {
  gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    currentPlayer: "X",
    gameRunning: true,
  };
}

//Extra goals is computer player, possibly different modes, easy, med, hard
// const randomComp = Math.floor(math.random() * 9);
// const computerIdx = gameState.board[randomComp][randomComp]
// cells[computerIdx - 1].classList.add('computer')
