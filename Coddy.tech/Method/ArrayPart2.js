// Create a program that receives two arrays of numbers as input (given) 
// and prints a new array of all elements that are in the first array but NOT in the second array
function differenceArrays(arr1, arr2) {
  let result = [];
  arr1.forEach(num => {
    if (!arr2.includes(num)) {
      result.push(num);
    }
  });
  console.log(result);
}
differenceArrays([1, 2, 3, 4, 5], [3,4,6]); // output [1, 2, 5]