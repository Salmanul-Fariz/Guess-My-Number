'use strict';

const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a Number !';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = 'Correct ✨🎉';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = '🥵 Too High !';
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = '🥶 Too Low !';
  }
});
