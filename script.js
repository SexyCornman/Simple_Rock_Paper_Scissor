

// Write function to get computer random input ranging from rock, paper, scissor.
let gameChoice = ["Rock","Paper","Scissor"]
let computerChoice
function getComputerChoice() {
    computerChoice = gameChoice[(Math.floor(Math.random() * gameChoice.length))];   
    console.log(computerChoice);
}





// write function get user input ranging from rock, paper, scissor.
// write function that "play" a single round of rock paper scissor and declare the winner
function playerChoiceRock() {
    getComputerChoice()
    if (computerChoice === "Paper") {
        alert("You Suck paper beat Rock!")
    } else if (computerChoice === "Rock") {
        alert("It's a tie you both suck!")
    } else if (computerChoice === "Scissor") {
        alert ("You win! fucking hell")
    }
   

}
function playerChoicePaper() {
    getComputerChoice()
    if (computerChoice === "Paper") {
        alert("It's a tie you both suck!")
    } else if (computerChoice === "Rock") {
        alert("You win! fucking hell")
    } else if (computerChoice === "Scissor") {
        alert ("You Suck scissor beat paper!")
    }
    
}

function playerChoiceScissor() {
    getComputerChoice()
    if (computerChoice === "Paper") {
        alert("You win! fucking hel!")
    } else if (computerChoice === "Rock") {
        alert("You Suck rock beat scissor! ")
    } else if (computerChoice === "Scissor") {
        alert ("You Suck scissor beat paper!")
    }
    
}
// write function that construct a game of rock paper scissor where you play 5 round and keep score and report the winner at the end
// write function to restart a round
