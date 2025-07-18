// Create a function named getColumn that takes three arguments: 
// a 2D array matrix, an integer numberOfRows, and an integer colIndex.
//  The function should return an array containing all elements in the specified column colIndex.
const getColumn = (matrix, numberOfRows, colIndex) => {
    let column = [];
    for(let i = 0; i < numberOfRows; i++) {
        if (matrix[i] && matrix[i][colIndex] !== undefined) {
            column.push(matrix[i][colIndex]);
        }
    };
   console.log(column);
   
} 
getColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 1); // output [2, 5, 8]