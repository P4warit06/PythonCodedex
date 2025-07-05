let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
// Your task is to:
// Use slice to extract the numbers starting from 15 (inclusive) to 35 (inclusive).
// Print the resulting array.
let slicedNumbers = numbers.slice(2, 7); // Extracts from index 2 (15) to index 7 (35, exclusive)
console.log(slicedNumbers); // Output: [15, 20, 25, 30, 35]