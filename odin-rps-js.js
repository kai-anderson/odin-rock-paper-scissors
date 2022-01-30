var min = 1
var max = 3
var computerSelection
var roundCount = 5
var playerSelection
var computerWins = 0
var playerWins = 0
var playerName
var another

playerName = prompt("What is your name?: ");
play(true, false);


function game() {
   // playerName = prompt("What is your name?: ");

        playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");
        playerChoice(playerSelection);
        computerPlay(min, max);
        playRound(playerSelection, computerSelection);

        playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");
        playerChoice(playerSelection);
        computerPlay(min, max);
        playRound(playerSelection, computerSelection);

        playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");
        playerChoice(playerSelection);
        computerPlay(min, max);
        playRound(playerSelection, computerSelection);

        playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");
        playerChoice(playerSelection);
        computerPlay(min, max);
        playRound(playerSelection, computerSelection);

        playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");
        playerChoice(playerSelection);
        computerPlay(min, max);
        playRound(playerSelection, computerSelection);

    console.log("The computer won " + computerWins + " times!");
    console.log("You won " + playerWins + " times!");

    if (playerWins > computerWins){
        console.log("You win the game!")
        play(flase, true);
    
    }else if (computerWins > playerWins){
        console.log("The computer wins the game!")
        play(false, true);
    
    }else{
        console.log("It's a draw!");
        play(false, true);
    }
}

function playRound (playerChoice, computerPlay) {
   // computerPlay(min, max);
    //playerChoice();
    
    if (playerChoice.toLowerCase() === "rock" && computerPlay === "paper"){
        console.log(playerName + " wins!");
        playerWins = playerWins + 1;
    
    }else if (playerChoice.toLowerCase() === "paper" && computerPlay === "rock"){
        console.log(playerName + " wins!");
        playerWins = playerWins + 1;
    
    }else if (playerChoice.toLowerCase() === "scissors" && computerPlay === "paper"){
        console.log(playerName + " wins!");
        playerWins = playerWins + 1;
    
    }else if (playerChoice.toLowerCase() === computerPlay){
        console.log("draw! try again");

    }else{
        console.log ("Computer wins!");
        computerWins = computerWins + 1;
    }
}



function playerChoice(playerSelection){

   // playerSelection = prompt("Type Rock, Paper, or Scissors to choose move.");

    if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
        return playerSelection;
    
    }else{
    console.log("Invalid Selection: Please select Rock, Paper or Scissors")
    game();
    }
}


function computerPlay(min, max){
    var computerChoice = Math.floor(Math.random() * (max - min + 1) + min);
    if (computerChoice === 1){
        computerSelection = "rock";
        return computerSelection;
    
    }else if (computerChoice ==2){
        computerSelection = "paper";
        return computerSelection;
    
    }else if (computerChoice === 3){
        computerSelection = "scissors";
        return computerSelection;
    
    }
}


function play(start, end){

    if (start === true){
        game();
    }

    if (end === true){
    another = prompt("Would you like to play again?: Yes or No.");
    if (another.toLowerCase() === "yes"){
        game();
    
    }else{
        console.log("Have a good day!");
    }
}
}