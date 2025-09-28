// Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#password").addEventListener("focus", displayPassword);
document.querySelector("#username").addEventListener("change", displayAvailablity);
document.querySelector("#states").addEventListener("change", displayCounty);
document.querySelector("#submit").addEventListener("click", passwordCheck);

displayStates();

//Functions
async function displayCity() {
    let zipcode = document.querySelector("#zip").value;
    let url = 'https://csumb.space/api/cityInfoAPI.php?zip='+ zipcode;
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();
            //console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#latitude").textContent = data.latitude;
            document.querySelector("#longitude").textContent = data.longitude;
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}

async function displayStates() {
    let url = 'https://csumb.space/api/allStatesAPI.php';
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();
            //console.log(data);
            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.state;
                optionElement.value = i.usps;

                document.querySelector("#states").append(optionElement);
            }
            
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}

async function displayCounty() {
    let state = document.querySelector("#states").value;
    let url = ' https://csumb.space/api/countyListAPI.php?state=' + state;
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();
            //console.log(data);
            for (let i of data) {
                let optionElement = document.createElement("option");
                optionElement.textContent = i.county;

                document.querySelector("#county").append(optionElement);
            }
            
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}

async function displayPassword() {
    let url = 'https://csumb.space/api/suggestedPassword.php?length=6';
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();
            //console.log(data);
            document.querySelector("#suggestedPassword").textContent = data.password;
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}

async function displayAvailablity() {
    let username = document.querySelector("#username").value;
    let url = ' https://csumb.space/api/usernamesAPI.php?username=' + username;
    let response = await fetch(url);
    try {
        try {
            let data = await response.json();
            //console.log(data);
            if (!data.available) {
                document.querySelector("#available").textContent = "Username Not Available";
                document.querySelector("#available").style.color = "red";
            } else {
                document.querySelector("#available").textContent = "Username Is Available";
                document.querySelector("#available").style.color = "green";
            }
        } catch(parseError) {
            console.log("JSON Parsing Error: " + parseError);
        }
    } catch(error) {
        console.log("Network Error: " + error);
    }  
}

function passwordCheck() {
    let password = document.querySelector("#password").value;

    if (password.length < 6) {
        document.querySelector("#feedback").textContent = "Password is not long enough!";
        document.querySelector("#feedback").style.color = "red";
    } else {
        document.querySelector("#feedback").textContent = '';
    }
}