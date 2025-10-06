// Event Listeners
document.querySelector("#authorInfo").addEventListener("click", displayAuthor);
document.querySelector("#translate").addEventListener("click", displayTranslation);

// Global Variables
let quoteId = 0;

displayQuote();
randomizeLanguages();

//Functions
async function displayQuote() {
    let url = "https://csumb.space/api/famousQuotes/getRandomQuote.php";
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();

            document.querySelector("#quote").textContent = data.quoteText;
            document.querySelector("#authorImage").src = data.picture;
            document.querySelector("#name").textContent = data.firstName + ' ' + data.lastName;
            document.querySelector("#bio").textContent = data.bio;

            quoteId = data.quoteId;
        } catch (parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch (error) {
        console.log("Network Error: " + error);
    }
}

async function displayAuthor() {
    let authorInfo = document.querySelector("#author");

    if (authorInfo.style.display == 'flex') {
        authorInfo.style.display = 'none';
    } else {
        authorInfo.style.display = 'flex';
    }
}

function randomizeLanguages() {
    let questionOptions = ['English', 'Spanish', 'French', 'Esperanto'];
    questionOptions = _.shuffle(questionOptions);

    for (let i of questionOptions) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "language";
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#languages").append(labelElement);
    }
}

async function displayTranslation() {
    let flag = document.querySelector("input[name=language]:checked").value + "_flag.png";
    document.querySelector("#languageFlag").src = "img/" + flag;
    let abb = document.querySelector("input[name=language]:checked").value;
    abb = abb.slice(0, 2);
    abb = abb.toUpperCase();

    let url = "https://csumb.space/api/famousQuotes/translateQuote.php?lang=" + abb + "&quoteId=" + quoteId;
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();

            document.querySelector("#quote").textContent = data.translation;
        } catch (parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch (error) {
        console.log("Network Error: " + error);
    }
}