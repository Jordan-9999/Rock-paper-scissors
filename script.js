function getComputerChoice(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];
//console.log(getComputerChoice());




function playRound(playerSelection, computerSelection){

   

switch(true){
    case playerSelection == "rock" && computerSelection == "scissors":
        result = "Rock beats scissors! You win!",
        playerScore++;
        break;
    case playerSelection == "rock" && computerSelection == "paper":
        result = "Paper beats rock! You lose!",
        computerScore++;
        break;
    case playerSelection == "rock" && computerSelection == "rock":
        result = "It's a draw! Try again!"
        break;



    case playerSelection == "paper" && computerSelection == "rock":
        result = "Paper beats rock! You win!",
        playerScore++;
        break;
    case playerSelection == "paper" && computerSelection == "scissors":
        result = "Scissors beats paper! You lose!",
        computerScore++;
        break;
    case playerSelection == "paper" && computerSelection == "paper":
        result = "It's a draw! Try again!"
        break;




    case playerSelection == "scissors" && computerSelection == "paper":
        result = "Scissors beats paper! You win!"
        playerScore++;
        break;
    case playerSelection == "scissors" && computerSelection == "rock":
        result = "Rock beats scissors! You lose!",
        computerScore++;
        break;
    case playerSelection == "scissors" && computerSelection == "scissors":
        result = "It's a draw! Try again!"
}



return result

}


    let playerScore = 0;
    let computerScore = 0;
    


    let result = "";
    let endOfGameMessage = "";
    //let finalScore = ""

    const computerSelection = getComputerChoice();

//ok this seems to work! ill will do more work on it later...
//console.log(playRound(playerSelection.toLowerCase(), computerSelection));


function game(){


for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    let playerSelection = prompt();
    alert(playRound(playerSelection.toLowerCase(), computerSelection));


    
    //console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    //console.log(playerScore, computerScore);
}

switch(true){
    case playerScore > computerScore:
        endOfGameMessage = ["You've won! Final score: Player", "[", playerScore, "]", "Computer", "[", computerScore ,"]"]; 
        break;
    case playerScore < computerScore:
        endOfGameMessage = ["You've lost! Final score: Player", "[", playerScore, "]", "Computer", "[", computerScore ,"]"];
        break;
    case playerScore == computerScore:
        endOfGameMessage = ["It's a tie! Final score: Player", "[" , playerScore,"]", "Computer", "[", computerScore,"]"]; 
}

alert(endOfGameMessage.join(" "));

}


game();


