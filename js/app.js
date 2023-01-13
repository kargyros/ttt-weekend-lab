/*-------------------------------- Constants --------------------------------*/
const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, isWinner 

/*------------------------ Cached Element References ------------------------*/
const squares = document.getElementsByClassName('sqr')

const message = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {square.addEventListener('click', handleClick)
  
});


/*-------------------------------- Functions --------------------------------*/
init();

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render(){
board.forEach((cell, idx) => {
    let letter
    let color
  if (cell === 1){
    letter = '🥸'
    color = 'green'
  } else if (cell === -1){
    letter = '😶‍🌫️'
    color = 'orange'
  } else if (cell === null) {
    letter = ''
    color = 'white'
  }
    squares[idx].innerText = letter
    squares[idx].style.background = color

  });
  if (!winner){
    message.innerText = `It is ${turn === 1 ? "Kostas's" : "Jack's"} turn!`
  } else if (winner === 'T' ) { 
    `Tie Game! Play again!`
  } else {
    message.innerText = `Congratulations! ${winner === 1 ? 'Kostas' : 'Jack'} is the winner!`
  }
}

function handleClick(event) {
  let sqValue = parseInt(event.target.id.replace('sqr', ''))
  if (board[sqValue] || winner){
    return 
  } board[sqValue] = turn
  turn *= -1
  winner = getWinner()
  render()
}



