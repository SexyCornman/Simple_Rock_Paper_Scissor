


const gameChoice = ["Knight","Mage","Rogue"]
let computerChoice
function getComputerChoice() {
    computerChoice = gameChoice[(Math.floor(Math.random() * gameChoice.length))];   
    alert("The computer choose " + computerChoice);
}





let playerChoice
function playerChoiceKnight() {
    playerChoice = "Knight";
    gameStart();
}

function playerChoiceMage() {
    playerChoice = "Mage";
    gameStart();
}

function playerChoiceRogue() {
    playerChoice = "Rogue";
    gameStart();
}

let computerScore = 0;
let playerScore = 0;


function gameStart() {
    getComputerChoice()
    if ((playerChoice === "Knight" && computerChoice === "Mage") || 
    (playerChoice === "Mage" && computerChoice === "Rogue") ||
    (playerChoice === "Rogue" && computerChoice === "Knight")){
        alert("You Suck " + computerChoice + " beat " + playerChoice) ;
       
        computerScore++ ;
   
    } else if ((playerChoice === "Knight" && computerChoice === "Knight") ||
    (playerChoice === "Mage" && computerChoice === "Mage") ||
    (playerChoice === "Rogue" && computerChoice === "Rogue")) {
        alert("It's a tie you both suck!");
    
    } else if ((playerChoice === "Knight" && computerChoice === "Rogue") ||
    (playerChoice === "Mage" && computerChoice === "Knight") ||
    (playerChoice === "Rogue" && computerChoice === "Mage")) {
        alert ("You win! fucking hell");
        playerScore++ ;
    }  
    checkScore();
}




function checkScore() {
    
    if (computerScore !== 5 && playerScore !== 5) {
        alert ("Now Fight");
        
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





