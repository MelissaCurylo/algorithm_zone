// Helper Link:   reduce()            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Helper Link    reduceRight()       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight


const bills = [1200, 29.99, 65.93, 17.32, 44.76];

//Determine how much the total bills are using the reduce method
const totalBills = bills.reduce((total, bill) => total + bill);
console.log('Total bills are:', totalBills);
