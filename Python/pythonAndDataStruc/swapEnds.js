// Create a function named swapEnds that receives one argument:

// An array
// The function swaps the first and the last elements of the array and returns the modified array.

// For example with the following arguments: swapEnds([1, 2, 3, 4]) the function will return [4, 2, 3, 1]
function swapEnds(arr) {
  if (arr.length < 2) return arr; // No need to swap if array has 0 or 1 element

  let start = arr[0]; // ตัวเริ่ม
  arr[0] = arr[arr.length - 1]; // ตัวสุดท้าย
  arr[arr.length - 1] = start; // นำตัวเริ่มมาใส่ที่ตัวสุดท้าย
 console.log(arr);
}
let arr = [1, 2, 3, 4]; // output [4, 2, 3, 1]
// let arr = [6, 6, 6]; // output [6, 6, 6]
// let arr = [8, 3, 1, 5, 3, 1]; // output [1, 3, 1, 5, 3, 8]
// let arr = [2, 9]; // output [9, 2] 
swapEnds(arr);