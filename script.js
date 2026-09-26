function calculateGrades() {

    // Get student information
    const studentName = document.getElementById("studentName").value;
    const studentId = document.getElementById("studentId").value;

    // Get grades
    const grade1 = parseFloat(document.getElementById("grade1").value);
    const grade2 = parseFloat(document.getElementById("grade2").value);
    const grade3 = parseFloat(document.getElementById("grade3").value);
    const grade4 = parseFloat(document.getElementById("grade4").value);

    // Check if all grades are entered
    if (
        isNaN(grade1) ||
        isNaN(grade2) ||
        isNaN(grade3) ||
        isNaN(grade4)
    ) {
        alert("Please enter all four subject grades.");
        return;
    }

    // Store grades in an array
    const grades = [
        grade1,
        grade2,
        grade3,
        grade4
    ];

    // Calculate GWA
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const gwa = total / grades.length;

    // Find highest and lowest grade
    const highest = Math.min(...grades);
    const lowest = Math.max(...grades);

    // Determine performance
    let performance;
    let status;

    if (gwa <= 1.50) {
        performance = "Excellent";
        status = "PASSED";
    } else if (gwa <= 2.00) {
        performance = "Very Good";
        status = "PASSED";
    } else if (gwa <= 2.50) {
        performance = "Good";
        status = "PASSED";
    } else if (gwa <= 3.00) {
        performance = "Satisfactory";
        status = "PASSED";
    } else {
        performance = "Needs Improvement";
        status = "FAILED";
    }

    // Display dashboard results
    document.getElementById("gwa").textContent = gwa.toFixed(2);
    document.getElementById("highest").textContent = highest.toFixed(2);
    document.getElementById("lowest").textContent = lowest.toFixed(2);
    document.getElementById("performance").textContent = performance;

    // Display student result
    document.getElementById("studentResult").textContent =
        "Student: " + studentName +
        " | ID: " + studentId +
        " | Status: " + status;

    // Update subject table
    const table = document.getElementById("resultsTable");

    table.innerHTML = `
        <tr>
            <td>Developing Cloud Native Applications</td>
            <td>${grade1.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Introduction to HDL</td>
            <td>${grade2.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Logic Circuits and Design</td>
            <td>${grade3.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Operating System</td>
            <td>${grade4.toFixed(2)}</td>
        </tr>
    `;
}


function clearForm() {

    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";

    document.getElementById("grade1").value = "";
    document.getElementById("grade2").value = "";
    document.getElementById("grade3").value = "";
    document.getElementById("grade4").value = "";

    document.getElementById("gwa").textContent = "--";
    document.getElementById("highest").textContent = "--";
    document.getElementById("lowest").textContent = "--";
    document.getElementById("performance").textContent = "--";

    document.getElementById("studentResult").textContent =
        "Enter your grades and click Calculate.";

    document.getElementById("resultsTable").innerHTML = `
        <tr>
            <td>Developing Cloud Native Applications</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Introduction to HDL</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Logic Circuits and Design</td>
            <td>--</td>
        </tr>
        <tr>
            <td>Operating System</td>
            <td>--</td>
        </tr>
    `;
}