// Create a function named transformArray that:

// Takes an array of numbers as its only argument.
// Removes all numbers less than 10.
// Multiplies the remaining numbers by 2
const transformArray = (arr) => { 
    let result = [];
    // Explain the code below:
    // Iterate through each number in the array
    // If the number is greater than or equal to 10, multiply it by 2 and add it to the result array
    // If the resulting array is empty, return an array with a single element: 20
    // Iterate through the array and apply the transformation
    // If the number is greater than or equal to 10, multiply it by 2 and add it to the result array
    arr.forEach(num => {
        if (num >= 10) {
        result.push(num * 2);
        }
    });
    
    // If the resulting array is empty, return an array with a single element: 20
    if (result.length === 0) {
        return [20];
    }
    console.log(result);
} 

transformArray([10, 15, 20, 25]); // output 





arr1 = [10, 20, 30];
arr2 = [20, 30, 40, 50];
 // output [20, 40, 60]