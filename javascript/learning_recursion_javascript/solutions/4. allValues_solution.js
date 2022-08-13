// Helper Link:      slice()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Helper Link:      length()            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
// Helper Link:      shift()             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift


// Solve in recursion only using slice(), length(), and shift() methods.


// Write a function named allValues that will keep an array and a callback and returns true if every value int he array returns true when passed as a parameter to the callback function.  

/*
Sample :
    var isLessThanSeven = all([1,2,9], function(num){ 
        return num < 7;});

        console.log(isLessThanSeven); // return should be false
*/


// Did you make a base case? if so, what is it?


var isLessThanSeven = allValues([1,2,9], function(num){ 
    return num < 7;
});

    console.log(isLessThanSeven); // return should be false


function allValues(array, callback){
    var copy = copy || array.slice(); // shallow copies of array

    if(copy.length === 0) return true;

    if(callback(copy[0])){
        copy.shift(); // removes first element from array
        return allValues(copy, callback);
    }else {
        return false;
    }
}