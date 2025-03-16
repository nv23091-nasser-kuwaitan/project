// Step 1: Setup the project
console.log("Hello World"); // Check if JavaScript is working

// Step 2: Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // List of choices
    const randomIndex = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return choices[randomIndex]; // Return a random choice
}

// Step 3: Function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase(); // Ask the user for input
    while (!["rock", "paper", "scissors"].includes(choice)) { // Check if the input is valid
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase(); // Reprompt if invalid
    }
    return choice; // Return the valid choice
}

// Step 4: Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Step 5: Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`); // Log human's choice
    console.log(`Computer chose: ${computerChoice}`); // Log computer's choice

    if (humanChoice === computerChoice) { // Check for a tie
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || // Human wins with rock
        (humanChoice === "paper" && computerChoice === "rock") || // Human wins with paper
        (humanChoice === "scissors" && computerChoice === "paper") // Human wins with scissors
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); // Log win message
        humanScore++; // Increase human's score
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`); // Log lose message
        computerScore++; // Increase computer's score
    }

    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`); // Log current scores
}

// Step 6: Function to play the full game
function playGame() {
    humanScore = 0; // Reset human's score
    computerScore = 0; // Reset computer's score

    for (let i = 0; i < 5; i++) { // Play 5 rounds
        console.log(`Round ${i + 1}:`); // Log the round number
        const humanSelection = getHumanChoice(); // Get human's choice
        const computerSelection = getComputerChoice(); // Get computer's choice
        playRound(humanSelection, computerSelection); // Play the round
    }

    // Declare the winner after 5 rounds
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Step 7: Start the game
playGame(); // Call the playGame function to start the game
