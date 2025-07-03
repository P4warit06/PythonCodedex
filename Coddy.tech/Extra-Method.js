// Your task is to perform the following operations in order:

// Add "yellow" to the end of the array using a method.
// Remove the first color from the array and store it in a variable named removedColor.
// Add "purple" to the beginning of the array using a method.
// Remove the last color from the array and store it in a variable named lastColor.
// Finally, print the following:

// The updated array.
// The value of removedColor.
// The value of lastColor.

let colors = ["red", "blue", "green"];
let add = colors.push("yellow");
let removedColor = colors.shift(); // removes the first element
let addPurple = colors.unshift("purple"); // adds "purple" to the beginning
let lastColor = colors.pop(); // removes the last element
console.log(colors);
console.log(removedColor); // output "red"
console.log(addPurple); // output 4 (length of the array after adding "purple")
console.log(lastColor); // output "yellow"


