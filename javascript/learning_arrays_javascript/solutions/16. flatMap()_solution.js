// Helper Link:   flatMap()      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
// Helper Link    flat()         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const wordJumble = ['shampoo', 'conditioner', 'soap'];

//You want to create a word jumble which requires you to split
//the following array of words into individual letters. You want
//a new array, that is flattened to a single level.

//Hint: You will need to use the string method .split()
const splitWords = wordJumble.flatMap((word) => word.split(''));
console.log('New array with single letters', splitWords);
