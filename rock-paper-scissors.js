let playerPoints = 0;
let computerPoints = 0;

scoreBoard(playerPoints, computerPoints);

function computerPlay() {
    let computerActions = ["rock", "paper", "scissors"];
    return computerActions[Math.floor(Math.random() * computerActions.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        playerPoints++;
        scoreBoard();
        alert("You win this round!");
    } 
    else if (playerSelection === computerSelection) {
        playerPoints++;
        computerPoints++;
        scoreBoard();
        alert(" You have drawn this round.");
    } else {
        computerPoints++
        scoreBoard();
        alert("You lose this round...");  
    }
    if (playerPoints == 5 || computerPoints == 5) {
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

function scoreBoard() {
    const playerResult = document.querySelector('#player');
    playerResult.textContent = playerPoints;

    const computerResult = document.querySelector('#computer');
    computerResult.textContent = computerPoints;
}

const computerWon = document.querySelector('#computer');
const playerWon = document.querySelector('#player');

function gameOver() {
    if (playerPoints == 5) {
        alert("You've won the game!!!\nPlease press refresh to play again.");
        playerWon.style.backgroundColor = "#7efa78";
    }    
    else if (computerPoints == 5) {
        computerWon.style.backgroundColor = '#ff6969';
        alert("You've lost the game...\nPlease press refresh to play again.");
    }
    else {
        playerWon.style.backgroundColor = '#868786';
        computerWon.style.backgroundColor = "#868786";
        alert("Stalemate...\nPlease press refresh to play again.");
    }
}
