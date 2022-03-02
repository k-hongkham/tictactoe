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
    turn:   'X',
    currentPlayer: 'playerX'
}
   

   


// //access above by gameState.board[0][0] 
// const board so we can add divs for playerturn records, announcements

const board = document.querySelector('#board')
//forEach checks each part of array once.


// starting with changing players -ref pixelate workshop


let currentPlayer = "boxes[0]"



cells.addEventListener('click', function(event) {  
    let boxes = gameState.board
    const cells = document.querySelectorAll('.cell')
    const imageX = document.createElement('img')
    imageX.src = url("https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_red-1024.png");
    document.querySelector('#board').appendChild(image)
    let index = boxes.indexOf(event.target);
            cells[index].classList.add('boxes[0]')
    
    })


//classlist will add the class to the element without deleting any existing class names


// How to change players in display. need to add div.
//addEventListener where clicks then inputs X or O
// 

// function whosTurn () {
//     if (gameState.currentPlayer === 'playerX') {
//         gameState.currentPlayer ==='playerO'
//     }
// }

// How to block filled spaces?
// if === "", continue? remove the available space?





//check is there's a winner or tie game. reference sudoku project to check if values === a winner. Using this method in case we expand to a larger grid

// let theGame = gameState.board;
// console.log(gameState.board)

// function winner (theGame) {
//     let theRows = [];
//     for(let i = 0; i < 3; i++ ){
//         theRows.push(theGame[i])
//        let winningRow = theRows.join('').toLowerCase()
//     } if (winningRow ==='xxx') {
//             return "Player X is the WINNER!"
//     } if (winningRow === 'ooo') {
//             return "Player O is the WINNER!"
//     }
//     let theCols =[];
//             for (let j = 0; j < 9; j++) {
//                 theCols.push(theGame[i][j]);
//                 let winningCol = theCols.join('').toLowerCase()
//                 if (winningCol === 'xxx') {
//                     return "Player X is the WINNER!"                    
//                 } if (winningCol === 'ooo'){
//                     return "Player O is the WINNER!"
//                 }
//             }
//     let theDiag = [];
//             for (let k = 0; k < 9; k++) {
//                 theDiag.push(theGame[i][k])
//                 let winningDiag = theDiag.join('').toLowerCase()
//                 if ( k % 4 === 0 && winningDiag === 'xxx') {
//                     return "Player X is the WINNER!" 
//                 } if (k % 2 === 0 && k!==8) {
//                     return "Player O is the WINNER!"
//                 }
                
//             }
//             continue;
//         }
            


// winner(theGame)
// console.log(winner)

// How to display who's turn it is

// const playerTurn = document.createElement('div')
// playerTurn.classList.add('whos-turn')
// board.appendChild(playerTurn)
// playerTurn.innerText = gameState.turn






// //Make them work together using event listeners

// function render () {
//      turns.innerText = gameState.turn
// }

// function reset() {

// }


// //include a reset button once the game is over
// //need to make a board first then reset back to null
// const resetBtn = document.createElement('button')
// resetBtn.classList.add('reset')
// board.appedChild(resetBtn)
// resetBtn.innerText = 'Restart' 

// resetBtn.addEventListener('click', function() {
//     reset()
//     render()
// })





//Extra goals is computer player, possibly different modes, easy, med, hard
// const randomComp = Math.floor(math.random() * 9);
// const computerIdx = gameState.board[randomComp][randomComp]
// cells[computerIdx - 1].classList.add('computer')




//changing board size. My idea was to create two loops that expand evenly to create n x n grid.