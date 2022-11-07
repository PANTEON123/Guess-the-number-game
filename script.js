'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let winResult = 0;

const displayGuessMessage = function(message) {
    document.querySelector('.guess-message').textContent = message;
};

const scorePoint = function(message) {
    document.querySelector('.score').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber);

    //no input
    if (!guessingNumber) {
        displayGuessMessage('Введите число!')
            //Player won
    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Правильно!');
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
        document.querySelector('.question').textContent = secretNumber;
        if (score > winResult) {
            winResult = score;
            document.querySelector('.highscore').textContent = winResult;

        };


        //Number from input is wronf
    } else if (guessingNumber !== secretNumber) {
        if (score > 1) {
            displayGuessMessage(guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!');
            score--;
            scorePoint(score);
        } else {
            displayGuessMessage('Game Over!');
            scorePoint(0);
        }
    }
});

let label;

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.number-input').value = '';
    document.querySelector('.question').textContent = '???';
    displayGuessMessage('Начни угадывать!');
    scorePoint(20);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

})