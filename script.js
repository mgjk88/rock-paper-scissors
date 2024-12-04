let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const number = Math.round((Math.random() * 10)) % 3;
    return  number === 0 
    ? "paper" 
    : number === 1
        ? "scissors"
        : "rock";
}

function getHumanChoice(){
    const input = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
    if(input === "rock" || input === "scissors" || input === "paper"){
        return input;
    }
    else {
        console.log("Invalid Answer!")
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    function choiceTable(choice){
        switch(choice){
            case "rock": return 1;
            case "scissors": return 0;
            case "paper": return -1;
        }
    }

    const outcome = choiceTable(humanChoice) - choiceTable(computerChoice);
    if((outcome > 0 && outcome !== 2)||  outcome === -2){
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
    }
    else if((outcome < 0 && outcome !== -2) || outcome === 2){
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
    }
    else{
        console.log(`Draw!`)
    }
}