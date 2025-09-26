document.querySelector("button").addEventListener("click", gradeQuiz);

function gradeQuiz() {
    let grade = 0;

    let question1 = document.querySelector("input[name=q1]:checked").value;
    let question2 = document.querySelector("#q2").value;
    let question3 = document.querySelector("#q3").value;
    let question4 = document.querySelector("#q4").value;

    if (question1 == "eyeofender") {
        grade += 20;
        document.querySelector("#question1").style.color = "green";
    } else {
        document.querySelector("#question1").style.color = "red";
    }

    if (question2.toLowerCase() == "steve") {
        grade += 20;
        document.querySelector("#question2").style.color = "green";
    } else {
        document.querySelector("#question2").style.color = "red";
    }

    if (question3 == "creeper") {
        grade += 20;
        document.querySelector("#question3").style.color = "green";
    } else {
        document.querySelector("#question3").style.color = "red";
    }

    if (question4 == 64) {
        grade += 20;
        document.querySelector("#question4").style.color = "green";
    } else {
        document.querySelector("#question4").style.color = "red";
    }

    if (document.querySelector("#steve").checked && document.querySelector("#chickenjockey").checked && !document.querySelector("#nameissteve").checked && !document.querySelector("#minecraft").checked) {
        grade += 20;
        document.querySelector("#question5").style.color = "green";
    } else {
        document.querySelector("#question5").style.color = "red";
    }

    document.querySelector("#totalscore").textContent = grade;
}