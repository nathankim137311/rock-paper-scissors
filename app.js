// Rock Paper Scissors Project 

// variables
const playerCounter = document.querySelector('#player-score');
const computerCounter = document.querySelector('#computer-score'); 
let playerScore = 0; 
let computerScore = 0; 

const computerDisplay = document.querySelector('#computer'); 
const userDisplay = document.querySelector('#user');
const resultDisplay = document.querySelector('#result');
const finalResultDisplay = document.querySelector('#game-result');   
const btns = document.querySelectorAll('button'); 

// event listeners
btns.forEach(btn => btn.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  userDisplay.textContent = playerSelection;
  computerSelection = computerPlay();  
  let roundResult = playRound(playerSelection, computerSelection);
  gameScore(roundResult);  
}));

// functions
function gameScore (roundResult) { 
  if (roundResult === 'draw') {
    playerScore + 0; 
    computerScore + 0;
  } else if (roundResult === 'win') {
    playerScore++; 
    playerCounter.textContent = playerScore; 
  } else if (roundResult === 'lose') {
    computerScore++;
    computerCounter.textContent = computerScore; 
  }

  if (computerScore === 5) {
    finalResultDisplay.textContent = 'Overall Winner'; 
    resultDisplay.textContent = 'Computer Wins'; 
  } else if (playerScore === 5) {
    finalResultDisplay.textContent = 'Overall Winner'; 
    resultDisplay.textContent = 'Conglaturations You Win';
  }
}



function computerPlay () {
  let randomNumber = Math.floor(Math.random()*3) + 1;
  if (randomNumber == 1) {
  computerSelection = 'rock';
  computerDisplay.textContent = 'rock'; 
  } else if (randomNumber == 2) {
  computerSelection = 'paper';
  computerDisplay.textContent = 'paper';
  } else {
  computerSelection = 'scissors';
  computerDisplay.textContent = 'scissors'; 
  }
  return computerSelection; 
}

function playRound (playerSelection, computerSelection) {   
  let draw = 'draw';
  let playerWinRound = 'win'; 
  let computerWinRound = 'lose'; 
  if (playerSelection === computerSelection) { 
    resultDisplay.textContent = 'It\'s a draw!';
    return draw;  
  } else if (playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper') {
    resultDisplay.textContent = 'You Win'; 
    return playerWinRound; 
  } else if (playerSelection == 'paper' && computerSelection == 'scissors' ||playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'rock') {
    resultDisplay.textContent = 'You lose'; 
    return computerWinRound; 
  }
}
