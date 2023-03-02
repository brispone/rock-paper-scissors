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

    // convert player's choice to all lower-case so that the input will be case-insensitive
    playerChoice = playerChoice.toLowerCase();

    // make sure player choice is a valid game option - if it is, return the value, otherwise alert the user and prompt them again

    if(validateChoice(playerChoice)) {
        return playerChoice;
    } else {
        alert("That is not an option! Please choose rock, paper, or scissors: ");
        return getPlayerChoice();
    }
}

function validateChoice(choice){
    //check to make sure the player input is a legal game option
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    } else return false;
}

function playRound(playerSelection, computerSelection) {
    // compare the player and computer choices and log them to the console
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
    // log result of the game to console and return "win", "lose", or "tie" depending on the player's result
    // if both choices are the same, it is a tie
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    }
    // if player chose rock > if computer chose scissors, player wins, else they lose
    if (playerSelection === "rock") {
        if(computerSelection === "scissors") {
            console.log("You win!");
            return "win";
        } else  {
            console.log("You lose!");
            return "lose";
        }
    }
    // if player chose paper > if computer chose rock, player wins, else they lose
    if (playerSelection === "paper") {
        if(computerSelection === "rock") {
            console.log("You win!");
            return "win";
        } else {
            console.log("You lose!");
            return "lose";
        }
    }
    // if player chose scissors > if computer chose paper, player wins, else they lose
    if (playerSelection === "scissors") {
        if(computerSelection === "paper") {
            console.log("You win!");
            return "win";
        } else {
            console.log("You lose!");
            return "lose";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    // play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1} (current score - You: ${playerScore} | Computer: ${computerScore})`);
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if (result === "win") {
            playerScore ++;
        } else if (result === "lose") {
            computerScore++;
        }

    }

    // print results
    console.log(`Final score - You: ${playerScore} | Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("The computer wins the game!");
    }

}