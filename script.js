function computerPlay(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];
console.log(computerPlay());

function playRound(playerSelection, computerSelection){
switch(true){
    case playerSelection == "rock" && computerSelection == "scissors":
        result = "Rock beats scissors! You win!"
        break;
    case playerSelection == "rock" && computerSelection == "paper":
        result = "Paper beats rock! You lose!"
        break;
    case playerSelection == "rock" && computerSelection == "rock":
        result = "It's a draw! Try again!"
        
}



return result
}
let result;
let playerSelection = "rock";
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));