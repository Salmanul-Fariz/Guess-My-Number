'use strict';

// Create a random number and put to DOM
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  // Taking the input value of user enter
  const guess = Number(document.querySelector('.guess').value);

  // Checking is number is there
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a Number !';
  }
  // Checking the guess value and random number is Correct
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct ✨🎉';
  }
  // Checking the guess value and random number is greater than
  else if (guess > randomNumber) {
    document.querySelector('.message').textContent = '🥵 Too High !';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // Checking the guess value and random number is Less than
  else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥶 Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = 'You Failed !';
      score--;
      document.querySelector('.score').textContent = '0';
    }
  }
});
