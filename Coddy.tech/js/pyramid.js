let  n =5 // Don't change this line
let rows = parseInt(n / 2) + 1;
for (let i = 0; i < rows; i++) {
  let stars = "";
  stars += "*".repeat(2 * (i + 1) - 1);
  console.log(stars);
}
 