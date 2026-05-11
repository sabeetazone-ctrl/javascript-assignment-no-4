// --- CHAPTERS 14-16: ARRAYS ---

// 1-6. Array Declarations
var literalArray = []; // Literal notation 
var objectArray = new Array(); // Object notation 
var stringArray = ["Apple", "Banana", "Cherry"];
var numArray = [10, 20, 30];
var boolArray = [true, false, true];
var mixedArray = ["Hello", 42, true, null];

// 7. Educational Qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var qualHTML = "<h3>Qualifications:</h3><ul>";
for (var i = 0; i < qualifications.length; i++) {
    qualHTML += `<li>${qualifications[i]}</li>`;
}
qualHTML += "</ul>";
document.getElementById('qualifications').innerHTML = qualHTML; [cite: 5]

// 8. Student Scores & Percentages
var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
var studentHTML = "<h3>Student Results:</h3>";
for (var j = 0; j < students.length; j++) {
    var perc = (scores[j] / totalMarks) * 100;
    studentHTML += `<p class="result-item">Score of ${students[j]} is ${scores[j]}. Percentage: ${perc}%</p>`;
}
document.getElementById('student-results').innerHTML = studentHTML; [cite: 5]

// 10. Sorting Scores
var studentScores = [320, 230, 480, 120];
var sortedScores = [...studentScores].sort((a, b) => a - b);
console.log("Scores of Students: " + studentScores);
console.log("Ordered Scores: " + sortedScores); [cite: 5]

// 11. Selected Cities Array
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4); // Copies Islamabad and Quetta 
console.log("Cities list: " + cities);
console.log("Selected cities list: " + selectedCities);

// 12. Array to String
var arr = ["This", "is", "my", "cat"];
var combinedString = arr.join(" "); [cite: 5]
console.log("Array: " + arr);
console.log("String: " + combinedString);

// 13. FIFO (First In First Out)
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
console.log("FIFO Out: " + devices.shift()); // keyboard 
console.log("FIFO Out: " + devices.shift()); // mouse

// 14. LIFO (Last In First Out)
var stack = [];
stack.push("keyboard");
stack.push("mouse");
stack.push("printer");
stack.push("monitor");
console.log("LIFO Out: " + stack.pop()); // monitor 
console.log("LIFO Out: " + stack.pop()); // printer
