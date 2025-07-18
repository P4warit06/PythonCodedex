// Create a function named stringWeaver that takes two strings and returns a new string where:

// Ignore numbers as if they don't exists. Remove all of the numbers from both strings first.
// Characters from both strings alternate (first char from first string, first char from second string, second char from first string, etc.)
// If one string is longer than the other, add the remaining characters at the end
// Convert all vowels to uppercase
// Return the final string
const stringWeaver = (str1, str2) => { 
    let cleanedStr1 = str1.replace(/[0-9]/g, ''); 
    let cleanedStr2 = str2.replace(/[0-9]/g, ''); 
    let result = ''; 
    let maxLength = Math.max(cleanedStr1.length, cleanedStr2.length);
    for (let i = 0; i < maxLength; i++) {
        if (i < cleanedStr1.length) {
            result += cleanedStr1[i];
        }
        if (i < cleanedStr2.length) {
            result += cleanedStr2[i];
        }
    }
    // Convert vowels to uppercase
    result = result.replace(/[aeiou]/g, (match) => match.toUpperCase());
    console.log(result);
     


}
// Example usage        
stringWeaver("hello123", "world456"); // "hWeLlOoRld"