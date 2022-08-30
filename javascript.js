function disable() {
    document.querySelectorAll('button').forEach(el => el.setAttribute('disabled', true));
  }

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
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    const pscore = document.createElement('div');
    player.appendChild(pscore);
    pscore.textContent = playerScore;
    const cscore = document.createElement('div');
    computer.appendChild(cscore);
    cscore.textContent = playerScore;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            i++;
            console.log(i);
            let computerSelection = getComputerSelection();
            while (playerScore < 5 && computerScore < 5) {
                let playerSelection = null;
                playerSelection = button.id;
                let scoreCounter = playRound(computerSelection, playerSelection);
                console.log(scoreCounter);
                if (scoreCounter == 1) {
                    playerScore++;
                    console.log(playerScore); 
                    pscore.textContent = playerScore;
                    break;
                }
                else if (scoreCounter == 0) {
                    computerScore++;
                    console.log(computerScore);
                    cscore.textContent = computerScore;
                    break;
                }
                else {
                    break;
                }
            }
            if (playerScore == 5) {
                disable();
                let styles = `
                #popup {
                    color: white;
                    width: 30rem;
                    height: 30rem;
                    background-color: red;
                
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                
                    margin: auto;
                #popup .innercontents {
                    color: white;

                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    margin: auto;
                    }
                }    
            `;
                let styleSheet = document.createElement("style");
                styleSheet.innerText = styles;
                document.head.appendChild(styleSheet);
                const winwindow = document.createElement('div');
                popup.appendChild(winwindow);
                winwindow.textContent = "You win!";

                return;
            }
            else if (computerScore == 5) {
                disable();
                let styles = `
                #popup {
                    width: 25rem;
                    height: 25rem;
                    background-color: red;
                
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                
                    margin: auto;
                #popup .innercontents {
                    color: white;

                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    margin: auto;
                    }    
                }    
            `;
                let styleSheet = document.createElement("style");
                styleSheet.innerText = styles;
                document.head.appendChild(styleSheet);
                const losewindow = document.createElement('div');
                popup.appendChild(losewindow);
                losewindow.textContent = "You lose!";


            }
            
        });
    }); 
    return;
}

playGame();