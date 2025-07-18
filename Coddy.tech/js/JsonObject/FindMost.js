// Create a function named findMostFrequentItem that takes an object where keys are item names and values are quantities. The function should:
// Find and return the name of the item with the highest quantity
// If there's a tie, return the first item that appears in the object
// Example Input:
// const inventory = {
//   "apple": 15,
//   "banana": 8,
//   "orange": 12,
//   "pear": 15
// }
// Expected Output:
// "apple"
const findMostFrequentItem = (inventory) => { 
    if (typeof inventory !== 'object' || inventory === null) {
        throw new Error('Invalid inventory object');
    }
    let maxQuantity = -1;
    let mostFrequentItem = null;
    for (const item in inventory) {
        if (inventory.hasOwnProperty(item)) {
            const quantity = inventory[item];
            if (typeof quantity !== 'number' || quantity < 0) {
                throw new Error('Invalid quantity for item: ' + item);
            }
            if (quantity > maxQuantity) {
                maxQuantity = quantity;
                mostFrequentItem = item;
            }
        }
    }
    if (mostFrequentItem === null) {
        throw new Error('No items found in inventory');
    }
    return mostFrequentItem;    
}
findMostFrequentItem({
    "apple": 15,
    "banana": 8,
    "orange": 12,
    "pear": 15
}); // Expected Output: "apple"