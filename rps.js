var playerChoice = []
var compChoice = []
var compWins = []
var playerWins = []

var buttons = document.getElementsByClassName("choice");

function compAssign() {
  compChoice = Math.random()
  if(compChoice < 0.34) {
    compChoice = 'Rock';
  } else if(compChoice <= 0.67) {
    compChoice = 'Paper';
  } else {
    compChoice = 'Scissors';
  }
}

function clickButton() {
  var id = this.id
  if(this.id == "reset") {
      playerWins.length = 0;
      document.getElementById("playerscore").innerHTML = playerWins.length
      compWins.length = 0;
      document.getElementById("compscore").innerHTML = compWins.length
    } else document.getElementById("choice").innerHTML = "You chose " + id
  playerChoice.unshift(this.id)
  compAssign(compChoice.unshift)
  assess(playerChoice[0], compChoice)
}

function assess(playerChoice,compChoice) {
  if (playerChoice  === compChoice) {
     document.getElementById("result").innerHTML = "Computer chose the same. It's a tie!"
 } else if(playerChoice === "Rock") {
     if (compChoice === "Scissors") {
         document.getElementById("result").innerHTML = "Computer chose Scissors. You win!";
         playerWins.push(1)
         playerScore(playerWins)
         // console.log(playerWins)
     } else {
         document.getElementById("result").innerHTML = "Computer chose Paper. You lose!";
         compWins.push(1)
         compScore(compWins)
         // console.log(compWins)
     }
 } else if(playerChoice === "Paper") {
     if(compChoice === "Rock") {
         document.getElementById("result").innerHTML = "Computer chose Rock. You win!";
         playerWins.push(1)
         playerScore(playerWins)
         // console.log(playerWins)
     } else {
         document.getElementById("result").innerHTML = "Computer chose Scissors. You lose!";
         compWins.push(1)
         compScore(compWins)
         // console.log(compWins)
     }
 } else if(playerChoice === "Scissors") {
     if (compChoice === "Rock") {
         document.getElementById("result").innerHTML = "Computer chose Rock. You lose!";
         compWins.push(1)
         compScore(compWins)
         // console.log(compWins)
     } else {
         document.getElementById("result").innerHTML = "Computer chose Paper. You win!";
         playerWins.push(1)
         playerScore(playerWins)
         
     }
 }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickButton, false);
}

function playerScore(playerWins) {
  document.getElementById("playerscore").innerHTML = playerWins.length
}

function compScore(compWins) {
  document.getElementById("compscore").innerHTML = compWins.length
}