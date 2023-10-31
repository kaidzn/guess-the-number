'use strict';

function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

let randomNumber = generateRandomNumber();
let score = 20; // Move the score variable outside the event listener function

console.log(randomNumber);

document.querySelector(".check").addEventListener('click', function() {
    const secretNumber = document.querySelector(".themain-number");
    let inputNumber = Number(document.querySelector("input").value);
    let modeOfGuess = document.querySelector(".mode");
    let scoreValue = document.querySelector("span");

    if (randomNumber === inputNumber) {
        modeOfGuess.textContent = "Жарайсың!!!";
        secretNumber.textContent = randomNumber;
        document.querySelector("body").style.backgroundColor = "#2AAA8A"
        
    } else if (inputNumber > randomNumber) {
        if (score > 1) {
            modeOfGuess.textContent = "Тым Көп!";
            score--;
            scoreValue.textContent = score;
        } else {
            modeOfGuess.textContent = "Жеңілдің :("
        }
    } else if (inputNumber < randomNumber) {
        if (score > 1) {
            modeOfGuess.textContent = "Тым аз";
            score--;
            scoreValue.textContent = score;
        } else {
            modeOfGuess.textContent = "Жеңілдің :("
        }
    }
});
document.querySelector(".reset").addEventListener("click", function(){
    score = 20;
    randomNumber = Math.floor(Math.random()*20) + 1;
    document.querySelector("body").style.backgroundColor = "#334155"
    document.querySelector(".mode").textContent = "Болжам басталды...";
    document.querySelector(".score-p").textContent =  score;
    document.querySelector(".themain-number").textContent = "?";
    document.querySelector("input").value = "";

})
