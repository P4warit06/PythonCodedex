// Create a function named findSumPatterns that takes a square matrix (2D array) and:

// Calculates and prints the sum of main diagonal elements
// Calculates and prints the sum of anti-diagonal elements
// Calculates and prints the sum of all border elements (count corner elements only once)
// Example Input:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Expected Output:

// Main diagonal sum: 15
// Anti-diagonal sum: 15
// Border sum: 40
const findSumPatterns = (matrix) => {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        console.log("Invalid matrix input");
        return;
    }

    const n = matrix.length;
    let mainDiagonalSum = 0;
    let antiDiagonalSum = 0;
    let borderSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i]; // Main diagonal
        antiDiagonalSum += matrix[i][n - 1 - i]; // Anti-diagonal

        // Border elements
        borderSum += matrix[i][0]; // Left column
        borderSum += matrix[i][n - 1]; // Right column
        if (i === 0 || i === n - 1) { // Top and bottom rows
            borderSum += matrix[i].reduce((a, b) => a + b, 0);
        }
    }

    // Remove double counted corners
    borderSum -= (matrix[0][0] + matrix[0][n - 1] + matrix[n - 1][0] + matrix[n - 1][n - 1]);

    console.log(`Main diagonal sum: ${mainDiagonalSum}`);
    console.log(`Anti-diagonal sum: ${antiDiagonalSum}`);
    console.log(`Border sum: ${borderSum}`);
    return {
        mainDiagonalSum,
        antiDiagonalSum,
        borderSum
    }
}
findSumPatterns([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Example usage
findSumPatterns([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]); // Expected Output
// Main diagonal sum: 15
// Anti-diagonal sum: 15
// Border sum: 40