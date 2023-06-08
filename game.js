let maxNumber;
  
while (true) {
  let input = prompt("Enter the maximum number for the game:");
    
  maxNumber = Math.round(parseFloat(input));
  
  if (maxNumber > 0 && !isNaN(maxNumber)) {
      break;
    }
  }
  
let instructions = document.getElementById("instructions");
instructions.textContent = "Guess a number between 1 and " + maxNumber + ":";
  
let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");
let messageDisplay = document.getElementById("message");
  
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  
let guesses = [];
let numTries = 0;
  
guessInput.disabled = false;
submitButton.disabled = false;
  
submitButton.addEventListener("click", function() {
     
  let userGuess = parseInt(guessInput.value);
        
  if (isNaN(userGuess)) {
      messageDisplay.textContent = "That is not a number!";
    } else if (userGuess < 1 || userGuess > maxNumber) {
      messageDisplay.textContent = "That number is not in range, try again.";
    } else if (guesses.includes(userGuess)) {
      messageDisplay.textContent = "You've already guessed that number, try again.";
    } else {
        
        numTries++;
         
        guesses.push(userGuess);
  
        if (userGuess == randomNumber) {
          let victoryMessage = "You got it! It took you " + numTries + " tries and your guesses were: " + guesses.join(", ") + ".";
          messageDisplay.textContent = victoryMessage;
          
          guessInput.disabled = true;
          submitButton.disabled = true;
        } else if (userGuess < randomNumber) {
          messageDisplay.textContent = "No, try a higher number.";
        } else {
          messageDisplay.textContent = "No, try a lower number.";
        }
      }
  guessInput.value = "";
});