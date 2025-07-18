// Write a function named processArray that takes an array of numbers as an argument. The function should do the following:

// Remove the last element from the array.
// Add the number 10 to the end of the array.
// Sort the array.
// Check if the array includes the number 5. If it does, replace it with the number 50.
// Reverse the order of the elements in the array.
// Return the modified array.
function processArray(arr) {
  arr.pop();
  arr.push(10);
  arr.sort();
  if (arr.includes(5)) {
    arr[arr.indexOf(5)] = 50;
  }
  arr.reverse();
 console.log(arr);
 ;
}


processArray([1, 2, 3, 4, 5]); // output 4,3,2,1,10
processArray([1, 2, 3, 4, 5, 6]); // output [50, 4, 3, 2, 10, 1]
processArray([9, 6, 3, 12]); // output  [9, 6, 3, 10]
processArray([9, 6, 3, 12]); // output  [9, 6, 3, 10]
