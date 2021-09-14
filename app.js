// Rock Paper Scissors Project 

// variables
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score'); 

let playerScoreDisplay = playerScore.textContent = 0;
let computerScoreDisplay = computerScore.textContent = 0; 

const computerDisplay = document.querySelector('#computer'); 
const userDisplay = document.querySelector('#user');
const resultDisplay = document.querySelector('#result');
const finalResultDisplay = document.querySelector('#game-result');   
const btns = document.querySelectorAll('button'); 

// event listeners
btns.forEach(btn => btn.addEventListener('click', (e) => {
  playerSelection = e.target.id;
  userDisplay.textContent = playerSelection; 
  playRound(playerSelection);
  getResult()
}));

// functions

// at the end of the five rounds the score is tally'd and a winner is determined 
  //if (playerScore > computerScore) { 
  //  finalResultDisplay.innerHTML.replace('Result:', 'Overall Winner'); 
  //  resultDisplay.textContent = 'You Won!';
  //} else if (computerScore > playerScore) {
  //  finalResultDisplay.innerHTML.replace('Result:', 'Overall Winner'); 
  //  resultDisplay.textContent = 'You Lost!'; 
  //} else {
  //  finalResultDisplay.innerHTML.replace('Result:', 'Overall Winner'); 
  //  resultDisplay.textContent = 'It\'s a Tie! No one wins';
  //}

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

function playRound (playerSelection) { 
  const computerSelection = computerPlay();   
  if (playerSelection === computerSelection) { 
    resultDisplay.textContent = 'It\'s a draw!'; 
    computerScoreDisplay += 0; 
  } else if (playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'paper') {
    resultDisplay.textContent = 'You Win'; 
    playerScoreDisplay += 1; 
  } else if (playerSelection == 'paper' && computerSelection == 'scissors' ||playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'rock') {
    resultDisplay.textContent = 'You Lose';
    computerScoreDisplay += 1; 
  }
}