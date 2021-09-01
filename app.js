console.log('hello everybody!');

//Variables 
const displayYourResult = document.getElementById('user-result');
const displayComputerResult = document.getElementById('computer-result');
const displayGameResult = document.getElementById('game-result');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const choiceBtns = document.querySelectorAll('.btn');
//Eventlisteners
//Functions 
choiceBtns.forEach(element => console.log(element));




/* 
//normal function syntax 
document.addEventListener('click', function () {
  console.log('Click')
})
//arrow function syntax
document.addEventListener('click', () => console.log('Click'))

//These functions work the same
*/

