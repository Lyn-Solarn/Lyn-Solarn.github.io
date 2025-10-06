// Event Listeners
document.querySelector("#zip").addEventListener("change", displayCity);
document.querySelector("#password").addEventListener("focus", displayPassword);
document.querySelector("#username").addEventListener("change", displayAvailablity);
document.querySelector("#states").addEventListener("change", displayCounty);
document.querySelector("#submit").addEventListener("click", validateForm);

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
            if (data) {
                document.querySelector("#zipFeedback").textContent = '';

                document.querySelector("#city").textContent = data.city;
                document.querySelector("#latitude").textContent = data.latitude;
                document.querySelector("#longitude").textContent = data.longitude;
            } else {
                document.querySelector("#zipFeedback").textContent = "Zipcode not found.";
                document.querySelector("#zipFeedback").style.color = "red";

                document.querySelector("#city").textContent = '';
                document.querySelector("#latitude").textContent = '';
                document.querySelector("#longitude").textContent = '';
            }
            
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

function validateForm() {
    let errorMessage = '';

    if (!usernameCheck()) {
        errorMessage += "-- Username needs to be at least 3 characters ";
    }
    if (!passwordCheck()) {
        errorMessage += "-- Password needs to be at least 6 characters ";
    }
    if (!retypePasswordCheck()) {
        errorMessage += "-- Passwords do not match ";
    }

    if (errorMessage.length > 0) {
        document.querySelector("#feedback").textContent = errorMessage;
        document.querySelector("#feedback").style.color = "red";
    } else {
        document.querySelector("#feedback").textContent = "Sign-Up Completed!";
        document.querySelector("#feedback").style.color = "green";
    }
}

function usernameCheck() {
    let username = document.querySelector("#username").value;

    if (username.length >= 3) {
        return true;
    } else {
        return false;
    }
}

function passwordCheck() {
    let password = document.querySelector("#password").value;

    if (password.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function retypePasswordCheck() {
    let password = document.querySelector("#password").value;
    let retypePassword = document.querySelector("#retypePassword").value;

    if (password == retypePassword) {
        return true;
    } else {
        return false;
    }
}