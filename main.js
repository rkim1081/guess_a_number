let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

let randomNumber = Math.floor(Math.random() * 100 + 1);

guessField.focus();

function checkGuess() {
    let userGuess= Number(guessField.value);
    // console.log(userGuess test);

    if(guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }

    guesses.textContent += userGuess + '';

    // If they get the numbers
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Woot Woot ! You Got It Right!';
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';
        
        setGameOver();

    } else if (guessCount === 10) {
        lastResult.textContent = '!!!!!! Game Over !!!!!!!';
        lowOrHi.textContent = '';

        setGameOver();


    } else {
        lastResult.textContent = 'WRONG!! Try Again!';
        lastResult.style.background = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last Guess Was Too High!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();



}
//start a new game button will not work

guessSubmit.addEventListener("click", checkGuess);
// GameOver btn
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start New Game'; //when pressed, new game will not reset????help here
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetButton);
}
//reset btn

function resetGame() {
    guessCount = 10;
    var resetParas = document.querySelector('.results p')
    for(var i = 0; i < resetParas.clientHeight; i++) {
        resetParas[i].textContent = '';
    }


resetButton.parentNode.removeChild(resetButton);
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value = '';
guessField.focus();
lastResult.style.background = '#fff';
randomNumber = Math.floor(Math.random() * 100) + 1;


}
