let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let computerActions = ["rock", "paper", "scissors"];
    return computerActions[Math.floor(Math.random() * computerActions.length)];
    console.log(computerActions);
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
    } else {
        alert("You lose this round...");
        computerPoints++
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PSR 2</title>
    <script src="rock-paper-scissors.js" defer></script>
</head>
<body>
    <div id="container">
        <button id="button-rock" value="rock">Rock</button>
        <button id="button-paper" value="paper">Paper</button>
        <button id="button-scissors" value="scissors">Scissors</button>
    </div>
</body>
</html>
