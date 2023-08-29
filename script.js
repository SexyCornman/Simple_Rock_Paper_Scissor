

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
    if ((playerChoice === "Rock" && computerChoice === "Paper") || 
    (playerChoice === "Paper" && computerChoice === "Scissor") ||
    (playerChoice === "Scissor" && computerChoice === "Rock")){
        alert("You Suck " + computerChoice + " beat " + playerChoice) ;
        // write a function that record a score for each round.
        computerScore++ ;
   
    } else if ((playerChoice === "Rock" && computerChoice === "Rock") ||
    (playerChoice === "Paper" && computerChoice === "Paper") ||
    (playerChoice === "Scissor" && computerChoice === "Scissor")) {
        alert("It's a tie you both suck!");
    
    } else if ((playerChoice === "Rock" && computerChoice === "Scissor") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissor" && computerChoice === "Paper")) {
        alert ("You win! fucking hell");
        playerScore++ ;
    }  
    checkScore();
}


// write function that construct a game of rock paper scissor where you play 5 round and keep score and report the winner at the end.

function checkScore() {
    
    if (computerScore !== 5 && playerScore !== 5) {
        alert ("Now Fight");
        // i'm trying to make a scoreboard here still don't know how
        // humanScore = playerScore;
        // botScore = computerScore;
      // write function to end a game when the winner is declared.      
    } else if (computerScore === 5) {
        alert ("The mankind is DEAD you lose!");
        alert ("Prepare for another round!");
        computerScore = 0;
        playerScore = 0;
    
        
    } else if (playerScore === 5 ) {
        alert ("You win! mankind survivied!");
        alert ("Now let's rewind and try that again!");
        computerScore =0;
        playerScore = 0;
    }
   

    alert("The Computer score " + computerScore + " Your Score " + playerScore );
   
}
// i dont know how these work just yet.
// let humanScore = document.getElementById('humanscore');
// let botScore = document.getElementById('botscore')





