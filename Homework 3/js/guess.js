const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let numberOfGuesses = 0;
let minRange = 1;
let maxRange = 100;

function checkGuess() {
    const userGuessElement = document.getElementById('userGuess');
    const userGuess = parseInt(userGuessElement.value);
    numberOfGuesses++;

    const messageElement = document.getElementById('message');
    const rangeElement = document.getElementById('range');

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Try a higher number.';
        minRange = userGuess; // Adjust the minimum range
        rangeElement.textContent = `${minRange} to ${maxRange}`;
    } else if (userGuess > randomNumber) {
        messageElement.textContent = 'Try a lower number.';
        maxRange = userGuess; // Adjust the maximum range
        rangeElement.textContent = `${minRange} to ${maxRange}`;
    } else {
        messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${numberOfGuesses} tries.`;
        messageElement.style.color = 'green';
        document.querySelector('button').disabled = true;
    }

    userGuessElement.value = '';
    userGuessElement.focus();
}
