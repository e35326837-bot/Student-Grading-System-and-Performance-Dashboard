function getRemarks(grade) {
    if (grade >= 1.00 && grade <= 3.00) {
        return "Passed";
    } else if (grade >= 3.25 && grade <= 5.00) {
        return "Failed";
    } else {
        return "Invalid Grade";
    }
}

function calculateGrades() {

    const name = document.getElementById("studentName").value;
    const id = document.getElementById("studentID").value;

    const grades = [
        parseFloat(document.getElementById("grade1").value),
        parseFloat(document.getElementById("grade2").value),
        parseFloat(document.getElementById("grade3").value),
        parseFloat(document.getElementById("grade4").value)
    ];

    if (!name || !id || grades.some(isNaN)) {
        alert("Please complete all student information and grades.");
        return;
    }

    // Check if grades are within the valid range
    if (grades.some(grade => grade < 1 || grade > 5)) {
        alert("Please enter grades from 1.00 to 5.00.");
        return;
    }

    // Calculate GWA
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const gwa = total / grades.length;

    // Find highest and lowest grade
    const highest = Math.min(...grades);
    const lowest = Math.max(...grades);

    // Display student information
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayID").textContent = id;

    // Display summary
    document.getElementById("gwa").textContent = gwa.toFixed(2);
    document.getElementById("highest").textContent = highest.toFixed(2);
    document.getElementById("lowest").textContent = lowest.toFixed(2);

    // Overall status
    const status = gwa <= 3.00 ? "PASSED" : "FAILED";
    document.getElementById("status").textContent = status;

    // Subject names
    const subjects = [
        "Developing Cloud Native Applications",
        "Introduction to HDL",
        "Logic Circuits and Design",
        "Operating System"
    ];

    // Create table rows
    const table = document.getElementById("gradeTable");

    table.innerHTML = "";

    for (let i = 0; i < grades.length; i++) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${subjects[i]}</td>
            <td>${grades[i].toFixed(2)}</td>
            <td>${getRemarks(grades[i])}</td>
        `;

        table.appendChild(row);
    }
}

function clearForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("studentID").value = "";

    document.getElementById("grade1").value = "";
    document.getElementById("grade2").value = "";
    document.getElementById("grade3").value = "";
    document.getElementById("grade4").value = "";

    document.getElementById("displayName").textContent = "---";
    document.getElementById("displayID").textContent = "---";

    document.getElementById("gwa").textContent = "---";
    document.getElementById("highest").textContent = "---";
    document.getElementById("lowest").textContent = "---";
    document.getElementById("status").textContent = "---";

    document.getElementById("gradeTable").innerHTML = "";
}