const firstAndLast = (arr) => {
  let start = arr[0];
  let end = arr[arr.length - 1];
  let result = start + end;
   console.log(result);
};
let arr = [10, 20, 30, 40, 50]; // output 60 (10+50)
let arr2 = [5, 4, 4, 5]; // output 10 (5+5)
let arr3 = [1, 2]; // output 3 (1+2)
let arr4 = [1,2,3,4,5,6,7]; // output 8 (1+7)
firstAndLast(arr4);
