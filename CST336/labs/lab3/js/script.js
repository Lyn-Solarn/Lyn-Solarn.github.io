// Event Listeners
document.querySelector("button").addEventListener("click", gradeQuiz);

randomizeAnswers();
localStorageUpdate();
// localStorage.removeItem('quizCount');

//Functions
function randomizeAnswers() {
    let questionOptions = ['Eye of Ender', 'TNT', 'Ender Pearl'];
    questionOptions = _.shuffle(questionOptions);

    for (let i of questionOptions) {
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "q1";
        inputElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;
        labelElement.prepend(inputElement);

        document.querySelector("#question1Options").append(labelElement);
    }
}

function localStorageUpdate() {
    let quizCount = localStorage.getItem("quizCount");

    if (quizCount === null) {
        quizCount = 0;
        localStorage.setItem("quizCount", quizCount);
    } else {
        quizCount = parseInt(quizCount, 10);
    }

    document.querySelector("#quizCount").textContent = quizCount;
}

function gradeQuiz() {
    let grade = 0;

    let question1 = document.querySelector("input[name=q1]:checked").value;
    let question2 = document.querySelector("#q2").value;
    let question3 = document.querySelector("#q3").value;
    let question4 = document.querySelector("#q4").value;

    if (question1 == "Eye of Ender") {
        grade += 20;
        document.querySelector("#question1").style.color = "green";

        document.querySelector("#q1Icon").textContent = '✔';
    } else {
        document.querySelector("#question1").style.color = "red";

        document.querySelector("#q1Icon").textContent = '❌';
    }

    if (question2.toLowerCase() == "steve") {
        grade += 20;
        document.querySelector("#question2").style.color = "green";

        document.querySelector("#q2Icon").textContent = '✔';
    } else {
        document.querySelector("#question2").style.color = "red";

        document.querySelector("#q2Icon").textContent = '❌';
    }

    if (question3 == "creeper") {
        grade += 20;
        document.querySelector("#question3").style.color = "green";

        document.querySelector("#q3Icon").textContent = '✔';

    } else {
        document.querySelector("#question3").style.color = "red";

        document.querySelector("#q3Icon").textContent = '❌';

    }

    if (question4 == 64) {
        grade += 20;
        document.querySelector("#question4").style.color = "green";

        document.querySelector("#q4Icon").textContent = '✔';
    } else {
        document.querySelector("#question4").style.color = "red";

        document.querySelector("#q4Icon").textContent = '❌';
    }

    if (document.querySelector("#steve").checked && document.querySelector("#chickenjockey").checked && !document.querySelector("#nameissteve").checked && !document.querySelector("#minecraft").checked) {
        grade += 20;
        document.querySelector("#question5").style.color = "green";

        document.querySelector("#q5Icon").textContent = '✔';
    } else {
        document.querySelector("#question5").style.color = "red";

        document.querySelector("#q5Icon").textContent = '❌';
    }

    let storage = localStorage.getItem('quizCount');
    let update = parseInt(storage);
    update++;
    localStorage.setItem('quizCount', update.toString());
    localStorageUpdate();

    document.querySelector("#totalscore").textContent = grade;
    checkScore();
}

function checkScore() {
    let score = Number(document.querySelector("#totalscore").textContent);
    
    if (score >= 80) {
        document.querySelector("#feedback").textContent = "Great Job!";
        document.querySelector("#feedback").style.color = "green";
    } else {
        document.querySelector("#feedback").textContent = "";
    }
}