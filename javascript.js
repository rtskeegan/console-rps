function getComputerSelection() {
    const choiceOptions = ['rock','paper','scissors'];
    const rng = Math.floor(Math.random() * 3);
    let computerSelection = choiceOptions[rng];
    return computerSelection;
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
    let computerSelection = getComputerSelection();
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerScore = 0;
            let computerScore = 0;
            while (playerScore < 5 && computerScore < 5) {
                let playerSelection = null;
                playerSelection = button.id;
                let scoreCounter = playRound(computerSelection, playerSelection);
                console.log(scoreCounter);
                if (scoreCounter == 1) {
                    playerScore++;
                    console.log(playerScore); 
                    break;
                }
                else if (scoreCounter == 0) {
                    computerScore++;
                    console.log(computerScore);
                    break;
                }
                else {
                    break;
                }
        }
        });
    }); 
}

playGame();