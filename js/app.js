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
const squares = document.querySelectorAll('section > div')

const message = document.getElementById('message')

const resetBtn = document.getElementById('reset')


/*----------------------------- Event Listeners -----------------------------*/

squares.forEach((square) => {square.addEventListener('click', handleClick)
});

resetBtn.addEventListener('click', init);



/*-------------------------------- Functions --------------------------------*/
init();

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  resetBtn.setAttribute('hidden', true)
  render()
}

function render(){
board.forEach((cell, idx) => {
    let letter
    let color
  if (cell === 1){
    letter = '🐱'
    color = 'white'
  } else if (cell === -1){
    letter = '🐭'
    color = 'white'
  } else if (cell === null) {
    letter = ''
    color = 'white'
  }
    squares[idx].textContent = letter
    squares[idx].style.background = color

  });
  if (!winner){
    message.innerText = `It's ${turn === 1 ? "Tom's" : "Jerry's"} turn!`
  } else if (winner === 'T' ) { 
    message.innerText = `Tie game! Play again!`
    resetBtn.removeAttribute("hidden")
  } else {
    message.innerText = `Congratulations! ${winner === 1 ? 'Tom' : 'Jerry'} is the winner!`
    resetBtn.removeAttribute("hidden")
  }
}

function handleClick(event) {
  let sqValue = parseInt(event.target.id.replace('sq', ''))
  if (board[sqValue] || winner){
    return 
  } board[sqValue] = turn
  turn *= -1
  winner = getWinner()
  render()
}

function getWinner(){
  for (let i = 0; i < winArr.length; i++) {
    let [sq1, sq2, sq3] = winArr[i];
    if (board[sq1] + board[sq2] + board[sq3] === 3) {
      return 1
    } else if (board[sq1] + board[sq2] + board[sq3] === -3){
      return -1;
    }
  } 
    if(!board.includes(null)){
      return 'T';
    } else {
      return null
    }
}


