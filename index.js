//Game objective is to get 3 in a row
//starting point given by workshop

let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "X",
  gameRunning: true,
};

// //access above by gameState.board[0][0]
// const board so we can add divs for playerturn records, announcements

const board = document.querySelector("#board");

// starting with changing players -ref pixelate workshop

board.addEventListener("click", function (event) {
  let firstPosition = event.target.id[0];
  let secondPosition = event.target.id[2];
  let position = gameState.board[firstPosition][secondPosition];
  // the if statement needs to come before declaration in order to avoid having the spaces change because new value is Added. If you pu thtis below gameState.board etcetc. the X and O will be interchangable.
  if (position !== null) {
    return;
  }

  gameState.board[firstPosition][secondPosition] = gameState.currentPlayer;

  render();
  turn();
});
// let boxes = gameState.board
// const imageX = document.createElement('img')
// imageX.src = url("https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_red-1024.png");
// document.querySelector('#board').appendChild(image)
// let index = boxes.indexOf(event.target);
//         cells[index].classList.add('boxes[0]')

// })

function render() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let k = 0; k < gameState.board[i].length; k++) {
      let currentElement = gameState.board[i][k];
      let cell = document.getElementById(`${i}-${k}`);
      cell.innerText = currentElement;
    }
  }
}

// how to verify if the winner is X or O. - you can use the v8 chrome console to see is where the value or"player" is inputted. It appears at innerText.
function playedCells(cellFilled, cellFilledIdx) {
  gameState.board[cellFilledIdx] = gameState.currentPlayer;
  cellFilled.innerHTML = currentPlayer;
}

function turn() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else if (gameState.currentPlayer === "O") {
    gameState.currentPlayer = "X";
  }
}

// How to change players in display. need to add div.
//addEventListener where clicks then inputs X or O. You can also ch

//check is there's a winner or tie game. checks by inner texts. check if rows are equal.

const winner = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

function results() {
  let roundEnd = false;

  for (let w = 0; w < winner.length; w++) {
    const game = gameState.board;
    const won = winner[i];

    let pos1 = game[winning[0]];
    let pos2 = game[winning[1]];
    let pos3 = game[winning[2]];

    // if these spaces are blank. there is no possible way to winner.
    if (a === "" || b === "" || c === "") {
      continue;
    }
    // these spaces are the same in order for a winner to be declared
    if (a === b && b === c) {
      won = true;
      break;
    }
  }
  if (roundEnd) {
    gameRunning.innerHMTL = winScreen();
    gameState.gameRunning = false;
    return;
  }
  let roundDraw = !gameState.board.includes(null);
  if (roundDraw) {
    gameRunning.innerHTML = drawScreen();
    gameState.gameRunning = false;
    return;
  }
}

function winScreen() {
  return `PLAYER ${gameState.currentPlayer} WINS!!!`;
}

function drawScreen() {
  return "DRAW GAME!!! TRY AGAIN!!!";
}
// if these are not the same, there is not a winner...yet or it's a draw. referring to innertext to check for X and O

const playerTurn = document.createElement("div");
playerTurn.classList.add("turn-display");
board.appendChild(playerTurn);
playerTurn.innerText = `${gameState.currentPlayer}`;

// //include a reset button once the game is over
// //need to make a board first then reset back to null
const resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
board.appendChild(resetBtn);
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

//changing board size. My idea was to create two loops that expand evenly to create n x n grid.

//classlist will add the class to the element without deleting any existing class names
