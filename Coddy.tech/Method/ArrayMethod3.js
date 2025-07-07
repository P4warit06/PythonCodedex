// You are given an array numbers = [1, 2, 3, 4, 5]. Perform the following steps and print the results directly:

// Use concat() to add [6, 7, 8] to the end of the array and print the result.
// Use join() to convert the result of concat() into a string separated by commas and print it.
// Use slice() to extract the first three elements from the original numbers array and print them.
// Use splice() to replace the second element of numbers with 99 and print the modified numbers array.
let numbers = [1, 2, 3, 4, 5];
let arrConcat = numbers.concat([6, 7, 8]);
let joinArr = arrConcat.join(", ");
const slicedNumbers = numbers.slice(0, 3);
let modifiedNumbers = [...numbers]; // Create a copy of the original array ... mean Destructuring Array
modifiedNumbers.splice(1, 1, 99); // Replace the second element with 99
console.log(arrConcat);
console.log(joinArr);
console.log(slicedNumbers);
console.log(modifiedNumbers);

