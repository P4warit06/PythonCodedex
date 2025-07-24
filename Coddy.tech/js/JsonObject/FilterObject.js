// Create a function named filterObject that:

// Takes an object and an array of keys to keep
// Returns a new object containing only the specified keys from the original object
// For example:

// // Original object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   job: "Developer"
// };

// // Call your function
// const filtered = filterObject(person, ["name", "job"]);

// // Result should be:
// // { name: "John", job: "Developer" }
// If a key in the "keep list" doesn't exist in the original object, just ignore i
const filterObject = (obj, keysToKeep) => { 
    let filteredObjects = {};
    keysToKeep.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            filteredObjects[key] = obj[key];
        }
    });
    return filteredObjects; 
}
filterObject({name: "John", age: 30, city: "New York", job: "Developer"}, ["name", "job"]);