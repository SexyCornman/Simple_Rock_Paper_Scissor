const gameChoice = ["Knight","Mage","Rogue"]
let computerChoice
function getComputerChoice() {
    computerChoice = gameChoice[(Math.floor(Math.random() * gameChoice.length))]; 
    
 
    console.log("The computer choose " + computerChoice);
  
}


function changeBarkeeperImg() {
      if (computerChoice === "Knight"){
        barkeeperImg.src = "img/fullknight.jpg";
        barkeeperChoiceTxt.innerText = computerChoice;
    }
    else if (computerChoice === "Mage"){
        barkeeperImg.src = "img/fullmage.jpg";
        barkeeperChoiceTxt.innerText = computerChoice;
    } 
    else if (computerChoice === "Rogue"){
        barkeeperImg.src = "img/fullrogue.jpg";
        barkeeperChoiceTxt.innerText = computerChoice;
    }
    

}

function changeBarkeeperTxt() {
    if (computerChoice === "Knight"){     
        barkeeperChoiceTxt.innerText = computerChoice;
    }
    else if (computerChoice === "Mage"){       
        barkeeperChoiceTxt.innerText = computerChoice;
    } 
    else if (computerChoice === "Rogue"){
        
        barkeeperChoiceTxt.innerText = computerChoice;
    }

}




let playerChoice
function playerChoiceKnight() {
    playerChoice = "Knight";
    playerImg.src = "img/fullknight.jpg";  
    playerChoiceTxt.innerText = playerChoice;  
    gameStart();
}

function playerChoiceMage() {
    playerChoice = "Mage";
    playerImg.src ="img/fullmage.jpg";
    playerChoiceTxt.innerText = playerChoice;
    gameStart();
}

function playerChoiceRogue() {
    playerChoice = "Rogue";
    playerImg.src ="img/fullrogue.jpg"
    playerChoiceTxt.innerText = playerChoice;
    gameStart();
}

let computerScore = 0;
let playerScore = 0;


function gameStart() {
    getComputerChoice()
    changeBarkeeperImg()
    changeBarkeeperTxt()
    

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
    changeGameQuotes()
    checkScore();
    
}

function changeGameQuotes(){

    //winning
    if(playerChoice === "Knight" && computerChoice === "Rogue"){
        gameQuotes.innerText ="With valor and steel, honor prevails over shadows";
    }
    else if (playerChoice === "Rogue" && computerChoice === "Mage"){
        gameQuotes.innerText ="Swift and silent, the Assassin dances beyond the Mage's reach.";
    }
    else if (playerChoice === "Mage" && computerChoice === "Knight"){
        gameQuotes.innerText ="Arcane mastery triumphs over the mightiest of armor.";
    }

    //losing
    else if (playerChoice === "Knight" && computerChoice === "Mage") {
        gameQuotes.innerText ="Arcane mastery triumphs over the mightiest of armor.";
    }
    else if (playerChoice === "Mage" && computerChoice === "Rogue") {
        gameQuotes.innerText ="Swift and silent, the Assassin dances beyond the Mage's reach.";
    }
    else if (playerChoice === "Rogue" && computerChoice === "Knight") {
        gameQuotes.innerText ="With valor and steel, honor prevails over shadows";
    }
    //tie
    else if(playerChoice === "Knight" && computerChoice === "Knight"){
        gameQuotes.innerText ="Steel meets steel in a symphony of unyielding resolve.";
    }
    else if(playerChoice === "Mage" && computerChoice === "Mage"){
        gameQuotes.innerText ="Arcane forces collide, creating a mesmerizing equilibrium.";
    }
    else if(playerChoice === "Rogue" && computerChoice === "Rogue"){
        gameQuotes.innerText ="In shadows' dance, neither blade finds a telling strike.";
    }
}


function checkScore() {
    
    if (computerScore !== 5 && playerScore !== 5) {
        console.log ("Now Fight");
        
    } else if (computerScore === 5) {
        console.log ("The mankind is DEAD you lose!");
        console.log ("Prepare for another round!");
        gameQuotes.innerText ="The defeat stings, but there's always another brawl on the horizon.";
        computerScore = 0;
        playerScore = 0;
    
        
    } else if (playerScore === 5 ) {
        console.log ("You win! mankind survivied!");
        console.log ("Now let's rewind and try that again!");
        gameQuotes.innerText = "With a thunderous cheer, the tavern hails you as the victor! Or are you up for another round?"
        computerScore =0;
        playerScore = 0;
    }

    playerScorePara.innerText = "Player Score: "+ playerScore;
    computerScorePara.innerText = "Barkeep Score: "+computerScore;
    console.log("The Computer score " + computerScore + " Your Score " + playerScore );
   
}



// these are ui Element

// const gameQuotes = document.getElementById('game-quotes');
// const playerImg = document.getElementById('player-img');
// const barkeeperImg = document.getElementById('barkeeper-img');
// const playerScorePara = document.getElementById('player-score');
// const computerScorePara= document.getElementById('barkeep-score');

