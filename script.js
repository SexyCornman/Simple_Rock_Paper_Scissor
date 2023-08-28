

// Write function to get computer random input ranging from rock, paper, scissor.
let gameChoice = ["Rock","Paper","Scissor"]
let computerChoice
function getComputerChoice() {
    computerChoice = gameChoice[(Math.floor(Math.random() * gameChoice.length))];   
    alert("The computer choose " + computerChoice);
}





// write function get user input ranging from rock, paper, scissor.
let playerChoice
function playerChoiceRock() {
    playerChoice = "Rock";
    gameStart();
}

function playerChoicePaper() {
    playerChoice = "Paper";
    gameStart();
}

function playerChoiceScissor() {
    playerChoice = "Scissor";
    gameStart();
}

// write function that "Start" a single round of rock paper scissor and declare the winner
function gameStart() {
    getComputerChoice()
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        alert("You Suck paper beat Rock!")
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        alert("It's a tie you both suck!")
    } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        alert ("You win! fucking hell")
    } 
    else if (playerChoice === "Paper" && computerChoice === "Paper") {
        alert("It's a tie you both suck!")
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        alert("You win! fucking hell")
    } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
        alert ("You Suck scissor beat paper!")
    }
    else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        alert("You win! fucking hell!")
    } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
        alert("You Suck rock beat scissor! ")
    } else if (playerChoice === "Scissor" && computerChoice === "Scissor") {
        alert ("It's a tie you both suck!!")
    }
}


// write function that construct a game of rock paper scissor where you play 5 round and keep score and report the winner at the end.
// write a function that record a score for each round.

// write function to end a game when the winner is declared.

