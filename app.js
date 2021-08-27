console.log('hello everybody');

const computerChoiceDisplay = document.getElementById('computer-attack')
const userChoiceDisplay = document.getElementById('user-attack')
const gameResultDisplay = document.getElementById('game-result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
}))

let computerChoice = Math.random() * 3;
if (computerChoice === 1) {
return 'rock';
}else if(computerChoice === 2) {
return 'paper';
}else (computerChoice === 3)








