// initialize variables for running score
let playerScore = 0;
let compScore = 0;

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


/* This function is no longer necessary after the move away from text input

function validateChoice(choice){
    //check to make sure the player input is a legal game option
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return true;
    } else return false;
}
*/

// This function displays the result of the game and updates the scores accordingly
function displayResults(result) {
    const resultsDiv = document.querySelector("#game-results");

    switch(result) {
        case "tie":
            resultsDiv.textContent = "The round is a tie!";
            break;
        case "win":
            resultsDiv.textContent = "You win the round!";
            playerScore++; // add point to player's total score
            updateScore();
            break;
        case "lose":
            resultsDiv.textContent = "You lose the round!"
            compScore++; // add point to computer's total score
            updateScore();
            break;
        default:
            "Oops! Something went wrong.";
    }

}

function resetGame() {
    document.querySelector("#gameover-div").replaceChildren();
    playerScore = 0;
    compScore = 0;
    updateScore();
}

function endGame(playerWin) {
    const gameOverMessage = document.querySelector("#gameover-div");
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play again?";
    playAgainButton.addEventListener("click", () => resetGame());

    if(playerWin) {
        gameOverMessage.textContent = "You are victorious!";
    } else gameOverMessage.textContent = "You have been defeated!";

    gameOverMessage.appendChild(playAgainButton);
}

// This function updates the running score and then checks for a winner
function updateScore() {
    const playerScoreSpan = document.querySelector("#player-score");
    const compScoreSpan = document.querySelector("#computer-score");

    playerScoreSpan.textContent = playerScore;
    compScoreSpan.textContent = compScore;

    if(playerScore >= 5) {
        endGame(true);
    }
    if(compScore >= 5) {
        endGame(false);
    }
}


function playRound(playerSelection, computerSelection) {


    // compare the player and computer choices and log them to the console
    console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
    // log result of the game to console and return "win", "lose", or "tie" depending on the player's result
    // if both choices are the same, it is a tie
    if (playerSelection === computerSelection) {
        displayResults("tie");
        return "tie";
    }
    // if player chose rock > if computer chose scissors, player wins, else they lose
    if (playerSelection === "rock") {
        if(computerSelection === "scissors") {
            displayResults("win");
            return "win";
        } else  {
            displayResults("lose");
            return "lose";
        }
    }
    // if player chose paper > if computer chose rock, player wins, else they lose
    if (playerSelection === "paper") {
        if(computerSelection === "rock") {
            displayResults("win");
            return "win";
        } else {
            displayResults("lose");
            return "lose";
        }
    }
    // if player chose scissors > if computer chose paper, player wins, else they lose
    if (playerSelection === "scissors") {
        if(computerSelection === "paper") {
            displayResults("win");
            return "win";
        } else {
            displayResults("lose");
            return "lose";
        }
    }
}

const playButtons = document.querySelectorAll("button");

playButtons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        playRound(e.target.id, getComputerChoice());
    });
});


/* No longer necessary after the move away from console based gameplay

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    console.log("Five rounds! Whoever has the higher score at the end wins!");

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

    // check for tie score and keep playing until someone wins
    while(playerScore === computerScore) {
        console.log(`SUDDEN DEATH! (current score - You: ${playerScore} | Computer: ${computerScore})`);
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
*/