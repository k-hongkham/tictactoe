//Game objective is to get 3 in a row
//starting point given by workshop

const gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  winner: "WINNER!",
  tieGame: "IT'S A TIE!",
  currentPlayer: "X",
};

// //access above by gameState.board[0][0]
// const board so we can add divs for playerturn records, announcements

const board = document.querySelector("#board");

// starting with changing players -ref pixelate workshop

board.addEventListener("click", function (event) {
  console.log(event.target.id);
  let firstPosition = event.target.id[0];
  let secondPosition = event.target.id[2];
  const position = gameState.board[firstPosition][secondPosition];
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
      checkWinner();
    }
  }
}

function turn() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else if (gameState.currentPlayer === "O") {
    gameState.currentPlayer = "X";
  }
}
//classlist will add the class to the element without deleting any existing class names

// How to change players in display. need to add div.
//addEventListener where clicks then inputs X or O

// How to block filled spaces?
// if === "", continue? remove the available space?

//check is there's a winner or tie game. checks by inner texts. check if rows are equal.

const winning = [
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

function checkWinner() {
  for (let w = 0; w < winning.length; w++) {
    const [a, b, c] = winning[w];
  }

  if (
    // if these are not the same, there is not a winner...yet or it's a draw.
    gameState.board[a] &&
    gameState.board[a] === gameState.board[b] &&
    gameState.board[a] === gameState.board[c]
  ) {
    return gameState.board[a];
  }
  console.log(gameState.board[a]);
}
checkWinner();
// const playerTurn = document.createElement('div')
// playerTurn.classList.add('whos-turn')
// board.appendChild(playerTurn)
// playerTurn.innerText = gameState.turn

// //Make them work together using event listeners

// //include a reset button once the game is over
// //need to make a board first then reset back to null
// const resetBtn = document.getElementsByClassName("restart");

// resetBtn.addEventListener("click", function () {
//   Restart();
//   render();
// });

function restart() {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  gameState.currentPlayer = "X";
}

//Extra goals is computer player, possibly different modes, easy, med, hard
// const randomComp = Math.floor(math.random() * 9);
// const computerIdx = gameState.board[randomComp][randomComp]
// cells[computerIdx - 1].classList.add('computer')

//changing board size. My idea was to create two loops that expand evenly to create n x n grid.
