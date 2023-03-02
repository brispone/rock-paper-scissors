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
    // compare the player and computer choices - build string saying who chose what
    let choices = `You chose ${playerSelection}. The computer chose ${computerSelection}. `;
    // append the game result to the choices string and return the message
    // if they are they same return tie game message
    if (playerSelection === computerSelection) {
        return choices + "It's a tie!";
    }
    // if player chose rock > if computer chose scissors, player wins, else they lose
    if (playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return choices + "You win!";
        } else return choices + "You lose!";
    }
    // if player chose paper > if computer chose rock, player wins, else they lose
    if (playerSelection === "paper") {
        if(computerSelection === "rock") {
            return choices + "You win!";
        } else return choices + "You lose!";
    }
    // if player chose scissors > if computer chose paper, player wins, else they lose
    if (playerSelection === "scissors") {
        if(computerSelection === "paper") {
            return choices + "You win!";
        } else return choices + "You lose!";
    }
}