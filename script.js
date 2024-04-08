function getComputerChoice(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];
    
let playerScore = 0;
let computerScore = 0;

let playRoundResult = "";
let endOfGameMessage = "";



function game(){

        function playRound(playerSelection, computerSelection){
         switch(true){
              case playerSelection == "rock" && computerSelection == "scissors":
                   playRoundResult = "Rock beats scissors! You win!",
                   playerScore++;
                   break;
              case playerSelection == "rock" && computerSelection == "paper":
                   playRoundResult = "Paper beats rock! You lose!",
                   computerScore++;
                    break;
              case playerSelection == "rock" && computerSelection == "rock":
                   playRoundResult = "It's a draw!"
                   break;
        

              case playerSelection == "paper" && computerSelection == "rock":
                   playRoundResult = "Paper beats rock! You win!",
                   playerScore++;
                   break;
              case playerSelection == "paper" && computerSelection == "scissors":
                   playRoundResult = "Scissors beats paper! You lose!",
                   computerScore++;
                   break;
              case playerSelection == "paper" && computerSelection == "paper":
                   playRoundResult = "It's a draw!"
                   break;
        
        
              case playerSelection == "scissors" && computerSelection == "paper":
                   playRoundResult = "Scissors beats paper! You win!"
                   playerScore++;
                   break;
              case playerSelection == "scissors" && computerSelection == "rock":
                   playRoundResult = "Rock beats scissors! You lose!",
                   computerScore++;
                   break;
              case playerSelection == "scissors" && computerSelection == "scissors":
                   playRoundResult = "It's a draw!"
                   }
        
        return playRoundResult
        }

        

        for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    let playerSelection = prompt();
    alert(playRound(playerSelection.toLowerCase(), computerSelection)); 
    if(playRoundResult == "It's a draw!"){
        i--
    }
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


