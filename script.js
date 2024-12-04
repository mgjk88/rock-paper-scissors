let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const number = Math.round((Math.random() * 10)) % 3;
    return  number === 0 
    ? "Rock" 
    : number === 1
        ? "Paper"
        : "Scissors";
}

function getHumanChoice(){
    const input = prompt("Enter Rock, Paper or Scissors: ");
    if(input === "Rock" || input === "Paper" || input === "Scissors"){
        return input;
    }
    else {
        console.log("Invalid Answer!")
        return getHumanChoice();
    }
}