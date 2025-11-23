// Tasks #1
// Array object with key value pairs (key) name: and (value)"Alicia" score: 80, etc...
const students = [
  { name: "Alicia", score: 55, city: "New York" },
  { name: "Luis", score: 90, city: "New York" },
  { name: "Maria", score: 70, city: "Los Angeles" },
  { name: "Juan", score: 100, city: "Los Angeles" },
  { name: "Sarah", score: 60, city: "New York" }
];

// Freeze Varible
const MIN_PASSING_GRADE = 70;

function getPassingStudentsNames() {
  const passingStudents = [];
  students.forEach(student => {

    if (student.score >= MIN_PASSING_GRADE) {
      passingStudents.push(student.name.toUpperCase());
    }
  });
  return passingStudents;
}

// Test the function
const passingStudents = getPassingStudentsNames(students);

console.log("Passing Students: ", passingStudents);
