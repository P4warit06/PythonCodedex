// Project Overview
// The Grocery List Tracker helps you manage a shopping list using an array. You can:

// Add items to the list.
// Remove specific items.
// View the entire list with item numbers.
// This simple project demonstrates real-life use of arrays 
// and basic JavaScript operations like adding, removing, and iterating through elements.
//  Perfect for beginners!
let groceryList = [];
const addItem = (str) => {
    let added = groceryList.push(str);
  console.log(`${str} added to the grocery list.`);
};
// Now, add a function named removeItem that gets a string (the item) and removes it from the list.
// In the end, the function will output:
// Milk removed from the grocery list.
// For the input "Milk".
// And if the item does not exist in the list:
// Milk is not in the grocery list.
// Add the following code at the end of your code to test it (instead of the previous testing code):
const removeItem = (str) => { 
    let index = groceryList.indexOf(str);
    if (index !== -1) {
        groceryList.splice(index, 1);
        console.log(`${str} removed from the grocery list.`);
    } else {
        console.log(`${str} is not in the grocery list.`);
    }
    return groceryList;
}
const viewList = () => { 
    if (groceryList.length === 0) {
      // No items in the list
      console.log("The grocery list is empty.");
    }
    console.log("Grocery List:");  
    groceryList.forEach((item, index) => { // loop through the grocery list
        console.log(`${index + 1}. ${item}`);
    });
   
}
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
