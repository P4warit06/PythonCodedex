// Write a program that receives an array of numbers as input (given), and prints an array of
//  the numbers that are either below 50 or are divisible by 5.
//  Use the forEach method.
function filterNumbers(arr) {
  let result = [];
  arr.forEach(num => {
    if (num < 50 || num % 5 === 0) {
      result.push(num);
    }
  });
  console.log(result);
}
// Example usage:   
filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
filterNumbers([23, 432, 213, 1234, 5555]);
filterNumbers([201, 203, 207]);
filterNumbers([500,600,700])