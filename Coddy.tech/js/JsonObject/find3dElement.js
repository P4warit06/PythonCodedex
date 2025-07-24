// Create a function named find3DElement that takes:

// A 3D array of any values (array3D)
// Three indices (x, y, z) representing the position to find
// The function should return the element at the specified position if it exists
// If any index is out of bounds, return the string "Invalid coordinates"
// Example Input:

// const data = [
//   [["a", "b"], ["c", "d"]],
//   [["e", "f"], ["g", "h"]]
// ];
// find3DElement(data, 0, 1, 0); // Should access data[0][1][0]
// Expected Output:

// "c"
const find3DElement = (array3D, x, y, z) => { 
    if (
        x < 0 || x >= array3D.length ||
        y < 0 || y >= array3D[x].length ||
        z < 0 || z >= array3D[x][y].length
    ) {
        return "Invalid coordinates";
    }
    return array3D[x][y][z];
}
find3DElement([[["apple","banana"],["cherry","date"]],[["egg","fig"],["grape","honeydew"]]],0,1,1  ) 