// Create a function stackMatrices that receives an array of
//  2D arrays matrixList (which is essentially a 3D array). 
// All these arrays share the same number of columns. 
// The function should combine them vertically into one 2D array,
//  appending rows from each 2D array in sequence.
const stackMatrices = (matrixList) => { 
    if (!Array.isArray(matrixList) || matrixList.length === 0) {
        console.log("Invalid input");
        return [];
    }

    let stackedMatrix = [];
    
    for (let i = 0; i < matrixList.length; i++) {
        if (!Array.isArray(matrixList[i]) || matrixList[i].length === 0) {
            console.log("Invalid matrix at index " + i);
            continue;
        }
        stackedMatrix = stackedMatrix.concat(matrixList[i]);
    }

    console.log(stackedMatrix);
    return stackedMatrix;
}

