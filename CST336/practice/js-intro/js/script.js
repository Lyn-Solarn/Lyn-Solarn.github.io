let today = new Date();
let year = today.getFullYear();

console.log(today);
console.log(year);

console.dir(today);
console.dir(year);

let month = getMonthName(today.getMonth())
console.log(month);

document.querySelector('#dateBtn').addEventListener('click', displayDate)
document.querySelector('#date').addEventListener('click', displayTime)

function displayDate() {
    let dateElement = document.querySelector('#date');
    dateElement.textContent = today.toDateString();
}

function displayTime() {
    let timeElement = document.querySelector('#time');
    timeElement.textContent = today.toLocaleTimeString();
}

function getMonthName (monthIndex) {
    if (monthIndex === 8) {
        return "It's September!";
    } else {
        return "Not September...";
    }
}