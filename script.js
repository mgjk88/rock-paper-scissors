function getComputerChoice(){
    const number = Math.round(Math.random() * 3);
    return  number === 1 
    ? "rock" 
    : number === 2
        ? "paper"
        : "scissors";
}