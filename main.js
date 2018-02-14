var user;
var computer;
var winner;

function startGame(e) {
  user = e.target.id
  computerChoice();
  checkWin();
  displayResults();
}

function computerChoice() {
  var choices = ['rock', 'paper', 'scissors']
  var index = Math.floor(Math.random() * 3)
  console.log(choices[index])
}

function checkWin() {
  console.log('checking for win')
}

function displayResults() {
  console.log('displaying results')
}

var choices = document.getElementsByClassName('choice')

for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}

var start = document.getElementById('start')
start.addEventListener('click', function() {
  start.className = "hide"
  var game = document.getElementById('game')
  game.className = 'container'
});