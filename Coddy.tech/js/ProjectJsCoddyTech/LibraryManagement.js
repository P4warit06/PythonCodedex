// Add the case "addBook". This case should:
// Create a new book object using the currentData parameter which holds the following properties:
// title (string)
// author (string)
// year (string)
// genre (string)
// Generate an id (use libraryData.books.length + 1)
// Set default values for: isRead, rating, borrowed, borrowedBy, borrowDate (like in the initial data)
// Add the new book to libraryData.books array
// Add the string Book added successfully! to the results array 
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
      case "addBook":
        const newBook = {
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData.books.push(newBook);
        results.push("Book added successfully!");
        break;
    
      default:
        results.push("Invalid action!");
    }
  }
  return results;
}
console.log(manageLibrary(
  ["addBook", "printBooks"][
    ({
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
      genre: "Fantasy",
    },
    null)
  ]
))
