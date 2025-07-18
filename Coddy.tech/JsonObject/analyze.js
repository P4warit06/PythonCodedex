// Write a function named analyzeShoppingCart
//  that takes a shopping cart object. The shopping cart object contains items as keys and 
// their quantities as values. The function should return an object with the following information:
// totalItems: The total number of unique items (number of keys)
// totalQuantity: The sum of all quantities
function analyzeShoppingCart(cart) {
    if (typeof cart !== 'object' || cart === null) {
        throw new Error('Invalid shopping cart');
    } // check condition 
    let totalItems = Object.keys(cart).length; // Count of unique items
    let totalQuantity  = Object.keys(cart).reduce((sum, item) => {
        if (typeof cart[item] !== 'number' || cart[item] < 0) {
            throw new Error('Invalid quantity for item: ' + item);
        }
        return sum + cart[item];
    }
, 0); // Sum of all quantities
    if (totalItems === 0) {
        return { totalItems: 0, totalQuantity: 0 };
    }
    if (totalQuantity === 0) {
        return { totalItems: totalItems, totalQuantity: 0 };
    }
  return {
    totalItems: totalItems,
    totalQuantity: totalQuantity,
  };
}
console.log(analyzeShoppingCart({
  apples: 2,
  bananas: 3,
  oranges: 1,
})); // output { totalItems: 3, totalQuantity: 6 }
