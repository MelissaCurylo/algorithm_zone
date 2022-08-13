// LinkedIn:                         https://www.linkedin.com/learning/javascript-arrays/solution-order-data?autoSkip=true&autoplay=true&resume=false
// Helper Link:   sort()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Helper Link:   reverse()          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// Helper Link:   find()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Helper Link:   findIndex()        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


//Sort, Reverse, Find, FindIndex
const students = [
  { name: 'John', grade: 75 },
  { name: 'Jane', grade: 93 },
  { name: 'Samantha', grade: 90 },
  { name: 'Michael', grade: 94 },
];

//Challenge Question #1
//Sort the array of students based on their grade,
//in descending order(largest to smallest).
students.sort((a, b) => {
  return b.grade - a.grade;
});
console.log('Students by Grade', students);

//Challenge Question #2
//After sorting the array, reverse the order of the array.
students.reverse();
console.log('Students reversed', students);

//Challenge Question #3
//Find a student in the array who has a grade over 90.
const overNinety = students.find((student) => student.grade > 90);
console.log('A student with a grade over 90', overNinety);
