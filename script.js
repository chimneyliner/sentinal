'use strict';
// console.log(document.querySelector(".message").textContent)
// document.querySelector(".message").textContent = "correct number "


// console.log(document.querySelector(".message").textContent)
// document.querySelector('.number').textContent = 5
// document.querySelector('.score').textContent = 14

// document.querySelector('.guess').value = 34

// console.log(document.querySelector('.guess').value)

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }
// const rndNum = (getRandomIntInclusive(1, 20))
const rndNum = Math.trunc(Math.random() * 20) + 1
let score = 20




document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)


    if (!guess) {
        document.querySelector('.message').textContent = "no number slected"
    } else if (guess == rndNum) {
        document.querySelector('.message').textContent = "YOU GOT IT"
        document.querySelector('.number').textContent = rndNum

    } else if (guess > rndNum) {
        document.querySelector('.message').textContent = "📈 TOO HIGH A GUESS"
        score = score - 1
    } else if (guess < rndNum) {
        document.querySelector('.message').textContent = " 📉 TOO LOW A GUESS"
        score = score - 1
    }
    document.querySelector('.score').textContent = score


})














