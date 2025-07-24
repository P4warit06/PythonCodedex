// Create a function called uniqueElements that takes an array as an argument. 
// The function should return a new array containing only the unique elements from the input array.
const uniqueElements = (arr) => { 
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    const uniqueSet = new Set(arr); // Use Set to filter unique elements
    const uniqueArray = Array.from(uniqueSet); // Convert Set back to Array
    console.log(uniqueArray);
    return uniqueArray; // Return the array of unique elements
}
uniqueElements([1, 2, 2, 3, 4, 4, 5]);