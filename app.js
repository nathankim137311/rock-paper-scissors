console.log('hello everyone'); 

// variables
// a game prompt window pops up 
const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase(); 
const computerSelection = computerPlay(); 
// event listeners

// functions

// random number from 1 - 3 generator printing rock paper and scissors
function computerPlay () {
  let randomNumber = Math.floor(Math.random()*3) + 1;
  if (randomNumber == 1) {
    return('rock'); 
  } else if (randomNumber == 2) {
    return('paper');
  } else {
    return('scissors'); 
  }
}
// a function determining the winner of a round 
function oneRound (playerSelection, computerSelection) {

  playerSelection.toLowerCase; 
  computerSelection.toLowerCase; 

  if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log('Paper beats rock, computer wins!'); 
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('Rock beats scissors, user wins!');
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('Paper beats rock, user wins!'); 
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log('Scissors beats paper, computer wins!');
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log('Rock beats scissors, user wins!'); 
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('Scissors beats paper, user wins!'); 
  } else if (playerSelection === computerSelection) {
    console.log('It\'s a tie!'); 
  }
}

//printing player, computer and game results
console.log('user:' + playerSelection);
console.log('computer:' + computerSelection);
(oneRound(playerSelection, computerSelection)); 

