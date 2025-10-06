document.querySelector("#backgroundSelection").addEventListener("change", setBackground);

async function setBackground() {
    let selection = document.querySelector("#backgroundSelection").value;
    let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=" + selection;
    let response = await fetch(url);

    try {
        try {
            let data = await response.json();

            let randomIndex = Math.floor(Math.random() * data.hits.length);

            document.querySelector("body").style.backgroundImage = `url('${data.hits[randomIndex].largeImageURL}')`;
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}