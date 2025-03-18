// Step 2: Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
  return choices[randomIndex];
}

// Step 3: Function to get the human's choice
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  return choice;
}

// Step 4: Declare the players' score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Function to play a single round
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

// Step 6: Function to play the entire game
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Game over!");
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Start the game
playGame();
