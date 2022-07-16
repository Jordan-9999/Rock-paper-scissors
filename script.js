function getComputerChoice(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];
//console.log(getComputerChoice());




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
        break;



    case playerSelection == "paper" && computerSelection == "rock":
        result = "Paper beats rock! You win!"
        break;
    case playerSelection == "paper" && computerSelection == "scissors":
        result = "Scissors beats paper! You lose!"
        break;
    case playerSelection == "paper" && computerSelection == "paper":
        result = "It's a draw! Try again!"
        break;




    case playerSelection == "scissors" && computerSelection == "paper":
        result = "Scissors beats paper! You win!"
        break;
    case playerSelection == "scissors" && computerSelection == "rock":
        result = "Rock beats scissors! You lose!"
        break;
    case playerSelection == "scissors" && computerSelection == "scissors":
        result = "It's a draw! Try again!"
}



return result

}

    let result = "";
    const computerSelection = getComputerChoice();

//ok this seems to work! ill will do more work on it later...
//console.log(playRound(playerSelection.toLowerCase(), computerSelection));

for(let i = 0; i < 5; i++){
    let playerSelection = prompt();
    const computerSelection = getComputerChoice();
    
    alert(result);
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
}
