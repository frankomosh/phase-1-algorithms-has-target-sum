function hasTargetSum(array, target) {
  const realNumbers = new Set();
  for (const element of array) {
    const compliment = target - element;
    const complement = target - element;

    if (realNumbers.has(compliment)) return true;
    if (realNumbers.has(complement)) return true;

    realNumbers.add(element);
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
  Function hasTargetSum accepts two parameters, an array and target
  for each value in the array;
   if number pair adds up to the target integer, 
     return true
   else
     return false 
*/

/*
  The function uses a for..of to iterate through values in the array
  Two variables , compliment and complement are used to store the difference between target value and each element in the array
  If the difference returned is similar to a particular value in the array, the function would return true, if not, it would return a false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
