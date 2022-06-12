'use strict';

//console.log(document.querySelector('.message').textContent);

Math.random(); // Math is an object in JS and random() is one of the methods in the Math object. it will produce a decimal number btw 0 and 1, so in the context of this game, we need a number btw 0-20, so we have to multiply the method by 20(note: method = function in an object) and this is produce a decimer number btw 1 - 19.9999, and to get rid of this decimal, we need to introduce another Math method; Math.trunc(Math.random()) so we get a number btw 0 - 19, and will never really include a 20 there we need to add 1.

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //Using let cos 'const' iks immutable and we new the value of score to decrease on kevery wrong guesses

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  //When there no input number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    document.querySelector('body').style.backgroundColor = '#f6dc1';

    //When the guess is right and player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#5ddc36';
    document.querySelector('.number').style.width = '30rem';

    //When guess is too Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😒 Guess too low!';
      score = score - 1; // also 'score--'.
      document.querySelector('.score').textContent = score;
      // document.querySelector('body').style.backgroundColor = '#f6dc1';
    } else {
      document.querySelector('.message').textContent = '🤷‍♂️ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f61f1f';
    }

    //When guess is too High
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😂 Guess too high!';
      score--; // so score decreases by 1 on every wrong guess.
      document.querySelector('.score').textContent = score;
      // document.querySelector('body').style.backgroundColor = '#f6dc1';
    } else {
      document.querySelector('.message').textContent = '🤷‍♂️ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#f61f1f';
    }
  }
});
