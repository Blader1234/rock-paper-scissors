// computers choice
function computerPlay() {
    let option = ["rock ", "paper ", "scissors "];
    let computerSelection = Math.floor(Math.random() * option.length);
    return option[computerSelection];
  }
  
  // player input
  function playerSelection() {
    let playerChoice = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
    return playerChoice;
  }
  // round of play
  function playRound(computerPlay, playerSelection) {
    console.log("Computer picked: " + computerPlay);
    console.log("You picked: " + playerSelection);
    let result = 0;
    switch (computerPlay + playerSelection) {
      // Computer wins
      case "rock scissors":
      case "scissors paper":
      case "paper rock":
        result = "You loose";
        break;
      // player wins
      case "rock paper":
      case "paper scissors":
      case "scissors rock":
        result = "You win";
        break;
      // Tie game
      case "rock rock":
      case "paper paper":
      case "scissors scissors":
        result = "Tie";
        break;
      default:
        alert();
    }
    return result;
  }
  function game() {
    let result = 0;
    let winCount = 0;
    for (let playCount = 1; playCount <= 5; playCount++) {
    
      result = playRound(computerPlay(), playerSelection());
      console.log(result);
      if (result == "You win") {
        winCount++;
      }

      if (result == "Draw!") {
        playCount;
      }

  
      if (winCount >= 3) {
        playCount = 5;
        console.log("You won the best of 5");
      } else if (winCount < 3 && playCount == 5) {
        console.log("Computer won the best of 5");
      }
    }
  }
  
  game();