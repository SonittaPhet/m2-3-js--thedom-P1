// Exercise 7
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array with 2 values,
// and returns a new string made of the original string repeated by the provided number of times.
//
// - The first value of the array must be a string, and the second a number.
// - If a negative number or zero is specified, return an empty string.
// - If any invalid parameters are supplied return undefined.
//
// example: repeat(['foo', 3]) returns 'foofoofoo'

function repeat(arr) {
  let resultArray = "";

  if(Array.isArray(arr) && typeof arr[0] == "string" && typeof arr[1] == "number"){

    if(arr[1]<=0){return "";}

    if(arr[1]==1){return arr[0];}
    resultArray = arr[0];
    for(let i =0; i<(arr[1]-1) ;i++){
      resultArray += arr[0];
    }
    return resultArray;
  }

  return undefined;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = repeat;
