// The User's choice is stored here
var userChoice = null;

// This function is called with the type of image the user clicks on
function userChoiceFunc(choice) {
  userChoice = choice;
//  console.log("User: "+ choice);
}

// The initial computerChoice is random
var computerChoice = Math.random();

// The computer's choice is randomly chosen 
function computeCompChoice() {
  computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
//  console.log("Computer: " + computerChoice);
}

// The function that decides the winner
var compare = function(usrChoice, cmpChoice) {
  if (usrChoice === cmpChoice)
    return "The result is a tie!";

  else if (usrChoice === "rock") {

    if (cmpChoice === "scissors")
      return "You win!";
    else
      return "Oops! the Computer won.";
  } else if (usrChoice === "paper") {

    if (cmpChoice === "rock")
      return "You win!";
    else
      return "Oops! the Computer won.";
  } else {

    if (cmpChoice === "rock")
      return "Oops! The Computer won.";
    else
      return "You win!";
  }
};

// The function that calls 'compare' and prints the result
function findResult() {
  document.getElementById('userOutput').innerHTML = ("<u>You chose</u>: " + userChoice.toUpperCase());
  document.getElementById('computerOutput').innerHTML = ("<u>Computer chose</u>: " + computerChoice.toUpperCase());
  document.getElementById('result').innerHTML = ("<u>Result</u>: " + compare(userChoice, computerChoice));
}
