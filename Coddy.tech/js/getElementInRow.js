function getElementsInRow(grid, rowIndex) {
  // TODO: Return an array with all elements in the specified row
  // If rowIndex is out of bounds, return an empty array
    let result = [];
    if (rowIndex >= 0 && rowIndex < grid.length) {
        result = grid[rowIndex];
    } else { 
        result = [];
    }
    console.log(result);
    
}
getElementsInRow([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1); // output [4, 5, 6]
