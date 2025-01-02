// return error if number is not within range or if it's not a number
function isValidNumber(number) {
  let errorMessage;
  if (number < 1 || number > 10) {
    return false;
  } else if (isNaN(number)) {
    return false;
  } else {
    return true;
  }
}

// handle form submission and assign input value to number variable

const form = document.getElementById('number-form');
const input = document.getElementById('number-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  guess = input.value;

  // get result from validation

  if (isValidNumber(guess)) {
    console.log(`Your guess is ${guess}`);
  } else {
    console.log('Enter a number between 1 and 10');
  }
});
