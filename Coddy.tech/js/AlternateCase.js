// Create a function named alternateCase 
// that takes a string as input and returns a new string
//  where the cases are alternated. The first character should be uppercase, 
// the second lowercase, the third uppercase, and so on.
const alternateCase = (str) => { 
    return str.split('').map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }
).join('');     
    // Join the characters back into a string
} 
alternateCase("hello world"); // "HeLlO WoRlD"