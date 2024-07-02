function getComputerChoice(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];



function game(){

     
     let playerSelection = "";
     let computerSelection = "";

     let playerScore = 0;
     let computerScore = 0;
     
     let playRoundResult = "";
     let scoreBoard = ["Player: ", playerScore, "Computer: ", computerScore];
     const newScoreBoard = document.createElement("div");
     document.body.appendChild(newScoreBoard);
     newScoreBoard.innerText = scoreBoard.join(" ");
     
     


const rockButton = document.querySelector("#rockBtn");
          rockButton.addEventListener("click", function() {
               playerSelection = "rock";  });
          rockButton.addEventListener("click", function() {
               computerSelection = getComputerChoice();  });   
          rockButton.addEventListener("click", function(){
               alert(playRound(playerSelection, computerSelection));});
          rockButton.addEventListener("click", function(){
                 scoreBoard = ["Player: ", playerScore, "Computer: ", computerScore];
                 newScoreBoard.innerText = scoreBoard.join(" ");})
          rockButton.addEventListener("click", function(){
                    checkTheScore(playerScore, computerScore)});  
         
                      
    const paperButton = document.querySelector("#paperBtn");
          paperButton.addEventListener("click", function() {
               playerSelection = "paper";  });
          paperButton.addEventListener("click", function() {
               computerSelection = getComputerChoice();});
          paperButton.addEventListener("click", function() {
               alert(playRound(playerSelection, computerSelection));});
          paperButton.addEventListener("click", function(){
                    scoreBoard = ["Player: ", playerScore, "Computer: ", computerScore];
                    newScoreBoard.innerText = scoreBoard.join(" ");})
          paperButton.addEventListener("click", function(){
                         checkTheScore(playerScore, computerScore)});           
    
    const scissorsButton = document.querySelector("#scissorsBtn");
          scissorsButton.addEventListener("click", function() {
               playerSelection = "scissors";  });
          scissorsButton.addEventListener("click", function(){
               computerSelection = getComputerChoice();});
          scissorsButton.addEventListener("click", function(){
               alert(playRound(playerSelection, computerSelection));}); 
          scissorsButton.addEventListener("click", function(){
                    scoreBoard = ["Player: ", playerScore, "Computer: ", computerScore];
                    newScoreBoard.innerText = scoreBoard.join(" ");})
          scissorsButton.addEventListener("click", function(){
                         checkTheScore(playerScore, computerScore)});  
               
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
                   playRoundResult = "It's a draw!";
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
                   playRoundResult = "It's a draw!";
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
                   playRoundResult = "It's a draw!";
                   }
        
        return playRoundResult
        }

     
}



game();

function checkTheScore(playerScore, computerScore){
     switch (true){
          case playerScore === 5:
               alert("Congratulations! Player wins!")
               break;
          case computerScore === 5:    
               alert("You lose! Computer wins!")
               break;
     }

     return;
   };
   