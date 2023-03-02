function getComputerChoice() {
// get a random number from 0-2
let randomChoice = Math.floor(Math.random() * 3);

// 0 = rock
// 1 = paper
// 2 = scissors

// return the computer choice
if (randomChoice === 0) {
    return "rock";
} else if (randomChoice === 1) {
    return "paper";
} else {
    return "scissors";
}
}

function getPlayerChoice() {
    // prompt the player to choose and store it in a variable
    let playerChoice = prompt("Choose rock, paper, or scissors: ");

    // return the player's choice in all lower-case so that the input will be case-insensitive
    return playerChoice.toLowerCase();
}


function playRound(playerSelection, computerSelection) {

}