'use strict';

function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

let randomNumber = generateRandomNumber();
let score = 20; // Move the score variable outside the event listener function

console.log(randomNumber);

document.querySelector("button").addEventListener('click', function() {
    const secretNumber = document.querySelector(".themain-number");
    let inputNumber = Number(document.querySelector("input").value);
    let modeOfGuess = document.querySelector(".mode");
    let scoreValue = document.querySelector("span");

    if (randomNumber === inputNumber) {
        modeOfGuess.textContent = "Congrats!!!";
        secretNumber.textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "#2AAA8A"
        
    } else if (inputNumber > randomNumber) {
        if (score > 1) {
            modeOfGuess.textContent = "Too High!";
            score--;
            scoreValue.textContent = score;
        } else {
            modeOfGuess.textContent = "You Lost :("
        }
    } else if (inputNumber < randomNumber) {
        if (score > 1) {
            modeOfGuess.textContent = "Too Low!";
            score--;
            scoreValue.textContent = score;
        } else {
            modeOfGuess.textContent = "You Lost :("
        }
    }
});
