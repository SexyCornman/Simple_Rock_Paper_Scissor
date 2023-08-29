

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

let computerScore = 0;
let playerScore = 0;

// write function that "Start" a single round of rock paper scissor and declare the winner
function gameStart() {
    getComputerChoice()
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        alert("You Suck paper beat Rock!");
        computerScore++ ;
    } else if (playerChoice === "Rock" && computerChoice === "Rock") {
        alert("It's a tie you both suck!");
    } else if (playerChoice === "Rock" && computerChoice === "Scissor") {
        alert ("You win! fucking hell");
        playerScore++ ;
    } 
    else if (playerChoice === "Paper" && computerChoice === "Paper") {
        alert("It's a tie you both suck!")
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        alert("You win! fucking hell");
        playerScore++ ;
    } else if (playerChoice === "Paper" && computerChoice === "Scissor") {
        alert ("You Suck scissor beat paper!")
        computerScore++ ;
    }
    else if (playerChoice === "Scissor" && computerChoice === "Paper") {
        alert("You win! fucking hell!");
        playerScore++ ;
    } else if (playerChoice === "Scissor" && computerChoice === "Rock") {
        alert("You Suck rock beat scissor! ");
        computerScore++ ;
    } else if (playerChoice === "Scissor" && computerChoice === "Scissor") {
        alert ("It's a tie you both suck!!");
    }
    checkScore();
}


// write function that construct a game of rock paper scissor where you play 5 round and keep score and report the winner at the end.

function checkScore() {
    
    if (computerScore !== 5 && playerScore !== 5) {
        alert ("Now Fight");
        humanScore = playerScore;
        botScore = computerScore;
            
    } else if (computerScore === 5) {
        alert ("The mankind is DEAD you lose!");
        alert ("Prepare for the Second round!");
        computerScore = 0;
        playerScore = 0;
    
        
    } else if (playerScore === 5 ) {
        alert ("You win! mankind survivied!");
        alert ("Prepare for the Second round!");
        computerScore =0;
        playerScore = 0;
    }
   

    alert("The Computer score " + computerScore + " Your Score " + playerScore );
   
}
let humanScore = document.getElementById('humanscore');
let botScore = document.getElementById('botscore')
// write a function that record a score for each round.


// write function to end a game when the winner is declared.

