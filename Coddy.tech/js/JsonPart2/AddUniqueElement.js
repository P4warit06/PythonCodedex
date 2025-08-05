// Create a function called addUniqueElements
//  that takes two parameters: an array and another array. 
// The function should convert the first array to a Set, 
// and add all elements from the second array to the Set, 
// but only if they don't already exist in the Set.
//  Finally convert the set to an array and return it.
const addUniqueElements = (arr1, arr2) => {
    let uniqueSet = new Set(arr1);
    arr2.forEach(item => {
        uniqueSet.add(item);
    });
    return Array.from(uniqueSet);
 }
addUniqueElements([1, 2, 3], [2, 3, 4, 5]); // [1, 2, 3, 4, 5]