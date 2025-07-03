const sumOfEvens = (number) => {
let result = 0;
  for (let i = 1; i <= number; i++) {
    if (i% 2 === 0) {
      result += i;
    }
  }
    console.log(result);
};
sumOfEvens(5);
sumOfEvens(22);
sumOfEvens(9);
sumOfEvens(1);
sumOfEvens(99);
console.log("Welcome to FizzBuzz!");
function fizzbuzz(number) {
  for (let i = 1; i < number; i++) {
    let result = "";
    if (number % 3 == 0) {
      result += "Fizz";
    }
    if (number % 7 == 0) {
      result += "Buzz";
    }
    if (result == "") {
      result = String(number);
    }
    return result;
  }
}
let num = 21;
console.log(fizzbuzz(num));

