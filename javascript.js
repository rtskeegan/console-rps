function getComputerSelection() {
    const choiceOptions = ['rock','paper','scissors'];
    const rng = Math.floor(Math.random() * 3);
    let computerSelection = choiceOptions[rng];
    return computerSelection;
}

function getPlayerSelection() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerInput.toLowerCase();
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        console.log("Please enter Rock, Paper, or Scissors.");
        playerInput = prompt("Rock, Paper, or Scissors?");
        playerSelection = playerInput.toLowerCase();
       }
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    if (computerSelection == playerSelection) {
        console.log("It's a tie! Try again!");
        return null;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You lose this round! You picked scissors and the computer picked rock.");
        return false;
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("You win this round! You picked paper and the computer picked rock.");
        return true;
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You lose this round! You picked rock and the computer picked paper.");
        return false;
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("You win this round! You picked scissors and the computer picked paper.");
        return true;
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You lose this round! You picked paper and the computer picked scissors.");
        return false;
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("You win this round! You picked rock and the computer picked scissors.");
        return true;
    }
    return null;
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    for (let count = 0; count < 5; count++) {
        let computerSelection = getComputerSelection();
        let playerSelection = getPlayerSelection();
        let result = playRound(computerSelection, playerSelection);
        if (result == true) {
            playerScore++;
        }
        else if (result == false) {
            computerScore++;
        }
    }
    let winner = "null";
    if (playerScore > computerScore) 
        winner = "You!";
    else if (computerScore > playerScore) 
        winner = "Computer :(";

    console.log("~~~~~~~~~~~~~~~~Game Results~~~~~~~~~~~~~~~~");
    console.log("Computer Score: " + computerScore);
    console.log("Player Score: " + playerScore);
    console.log("Winner: " + winner);
    
}

playGame();