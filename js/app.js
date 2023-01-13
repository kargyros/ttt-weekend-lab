/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, isWinner 

/*------------------------ Cached Element References ------------------------*/
const squares = document.getElementsByClassName('sqr')

const message = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/



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
    letter = '🙊'
    color = 'yellow'
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

