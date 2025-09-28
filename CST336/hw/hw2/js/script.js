// Event Listeners 
document.querySelector("#spinBtn").addEventListener("click", spin);
document.querySelector("#resetBtn").addEventListener("click", reset);

//Global Variables
let money = 1000;
document.querySelector("#money").textContent = money;

//Functions
function spin() {
    let symbols = ['🍋', '🍇', '🍒', '🍀', '💎'];
    let multiplier = [2, 5, 10, 20, 50];
    let bet = document.querySelector("#bet").value;

    let indexes = [0, 0, 0];

    if (checkBetAmount(bet)) {
        for (let i=0; i < 3; i++) {
            indexes[i] = randomize();
        }

        if (indexes[0] == indexes[1] && indexes[1] == indexes[2]) {
            money += bet * multiplier[indexes[0]];
            document.querySelector("#money").textContent = money;

            if (indexes[0] == 4) {
                document.querySelector("#results").textContent = "JACKPOT +$" + bet * multiplier[indexes[0]];
                document.querySelector("#results").style.color = "gold";
            } else {
                document.querySelector("#results").textContent = "+$" + bet * multiplier[indexes[0]];
                document.querySelector("#results").style.color = "green";
            }
        } else {
            money -= bet;
            document.querySelector("#money").textContent = money;

            document.querySelector("#results").textContent = "-$" + bet;
            document.querySelector("#results").style.color = "red";
        }

        document.querySelector("#symbols").textContent = "[ " + symbols[indexes[0]] + " ]" +
                                                        "[ " + symbols[indexes[1]] + " ]" +
                                                        "[ " + symbols[indexes[2]] + " ]";
    }
}

function randomize() {
    let index;
    let randomNum = Math.floor(Math.random() * 4);

    if (randomNum < 4) {
        index = randomNum;
    } else {
        randomNum = Math.floor(Math.random() * 2);

        index = randomNum + 4;
    }

    return index;
}

function reset() {
    money = 1000;
    document.querySelector("#money").textContent = money;
    document.querySelector("#results").textContent = " ";

    document.querySelector("#symbols").textContent = "[ ] [ ] [ ]";
}

function checkBetAmount(bet) {
    if (bet > money) {
        document.querySelector("#feedback").textContent = "Not enough funds!";
        document.querySelector("#feedback").style.color = "red";
        return false;
    } else if (bet <= 0) {
        document.querySelector("#feedback").textContent = "Please enter at least $1.";
        document.querySelector("#feedback").style.color = "orange";
    } else {
        document.querySelector("#feedback").textContent = " ";
        return true;
    }
}