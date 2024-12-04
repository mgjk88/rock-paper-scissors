function getComputerChoice(){
    const number = Math.round(Math.random() * 3);
    return  number === 1 
    ? "Rock" 
    : number === 2
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