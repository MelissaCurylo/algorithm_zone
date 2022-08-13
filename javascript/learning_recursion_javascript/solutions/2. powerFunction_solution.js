// Helper Link:    powers math refresher:   https://www.youtube.com/watch?v=-zUmvpkhvW8



// Solve in recursion only


// Write a function called power that takes a base and an exponent. If the exponent is 0 return 1.
// Zero Sample Output:     console.log(power(2,0)); returns 1
// Non-zero Sample Output: console.log(power(2,4)); returns 16


// Did you make a base case? if so, what is it?
// Did you test your function? if so, did zero return 1?


function power(base, exponent){
    if(exponent ==0) return 1;
    return base * power(base, exponent - 1);
}



console.log(power(2, 4)); // expected return value 16
console.log(power(2, 3)); // expected return value 8
console.log(power(2, 2)); // expected return value 4 
console.log(power(2, 1)); // expected return value 2
console.log(power(2, 0)); // expected return value 1