// Create a function named removeKeys that takes two parameters:

// An object
// An array of strings (keys to be removed)
// The function should return a new object with the specified keys removed.
const removeKeys = (obj, keysToRemove) => {
    if (typeof obj !== 'object' || obj === null || !Array.isArray(keysToRemove)) {
        throw new Error('Invalid input: obj must be an object and keysToRemove must be an array');
    }
    
    const newObj = { ...obj }; // Create a shallow copy of the object
    
    keysToRemove.forEach(key => {
        delete newObj[key]; // Remove the key from the copied object
    });
    console.log(newObj);
    return newObj; // Return the modified object
};
removeKeys( { name: "John", age: 30, city: "New York" }, ["age", "city"] );
// Expected Output: { name: "John" }