function getComputerChoice(){
return choices[Math.floor(Math.random()*choices.length)]
}

//let choices =["rock", "paper", "scissors"];

/*
 We have a function to get the computer to make a random choice.
"[Math.floor(Math.random()*choices.length)]" is a formula to generate a random selection from your array.
*/



  
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

        /*In the playRound function we have switch statement. Depending on the outcome of a round, there is different message displayed and the score of
        either the player or computer will go up by one point (playerScore++) unless it's a tie. */




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
/*The game function:
For now I've commented out the "for(let i = 0; i < 5; i++)" so it doesn't play 5 rounds.

But the actual code block being executed within that 'for loop' is:
The result of the "getComputerChoice" function becomes equal to "computerSelection" which is used in the function "playRound".

We also are making a prompt() for the player, the value input by the user is equal to "playerSelection" for the "playGround" function.

Lastly we have an alert with the "playRound" function(that function is returning the result between the playerSelection and computerSelection.) with the playerSelection being converted to lower case (in case someone types it in capitalized). 
  
  
  */

}

game();


