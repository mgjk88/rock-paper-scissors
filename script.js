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

function getHumanChoice(event){
    switch(event.target){
        case rockButton: return "rock";
        case paperButton: return "paper"
        case scissorsButton: return "scissors"
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
        outcomeDisplay.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
        humanDisplay.textContent = `Human Score: ${humanScore}`;
    }
    else if((outcome < 0 && outcome !== -2) || outcome === 2){
        computerScore++;
        outcomeDisplay.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`;
        computerDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    else{
        outcomeDisplay.textContent = `Draw!`;
    }

    if(computerScore === 5 || humanScore === 5){
        buttons.removeEventListener("click", buttonClick);
        if(computerScore > humanScore) outcomeDisplay.textContent = "Computer Wins!";
        else if(computerScore < humanScore) outcomeDisplay.textContent = "Human Wins!";
        else outcomeDisplay.textContent = "Draw!";
        humanDisplay.remove();
        computerDisplay.remove();
        rockButton.remove();
        paperButton.remove();
        scissorsButton.remove();
    }
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let buttons = document.querySelector("#buttons");

let resultsDisplay = document.querySelector("#results");
let outcomeDisplay = document.querySelector("#outcome");

let humanDisplay = resultsDisplay.querySelector("#human");
humanDisplay.textContent = `Human Score: ${humanScore}`;
resultsDisplay.appendChild(humanDisplay);

let computerDisplay = document.querySelector("#computer");
computerDisplay.textContent = `Computer Score: ${computerScore}`;
resultsDisplay.appendChild(computerDisplay);

let buttonClick = (event) => playRound(getHumanChoice(event), getComputerChoice());

buttons.addEventListener("click", buttonClick);
