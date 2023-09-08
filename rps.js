const buttons = document.querySelectorAll("button");
const gameResult = document.getElementById("gameStatus");
const userOutput = document.getElementById("userScore");
const computerOutput = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = roundResult(button.id, randomGenerator());
    gameResult.textContent = result;
  });
});

function roundResult(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "it's a tie!";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    userScore++;
    userOutput.textContent = userScore;
    return "you win!\n" + userChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    computerOutput.textContent = computerScore;
    return "computer win!\n" + computerChoice + " beats " + userChoice;
  }
}

function randomGenerator() {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  //console.log(random, options[random]);
  return options[random];
}
