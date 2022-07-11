const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! Try again.");
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie.";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return " You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else {
      return "Computer won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost!";
    } else {
      return " You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won!";
    } else {
      return " You lost!";
    }
  }
  if (userChoice === "bomb") {
    if (
      computerChoice === "paper" ||
      computerChoice == "rock" ||
      computerChoice == "scissors"
    )
      return "You won!";
  } else {
    return;
  }
};

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
