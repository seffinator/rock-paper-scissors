let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let computerActions = ["rock", "paper", "scissors"];
    return computerActions[Math.floor(Math.random() * computerActions.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        alert("You win this round!");
        playerPoints++;
    } 
    else if (playerSelection === computerSelection) {
        alert(" You have drawn this round.");
        playerPoints++;
        computerPoints++;
    } else {
        alert("You lose this round...");
        computerPoints++
    }
    if (playerPoints == 5) {
        gameOver();
    }
    else if (computerPoints == 5) {
        gameOver();
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerPoints == 5 || computerPoints == 5) 
            return;
        else  
            playRound(button.value);  
    });
});

/*
const playerResult = document.querySelector('#player');
playerResult.innerText = `${playerPoints}`;
return playerResult;

const computerResult = document.querySelector('#computer');
computerResult.innerText = `${computerPoints}`;
return computerResult; not working as expected*/

function gameOver() {
    if (playerPoints == 5) 
        alert("You've won the game!!!\nPlease press refresh to play again.");
    else if (computerPoints == 5) 
        alert("You've lost the game...\nPlease press refresh to play again.");
    else 
        alert("Stalemate...\nPlease press refresh to play again.")
}
