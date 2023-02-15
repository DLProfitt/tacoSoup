////Book 1 - Taco Soup////

//Harry Potter Titles
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (let i = 0; i < harryPotterTitles.length; i++) {
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
};

//Student Grades
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        console.log('You got an F');
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        console.log('You got a D');
    } else if (grades[i] >= 77 && grades[i] <= 83) {
        console.log('You got a C');
    } else if (grades[i] >= 84 && grades[i] <= 92) {
        console.log('You got a B');
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        console.log('You got an A');
    }
};

//Student Grades: Part 2
let gradeF = [];
let gradeD = [];
let gradeC = [];
let gradeB = [];
let gradeA = [];
;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        gradeF.push(grades[i]);
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        gradeD.push(grades[i]);
    } else if (grades[i] >= 77 && grades[i] <= 83) {
        gradeC.push(grades[i]);
    } else if (grades[i] >= 84 && grades[i] <= 92) {
        gradeB.push(grades[i]);
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        gradeA.push(grades[i]);
    }
};

let letterGrades = [gradeA.length, gradeB.length, gradeC.length, gradeD.length, gradeF.length];
let aStudents = letterGrades[0];
let bStudents = letterGrades[1];

console.log(`There are ${aStudents} students who received an A!`);
console.log(`There are ${bStudents} students who received a B!`);

let testNum = 0;

for (let i = 0; i < letterGrades.length; i++) {
    if (letterGrades[i] > testNum) {
        testNum = letterGrades[i];
    }
};

let mostCommonLetterGrade = letterGrades.indexOf(testNum);

if (mostCommonLetterGrade = 0) {
    console.log('The most common letter grade was: A');
} else if (mostCommonLetterGrade = 1) {
    console.log('The most common letter grade was: B');
} else if (mostCommonLetterGrade = 2) {
    console.log('The most common letter grade was: C');
} else if (mostCommonLetterGrade = 3) {
    console.log('The most common letter grade was: D');
} else if (mostCommonLetterGrade = 4) {
    console.log('The most common letter grade was: F');
};

let gradesSum = grades.reduce(avgPercentage);
let avgPercent = gradesSum/grades.length;

function avgPercentage(total, num) {
    return total + num;
};

console.log(`The average percentage grade of all students was: ${avgPercent}%`);