//Game objective is to get 3 in a row
//starting point given by workshop

const board = document.querySelector("#board");
const xoText = document.getElementsByClassName("inner-text");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
const footer = document.querySelector("#who-turn");
let round = false;
let cell = document.querySelectorAll(".cell");
const play1 = document.getElementById("submit-name1");
const play2 = document.getElementById("submit-name2");
const singleComp = document.getElementById("computer");

//default arcade game params.
let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "X",
  gameRunning: true,
  gameStatus: "LIVE",
  player1: "Player X",
  player2: "Player O",
  lastPlayer: "Player O's turn",
  isComputer: false,
};

//player name inputs and submission buttons
play1.addEventListener("click", function () {
  gameState.player1 = name1.value;
});
play2.addEventListener("click", function () {
  gameState.player2 = name2.value;
});

//Single player mode.
singleComp.addEventListener("click", function () {
  document.getElementById("computer").disabled = true;
  gameState.isComputer = true;
});

// //access above by gameState.board[0][0]
// const board so we can add divs for playerturn records, announcements

// starting with changing players -ref pixelate workshop

board.addEventListener("click", function (event) {
  if (round) {
    return;
  }
  let firstPosition = event.target.id[0];
  let secondPosition = event.target.id[2];
  let position = gameState.board[firstPosition][secondPosition];
  if (position !== null) {
    return;
  }

  gameState.board[firstPosition][secondPosition] = gameState.currentPlayer;
  render();
  turn(false);
  checkWin();
});

//refreshers the page after each turn.
function render() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let k = 0; k < gameState.board[i].length; k++) {
      let currentElement = gameState.board[i][k];
      let cell = document.getElementById(`${i}-${k}`);
      cell.innerText = currentElement;
      // playerTurn.innerText = gameState.currentPlayer;
      gameStatus.innerText = gameState.gameStatus;
      playerCounter.innerHTML = gameState.lastPlayer;
      // render gamestatus
    }
  }
}

//verifies if a computer is playing, then assigns players accordingly.
function turn(hasComputerPlayed) {
  if (gameState.isComputer === true && hasComputerPlayed == false) {
    computerPlay();
  } else if (gameState.isComputer == false) {
    // 2 player block
    if (gameState.currentPlayer === "X") {
      gameState.currentPlayer = "O";
      gameState.lastPlayer = `${gameState.player1}'s turn`;
    } else if (gameState.currentPlayer === "O") {
      gameState.currentPlayer = "X";
      gameState.lastPlayer = `${gameState.player2}'s turn`;
    }
  }
}

//code that makes the computer work.
function computerPlay() {
  if (round) return;
  let flag = true;
  while (flag) {
    const index1 = Math.floor(Math.random() * 3);
    const index2 = Math.floor(Math.random() * 3);
    if (gameState.board[index1][index2] === null) {
      gameState.board[index1][index2] = "O";
      flag = false;
      gameState.currentPlayer = "X";
      gameState.lastPlayer = `Player X's turn`;
      render();
    }
  }
  if (gameState.lastPlayer !== null) {
    turn(true); // hasComputerPlayed is true now
  }
}

//checks if there's a winner.
function checkRow(array) {
  let x = 0;
  let o = 0;
  let sum = o + x;
  for (let w = 0; w < array.length; w++) {
    if (xoText[array[w]].innerText === "X") {
      x++;
      // console.log("X value" + " " + x);
    } else if (xoText[array[w]].innerText === "O") {
      o++;
      // console.log("O value" + " " + o);
    }
  }
  if (x >= 3) {
    round = true;
    winScreen("X");
  } else if (o >= 3) {
    round = true;
    winScreen("O");
  } else if (sum == 9) {
    // console.log("tie");
    drawScreen();
    round = false;
  }
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

//win and draw messages.
function winScreen(param) {
  if (param === "X") {
    gameState.gameStatus = "PLAYER X WINS!!!";
    gameStatus.innerText = gameState.gameStatus;
  } else if (param === "O") {
    gameState.gameStatus = `PLAYER O WINS!!!`;
    gameStatus.innerText = gameState.gameStatus;
  }
}

function drawScreen(param) {
  gameState.gameStatus = "DRAW GAME!!! TRY AGAIN!!!";
  gameStatus.innerText = gameState.gameStatus;
}

//DOM manipulation
const gameStatus = document.createElement("div");
gameStatus.classList.add("status");
footer.appendChild(gameStatus);

const playerCounter = document.getElementById("player-counter");
gameStatus.classList.add("turns");

// //include a reset button once the game is over
// //need to make a board first then reset back to null
const resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
footer.appendChild(resetBtn);
resetBtn.innerText = "RESET";

//resetting the board.
resetBtn.addEventListener("click", function () {
  reset();
  render();
  init();
});

function reset() {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  gameState.currentPlayer = "X";
  gameState.gameRunning = true;
  gameState.gameStatus = "LIVE";
  gameState.lastPlayer = `${gameState.player2}'s turn`;
  document.getElementById("computer").disabled = false;
  gameState.isComputer = false;
}

//resets the player turn once the game is reset.
function init() {
  playerCounter.innerText = `${gameState.player1}'s turn`;
}

init();
