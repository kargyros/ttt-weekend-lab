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
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", handleClick);
}

resetBtn.addEventListener('click', init)





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
    letter = '🐱'
    color = 'white'
  } else if (cell === -1){
    letter = '🐶'
    color = 'white'
  } else if (cell === null) {
    letter = ''
    color = 'black'
  }
    squares[idx].textContent = letter
    squares[idx].style.background = color

  });
  if (!winner){
    message.innerText = `It is ${turn === 1 ? "Kostas's" : "Jack's"} turn!`
  } else if (winner === 'T' ) { 
    message.innerText = `Tie Game! Play again!`
  } else {
    message.innerText = `Congratulations! ${winner === 1 ? 'Kostas' : 'Jack'} is the winner!`
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


