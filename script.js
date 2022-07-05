function computerPlay(){
return choices[Math.floor(Math.random()*choices.length)]
}

let choices =["rock", "paper", "scissors"];
console.log(computerPlay());