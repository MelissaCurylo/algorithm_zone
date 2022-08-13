// Helper Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length


const pets = ['dog', 'cat', 'rabbit', 'hamster'];

//Use the length property to determine how many objects are in the array
const petsLength = pets.length;
console.log('Length of pets array', petsLength);

//Using direct assignment, add 'snake' to the array in index position 2.
pets[2] = 'snake';
console.log('Snake added to array', pets);
