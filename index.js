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
}
   

   


// //access above by gameState.board[0][0] 
// console.log (gameState.board[0][0])
// console.log (gameState.board[1][1])

const board = document.querySelector('#board')

//classlist will add the class to the element without deleting any existing class names


// How to change players
//addEventListener where clicks then inputs X or O








//check is there's a winner or tie game. reference sudoku project to check if values === a winner. Using this method in case we expand to a larger grid

let theGame = gameState.board;
console.log(gameState.board)

function winner (theGame) {
    let theRows = [];
    for(let i = 0; i < 3; i++ ){
        theRows.push(theGame[i])
       let winningRow = theRows.join('').toLowerCase()
    } if (winningRow ==='xxx') {
            return "Player X is the WINNER!"
    } if (winningRow === 'ooo') {
            return "Player O is the WINNER!"
    }
    let theCols =[];
            for (let j = 0; j < 9; j++) {
                theCols.push(theGame[i][j]);
                let winningCol = theCols.join('').toLowerCase()
                if (winningCol === 'xxx') {
                    return "Player X is the WINNER!"                    
                } if (winningCol === 'ooo'){
                    return "Player O is the WINNER!"
                }
            }
    let theDiag = [];
            for (let k = 0; k < 9; k++) {
                theDiag.push(theGame[i][k])
                let winningDiag = theDiag.join('').toLowerCase()
                if ( k % 4 === 0 && winningDiag === 'xxx') {
                    return "Player X is the WINNER!" 
                } if (k % 2 === 0 && k!==8) {
                    return "Player O is the WINNER!"
                }
                
            }
            continue;
        }
            


winner(theGame)
console.log(winner)

// another wincheck
// const cells = document.querySelectorAll('.cell');

// cells.addEventListener ('click', function()
//         if (cells === "") {

//         }
//                 )
// let winning = [ [0,1,2],
//                 [3,4,5],
//                 [6,7,8],
//                 [0,3,6],
//                 [1,4,7],
//                 [2,5,8],
//                 [0,4,8],
//                 [2,4,6]]

// function checkForWinner() {
//    {
       
//     })
// }



// How to display who's turn it is

const playerTurn = document.createElement('div')
playerTurn.classList.add('whos-turn')
board.appendChild(playerTurn)
playerTurn.innerText = gameState.turn






// //Make them work together using event listeners

function render () {
     turns.innerText = gameState.turn
}

function reset() {

}






// //listen for click, then it changes players, disable clicks in spots that are taken
// let currentPlayer = gameState.players[0];?

let currentPLayer = "X"


const cell = document.querySelectorAll('.cell');
cell = gameState.board

cell.forEach(function(event) {
    box.addEventListener('click', function(event) {

        const index = theGame.indexOf(event.target);
        cell.[index].classList.add('current')
      
        checkForWinner()
       
    
    })
})

// //include a reset button once the game is over
// //need to make a board first then reset back to null
const resetBtn = document.createElement('button')
resetBtn.classList.add('reset')
board.appedChild(resetBtn)
resetBtn.innerText = 'Restart' 

resetBtn.addEventListener('click', function() {
    reset()
    render()
})





//Extra goals is computer player, possibly different modes, easy, med, hard
const randomComp = Math.floor(math.random() * 9);
const computerIdx = gameState.board[randomComp][randomComp]
cells[computerIdx - 1].classList.add('computer')




//changing board size. My idea was to create two loops that expand evenly to create n x n grid.