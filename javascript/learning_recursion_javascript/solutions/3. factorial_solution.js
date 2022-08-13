// Helper Link:    factorial math refresher:   https://www.youtube.com/watch?v=eXcJOgNPYJE



// Solve in recursion only


// Write a function named factorial that returns the factorial of a number. 

// Factorial refresher              --> factorial of a number = result of that number multiplied by the number before it until you reach 1. 
// Factorial refresher example:     --> factorial(3); // 3 * 2 * 1 === 6
// Zero Sample Output:     console.log(power(2,0)); returns 1
// Non-zero Sample Output: console.log(power(2,4)); returns 16


// Did you make a base case? if so, what is it?


function factorial(num){
    if(num == 1) return 1;

    return num * factorial(num - 1);  // pending multiplier
}



console.log(factorial(5)); // expected return value 120
console.log(factorial(6)); // expected return value 720
console.log(factorial(7)); // expected return value 5040
console.log(factorial(10)); // expected return value 3,628,800