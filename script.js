let playerSelection = ''
let computerSelection = ''


playerSelection = prompt('Rock, Paper or Scissors', '').toLowerCase

//prompt (playerSelection())

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randomNumber == 0) {
    computerChoice ='rock';
  }else if (randomNumber == 1) {
    computerChoice = 'paper';
  }else if (randomNumber == 2) {
    computerChoice = 'scissors';
  }else {
    computerChoice = 'ERROR'
  }
 return computerChoice, 
 console.log('this is what should be compared to ' + computerChoice)

}
//console.log(computerChoice)

 
  if (playerSelection == getComputerChoice()) {
    console.log('Tie')
  }
  else if ((playerSelection == 'rock' && getComputerChoice() =='scissors') ||
           (playerSelection == 'scissors' && getComputerChoice() == 'paper') ||
           (playerSelection == 'paper' && getComputerChoice() == 'rock')) {
            console.log('Win')
           }
  else {
    console.log('Loss')
  }



//console.log("i chose " + playerSelection)
