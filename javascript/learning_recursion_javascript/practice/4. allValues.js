// Helper Link:      slice()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Helper Link:      length()            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
// Helper Link:      shift()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift


// Solve in recursion only using slice(), length(), and shift() methods.


// Write a function named allValues that will keep an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function.

/*
Sample :
    var isLessThanSeven = allValues([1,2,9], function(num){ 
        return num < 7;});

        console.log(isLessThanSeven); // return should be false
*/


// Did you make a base case? if so, what is it?


var isLessThanSeven = allValues([1,2,9], function(num){ 
    return num < 7;
});

    console.log(isLessThanSeven); // return should be false


function allValues(array, callback){

}