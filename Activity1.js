// VARIABLES
let name = "Arvin";
let score = 0;
let passing = 15;

// ARRAYS
let quiz = [5, 4, 3];
let bonus = [1, 1, 1];
let subjects = ["Math", "Science", "History"];

// CONDITIONALS
if (quiz[0] >= 5) {
    console.log("Math Passed");
} else {
    console.log("Math Failed");
}
if (quiz[1] >= 4) {
    console.log("Science Passed");
} else {
    console.log("Science Failed");
}
if (quiz[2] >= 3) {
    console.log("History Passed");
} else {
    console.log("History Failed");
}

// LOOPS
for (let i = 0; i < quiz.length; i++) {
    score += quiz[i] + bonus[i];
}
for (let subject of subjects) {
    console.log(subject);
}
let count = 3;

while (count > 0) {
    console.log(count);
    count--;
}

console.log("Name: " + name);
console.log("Score: " + score);