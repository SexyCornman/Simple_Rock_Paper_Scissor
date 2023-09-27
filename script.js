const gameChoice = ["Knight","Mage","Rogue"]
let computerChoice
function getComputerChoice() {
    computerChoice = gameChoice[(Math.floor(Math.random() * gameChoice.length))]; 
    
 
    console.log("The computer choose " + computerChoice);
  
    
}

  // if (computerChoice === "Knight"){
    //     barkeeperImg.src = "./img/fullknight.jpg";
    // }
    // else if (computerChoice = "Mage"){
    //     barkeeperImg.src === "./img/fullmage.jpg";
    // } 
    // else if (computerChoice === "Rogue"){
    //     barkeeperImg.src = "./img/fullrogue.jpg";
    // }




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
        console.log("You Suck " + computerChoice + " beat " + playerChoice) ;
       
        computerScore++ ;
   
    } else if ((playerChoice === "Knight" && computerChoice === "Knight") ||
    (playerChoice === "Mage" && computerChoice === "Mage") ||
    (playerChoice === "Rogue" && computerChoice === "Rogue")) {
        console.log("It's a tie you both suck!");
    
    } else if ((playerChoice === "Knight" && computerChoice === "Rogue") ||
    (playerChoice === "Mage" && computerChoice === "Knight") ||
    (playerChoice === "Rogue" && computerChoice === "Mage")) {
        console.log ("You win! fucking hell");
        playerScore++ ;
    }  
    checkScore();
}




function checkScore() {
    
    if (computerScore !== 5 && playerScore !== 5) {
        console.log ("Now Fight");
        
    } else if (computerScore === 5) {
        console.log ("The mankind is DEAD you lose!");
        console.log ("Prepare for another round!");
        computerScore = 0;
        playerScore = 0;
    
        
    } else if (playerScore === 5 ) {
        console.log ("You win! mankind survivied!");
        console.log ("Now let's rewind and try that again!");
        computerScore =0;
        playerScore = 0;
    }
   

    console.log("The Computer score " + computerScore + " Your Score " + playerScore );
   
}



// these are ui Element

// const gameQuotes = document.getElementById('game-quotes');
// const playerImg = document.getElementById('player-img');
// const barkeeperImg = document.getElementById('barkeeper-img');
// const playerScorePara = document.getElementById('player-score');
// const computerScorePara= document.getElementById('barkeep-score');



