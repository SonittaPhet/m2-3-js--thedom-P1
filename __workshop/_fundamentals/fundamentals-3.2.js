// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function that returns the LAST character
// of the string that is passed to it.
//
// - If it's an empty string, return `undefined`
// - If it's a number, return `undefined`

function lastCharacter(str) {
  let inString = str;
  let lastChar = undefined;

  if(str.length-1 >0 ){
    lastChar = inString.charAt(inString.length-1);
  }

  return lastChar;
}


// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases to the test.

// We need to export the function in order for our unit test to have access to it.
module.exports = lastCharacter;
