// Global Variables
let randomNum = Math.floor(Math.random() * 99) + 1;
let guesses = 7;

// Event Listeners
document.querySelector('#guessBtn').addEventListener('click', guess);

// Functions
function guess() {
    let userGuess = document.querySelector('#guessBox').value;
    let guessAlert = document.querySelector('#guessAlert');

    guessAlert.className = " ";
    
    if (guesses == 0 && userGuess != randomNum) {
        guessAlert.textContent = 'Better Luck Next Time!';
        guessAlert.style.color = 'red';
    }
    else {
        if (userGuess == randomNum) {
            guessAlert.textContent = `You Won! The Answer was ${randomNum}`;
            guessAlert.style.color = 'green';
        }
        else {
            if (userGuess > randomNum) {
                guessAlert.textContent = `Too High!`;
                guessAlert.style.color = 'orange';
            }
            else {
                guessAlert.textContent = `Too Low!`;
                guessAlert.style.color = 'blue';
            }
    
            document.querySelector('#prevGuesses').textContent += `${userGuess} `;
            guesses--;
        }
    } 
}