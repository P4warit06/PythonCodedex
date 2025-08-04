// Create a function called formatBlogTitle that:

// Takes a blog title string as input
// Trims any whitespace from both ends
// Makes the first character of each word uppercase
// Replaces all occurrences of "Javascript" (case insensitive) with "JavaScript"
// Returns the formatted title
// Example Input:

// "  how to learn javascript for beginners  "
// Expected Output:
// "How To Learn JavaScript For Beginners"

function formatBlogTitle(title) {
  let formattedTitle = title.trim(); // Trim whitespace from both ends
  formattedTitle = formattedTitle.replace(/\b\w/g, char => char.toUpperCase());// Capitalize first letter of each word
  formattedTitle = formattedTitle.replace(/javascript/gi, 'JavaScript'); // Replace "javascript" with "JavaScript"
  console.log(formattedTitle);
}
formatBlogTitle("  how to learn javascript for beginners  "); // "How To Learn JavaScript For Beginners"
formatBlogTitle("understanding async javascript"); 
formatBlogTitle("   top 10 javascript libraries"); 