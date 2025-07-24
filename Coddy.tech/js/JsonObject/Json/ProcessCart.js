// Create a function named processCart that takes 
// a JSON string representing a shopping cart.
//  The cart contains an array of products with names and prices. Your task is to:

// Parse the JSON string into a JavaScript object
// Create TWO separate carts from it
// In the second cart:
// Add a discounted property to each item set to false
// Apply a 10% discount to all items that have price greater than 50
// Set 'discounted' to true for items that received the discount
// Return an array containing both carts
const processCart = (jsonString) => {
    let cart; 
    try {
        cart = JSON.parse(jsonString);
    } catch (error) {
        throw new Error('Invalid JSON string');
    }
    if (!cart || !Array.isArray(cart.products)) {
        throw new Error('Invalid cart structure');
    }
    // Create the first cart (original)
    const originalCart = cart.products.map(product => ({
        name: product.name,
        price: product.price
    }
    ));
    // Create the second cart (with discounts)      
    const discountedCart = cart.products.map(product => {
        const discountedPrice = product.price > 50 ? product.price * 0.9 : product.price;
        return {
            name: product.name,
            price: discountedPrice,
            discounted: product.price > 50
        };
    });
    return [originalCart, discountedCart];
 }
processCart(
  '{"products": [{"name": "Laptop", "price": 1200}, {"name": "Mouse", "price": 25}, {"name": "Keyboard", "price": 75}]}'
);
