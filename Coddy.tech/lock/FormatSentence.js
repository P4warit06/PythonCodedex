// Create a function named formatSentence that:

// Takes one argument: sentence (a string).
// Splits the sentence into words using spaces (" ") as the delimiter.
// Joins the words back together into a single string, separated by hyphens ("-").
// Returns the formatted string.
const formatSentence = (sentence) => { 
    let words = sentence.split(" "); // Split the sentence into words using spaces
    let formattedString = words.join("-"); // Join the words with hyphens
    // return formattedString; // Return the formatted string
    console.log(formattedString);
} 
formatSentence("Hello world this is a test sentence"); // "Hello-world-this-is-a-test-sentence"
formatSentence("Coding is super fun"); // "Coding-is-super-fun"
formatSentence("Hello world"); // "Hello-world"
formatSentence("Coddy"); // "JavaScript-is-amazing"