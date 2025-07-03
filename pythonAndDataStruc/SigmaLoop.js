// let n = 5;
// function sigma(n) {
//   let sum = 0; // initialize sum
//   for (let i = 1; i <= n; i++) {
//     sum += i; // add i to sum
//   }
//   console.log("Sum from 1 to", n, "is:", sum); // print the result
// }
// sigma(n); // call the function
// let calculateArea = function Multiple(width,height){
//     let result = width * height
//     return result
// }

// // Don't change the lines below
// console.log(calculateArea(5, 10));
// console.log(calculateArea(3, 7));
// const calculateBMI = (weight, height) => {
//   let result = weight / (height * height);
//   return result;
// };

// // Don't change the lines below
// console.log(calculateBMI(70, 1.75));
// console.log(calculateBMI(80, 1.8));

const isValid = (username, password) => {
  if (username === "user" && password === "qweasd") {
    return true;
  }else if (username === "admin" ) {
    return true;
  }
    return false;
};
console.log(isValid("admin", "pass"));
console.log(isValid("user", "pass"));
console.log(isValid("user", "qweasd"));
console.log(isValid("user", "other pass"));
console.log(isValid("admin", "other pass"));
console.log(isValid("not_a_user", "pass"));
console.log("Welcome to FizzBuzz!");
let num = 5; // Don't change this line
const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 7 === 0) {
    return console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    return console.log("Fizz");
  } else if (num % 7 === 0) {
    return console.log("Buzz");
  } else {
      let StringConvert= num.toString(); 
      return StringConvert; 
  }
};
fizzbuzz(5);

let balance = 0;
balance += 100;
balance *= 1.10;
balance -= 50;
console.log(balance);
