$("#btnSend").click(function () {
    let grade = parseInt($("#assignments").val())
    let letterGrade = ""

    grade += parseInt($("#groupProjects").val())

    grade += parseInt($("#quizzes").val())

    grade += parseInt($("#midtermExam").val())

    grade += parseInt($("#finalExam").val())

    grade += parseInt($("#intex").val())

    if (grade >= 94) {
        letterGrade = "A"
    }
    else if (grade >= 90) {
        letterGrade = "A-"
    }
    else if (grade >= 87) {
        letterGrade = "B+"
    }
    else if (grade >= 84) {
        letterGrade = "B"
    }
    else if (grade >= 80) {
        letterGrade = "B-"
    }
    else if (grade >= 77) {
        letterGrade = "C+"
    }
    else if (grade >= 74) {
        letterGrade = "C"
    }
    else if (grade >= 70) {
        letterGrade = "C-"
    }
    else if (grade >= 67) {
        letterGrade = "D+"
    }
    else if (grade >= 64) {
        letterGrade = "D"
    }
    else if (grade >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    alert("Your numerical grade is: " + grade + "\nYour letter grade is: " + letterGrade)
})