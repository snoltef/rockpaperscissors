const options = ["rock","paper","scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Tie";
  }
  else if(
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ){
    return "Player";
  }
  else{
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    return "It's a Tie!"
  }
  else if(result == "Player"){
    return `You Win! ${playerSelection} beats ${computerSelection}`
  }
  else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

function getPlayerChoice(){
  let validatedInput = false;
  while (validatedInput == false){
    const choice = prompt("Rock Paper Scissors");
    if(choice == null){
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)){
    validatedInput = true;
    return choiceInLower;
    }
  }
}

let scorePlayer = 0;
let scoreComputer = 0;

const runningScore = document.getElementById('runningScore');
const winnerResult = document.querySelector('#winner');

function gameRock(){
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    if(scoreComputer == 5){winnerResult.textContent ="Game Over, You Lose";}
    else if(scorePlayer == 5){winnerResult.textContent = "Game Over, You Win";}
      else{
    console.log(playRound(playerSelection, computerSelection));
    if(checkWinner(playerSelection,computerSelection) == "Player"){
      scorePlayer++;
    }
    else if(checkWinner(playerSelection,computerSelection) == "Computer"){
      scoreComputer++;
    }
  }
  runningScore.textContent = `Computer:`+scoreComputer+` Player: `+scorePlayer;
}

function gamePaper(){
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  if(scoreComputer == 5){winnerResult.textContent ="Game Over, You Lose";}
  else if(scorePlayer == 5){winnerResult.textContent = "Game Over, You Win";}
else{
  console.log(playRound(playerSelection, computerSelection));
  if(checkWinner(playerSelection,computerSelection) == "Player"){
    scorePlayer++;
  }
  else if(checkWinner(playerSelection,computerSelection) == "Computer"){
    scoreComputer++;
  }
}
  runningScore.textContent = `Computer:`+scoreComputer+` Player: `+scorePlayer;
}




function gameScissors(){
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  if(scoreComputer == 5){winnerResult.textContent ="Game Over, You Lose";}
  else if(scorePlayer == 5){winnerResult.textContent = "Game Over, You Win";}
else{
  console.log(playRound(playerSelection, computerSelection));
  if(checkWinner(playerSelection,computerSelection) == "Player"){
    scorePlayer++;
  }
  else if(checkWinner(playerSelection,computerSelection) == "Computer"){
    scoreComputer++;
  }
}
runningScore.textContent = `Computer:`+scoreComputer+` Player: `+scorePlayer;
}
 
const buttonRock = document.getElementById('buttonRock');
buttonRock.addEventListener("click",gameRock);

const buttonPaper = document.getElementById('buttonPaper');
buttonPaper.addEventListener("click",gamePaper);

const buttonScissors = document.getElementById('buttonScissors');
buttonScissors.addEventListener("click",gameScissors);

