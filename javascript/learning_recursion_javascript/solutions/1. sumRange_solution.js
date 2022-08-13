// Solve in recursion only


// Write a function called sumRange that will take a number and return the sum of all numbers passed in.
// Example: sumRange(4) will return 10, 1+2+3+4 = 10


// Base case = way for loop to exit
// Base case here is the input value = 1 and when it returns 1 the loop will exit

var output = sumRange(4)
console.log(output);

function sumRange(num){
    if(num == 1) return 1;
    
    return num + sumRange(num - 1);
}