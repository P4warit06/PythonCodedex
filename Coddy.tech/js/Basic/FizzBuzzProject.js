// Don't change this line
let num = 21;
console.log("Welcome to FizzBuzz!");
function fizzbuzz(number) {
  let result = "";
  if (number % 3 == 0) {
    result += "Fizz";
  }
  if (number % 7 == 0) {
    result += "Buzz";
    }
    if (String(number).includes("3") && number % 3 !== 0 && number % 7 !== 0) {
    result += "Almost Fizz";
  }
  if (result == "") {
    result = String(number);
  }
  return result;
}

for (let i = 1; i <= num; i++) {
  console.log(fizzbuzz(i));
}
