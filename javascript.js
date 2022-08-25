
function getComputerSelection() {
    const choiceOptions = ['Rock','Paper','Scissors'];
    const rng = Math.floor(Math.random() * 3);

    return computerSelection[rng];
}

