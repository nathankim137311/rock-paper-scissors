// Rock Paper Scissors Project 

function game () { 
  let playerScore = 0, computerScore = 0; 
  for (round = 0; round < 5; round++) { 
    playRound(); 
    if (playerWins) { 
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

function playRound () {
  const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase(); 
  const computerSelection = computerPlay(); 
  console.log('user:' + playerSelection); 
  console.log('computer:' + computerSelection);

  if (playerSelection == 'rock' && computerSelection == 'paper') { 

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

game(); 
