// Rock Paper Scissors Project 

function game () { // encompasses entire game of rock paper scissors 
  let playerScore = 0, computerScore = 0; 
  for (round = 0; round < 5; round++) { // function determining number of rounds 
    playRound(); 
    if (playerWins) { // if statement to increment score by one 
      playerScore++;
  } else if (computerWins) {
      computerScore++;
  }
 } 
 // at the end of the five rounds the score is tally'd and a winner is determined 
 if (playerScore > computerScore) { 
  console.log('You Won!');
} else if (computerScore > playerScore) {
  console.log('You Lost!'); 
} else {
  console.log('It\'s a Tie! No one wins')
}
}

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

// a function encompassing every action in a single round
function playRound () {
  const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase(); // text input window pops up 
  const computerSelection = computerPlay(); 
  console.log('user:' + playerSelection); // prints selections 
  console.log('computer:' + computerSelection);

  if (playerSelection == 'rock' && computerSelection == 'paper') { // rock paper scissors conditionals

    console.log('Paper beats rock, computer wins!'); 
    computerWins = true; 
    playerWins = false;

  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {

    console.log('Rock beats scissors, user wins!');
    playerWins = true; 
    computerWins = false; 

  } else if (playerSelection == 'paper' && computerSelection == 'rock') {

    console.log('Paper beats rock, user wins!'); 
    playerWins = true;
    computerWins = false; 

  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {

    console.log('Scissors beats paper, computer wins!');
    computerWins = true; 
    playerWins = false; 

  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {

    console.log('Rock beats scissors, computer wins!');
    computerWins = true; 
    playerWins = false; 

  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {

    console.log('Scissors beats paper, user wins!'); 
    playerWins = true; 
    computerWins = false; 

  } else if (playerSelection === computerSelection) {

    console.log('It\'s a tie!'); 
    playerWins = false; 
    computerWins = false; 
  }
}

//printing player, computer and game results
game(); 
