'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ='THis is my Game';
// document.querySelector('.number').textContent = Math.trunc(Math.random()*100 +1);
// document.querySelector('.score').textContent = Math.trunc(Math.random()*100 +1);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let sercet_number = Math.trunc(Math.random() * 20) + 1;
console.log(sercet_number);
let sr = 20;
let tr = 1;
let highsc;
//function to type the message
const message_display = function(message){
  document.querySelector('.message').textContent = message;
}
//Function to find the high score
function high_score() {
  if (tr == 1) {
    highsc = sr;
  } else if (highsc < sr) {
    highsc = sr;
  }
}
//function reset the values
function ag() {
  sr = 20;
  document.querySelector('.score').textContent = sr;
  sercet_number = Math.trunc(Math.random() * 20) + 1;
  console.log(sercet_number);
  // document.querySelector('.message').textContent = 'Start Guessing....';
  message_display('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  tr++;
  console.log(tr);
}

//The main function of the program
function fun() {
  const k = Number(document.querySelector('.guess').value);
  if (!k) {
    message_display('No Number 👎');
  } else {
    if (sercet_number != k) {
      if (sr > 0) {
        // document.querySelector('.message').textContent =
        //   sercet_number > k ? 'Too low' : 'Too High';
        message_display( sercet_number > k ? 'Too low' : 'Too High');
        sr--;
        document.querySelector('.score').textContent = sr;
      } else {
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').textContent = sercet_number;
        // document.querySelector('.message').textContent = 'Game Over 😐';
        message_display('Game Over 😐');
      }
    } else if (sercet_number == k) {
      high_score();

      document.querySelector('.number').textContent = sercet_number;
      // document.querySelector('.message').textContent =
      //   'You have Won the Game 🎉';
      message_display('You have Won the Game 🎉');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.highscore').textContent = highsc;
    }
  }
}

document.querySelector('.check').addEventListener('click', fun);
document.querySelector('.again').addEventListener('click', ag);
