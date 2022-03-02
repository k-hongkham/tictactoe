//Game objective is to get 3 in a row
//starting point given by workshop

const gameState = {
    players: ['X', 'O'],
    board: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
            ],
    winner: "WINNER!",
    tieGame: "IT'S A TIE!",
    currentPlayer:   'playerX',
}

//access above by gameState.board[0][0] 
// const board so we can add divs for playerturn records, announcements

const board = document.querySelector('#board')
//forEach checks each part of array once.


// starting with changing players -ref pixelate workshop
const currentPlayer = "X"

const cells = document.querySelectorAll('.cell')
let boxes = gameState.board

cells.forEach(function(event) {
    event.addEventListener('click', function(event) {
        let index = boxes.indexOf(event.target);
        cells.[index].classList.add('X')
    })
})
