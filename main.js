const form = document.getElementById('number-form');
const input = document.getElementById('number-input');
const feedback = document.getElementById('feedback');
const attemptsLeft = document.getElementById('attempts-left');

// functions //

// generate random number
function getRandomNumber(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// check if guess is lower or higher
function getHint(guess, number) {
  if (guess < number) {
    return 'higher';
  } else {
    return 'lower';
  }
}

// return false if number is not within range or if it's not a number
function isValidNumber(guess) {
  let errorMessage;
  if (guess < 1 || guess > 10) {
    return false;
  } else if (isNaN(guess)) {
    return false;
  } else {
    return true;
  }
}

// function for game turn

function gameTurn(guess, number, attempts) {
  guess = input.value;

  // check if guess is right
  if (guess == number) {
    feedback.textContent = 'You got it right! :)';
    return;
    // check if user is out of attempts
  } else if (attempts == 0) {
    feedback.textContent = 'You lost! :(';
    return;
  }

  // validate guess
  if (isValidNumber(guess)) {
    // check if guess is lower/higher and store result in hint variable
    let hint = getHint(guess, number);
    // if valid render feedback and give a hint (lower/higher)
    feedback.textContent = `You answered ${guess}. The correct answer is ${hint}.”`;
  } else {
    console.error('Enter a number between 1 and 10');
  }
}

// set up attempts, number and guess variables

let attempts = 3;
attemptsLeft.textContent = `You have ${attempts} left`;
let number = getRandomNumber(1, 10);
let guess;

// handle form submission, validate and assign input value to guess variable
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // lower and update attempts
  attempts -= 1;
  attemptsLeft.textContent = `You have ${attempts} left`;

  gameTurn(guess, number, attempts);
});
