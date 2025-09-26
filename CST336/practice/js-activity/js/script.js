document.querySelector("button").addEventListener("click", convertGrade);

let grade = document.querySelector("#letterGrade");

function convertGrade() {
    let percentage = document.querySelector("#gradeSelection").value;

    if (percentage == "75") {
        grade.textContent = "C";
        grade.style.color = "red";
    }
    
    else if (percentage == "85") {
        grade.textContent = "B";
        grade.style.color = "orange";
    }
    
    else if (percentage == "95") {
        grade.textContent = "A";
        grade.style.color = "green";
    }
    
    else {
        grade.textContent = "A+";
        grade.style.color = "darkgreen";
    }
}