// You will be creating a library management system. 
// Start by initializing the system with the provided 
// data and creating the main function structure.
// Create a variable called libraryData with this exact initial data:
// {
//     books: [
//         {
//             id: 1,
//             title: "The Great Gatsby",
//             author: "F. Scott Fitzgerald",
//             year: 1925,
//             genre: "Fiction",
//             isRead: false,
//             rating: 0,
//             borrowed: false,
//             borrowedBy: "",
//             borrowDate: ""
//         }
//     ],
//     readers: [
//         {
//             name: "John Smith",
//             favoriteGenre: "Fiction",
//         }
//     ]
// }
// Now follow these steps:

// Create a function called manageLibrary that takes two parameters:

// actions (array of strings)
// data (array of objects)
// The function should process each action in the actions array in sequence, using the corresponding data object from the data array at the same index. For example, the action at actions[i] uses the data at data[i].

// Create a loop that goes through each action in the actions array, then inside the loop:

// Create an empty result array that will hold all of the results
// Create a switch statement that will handle different cases
// Add a case printBooks inside the switch statement that 
// will add the current books inside the libraryData to the results array
// Add a case printReaders inside the switch statement that will add the current readers inside the libraryData to the results array
// Add a default case that adds an “Invalid action!” to the results array
let libraryData = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
  ],
  readers: [
    {
      name: "John Smith",
      favoriteGenre: "Fiction",
    },
  ],
};

function manageLibrary(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "printBooks":
        if (!libraryData.books) {
          libraryData.books = [];
        }
        results.push(libraryData.books);
        break;
      case "printReaders":
        if (!libraryData.readers) {
          libraryData.readers = [];
        }
        results.push(libraryData.readers);
            break;
        case  "addBook":
        if (currentData && currentData.book) {
          libraryData.books.push(currentData.book);
          results.push("Book added successfully!");
        } else {
          results.push("No book data provided!");
        }
        break;
      default:
        results.push("Invalid action!");
    }
  }
  return results;
}
console.log(manageLibrary(
  ["printBooks", "printReaders", "invalidAction"],
  [{}, {}]
))
