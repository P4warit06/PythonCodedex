//  Create a function named calculateRestaurantBill 
//  that takes a JSON object representing a restaurant order as input.
//  Each key in the object is a dish name, and each value is another object containing:

// # price (number)
// # quantity (number)
// # isSpecialOffer (boolean) 
// # if true, there's a 20% discount on that dish The function should:

// # Calculate the total bill
// # Apply any special offer discounts
// # Return an object containing:
// #  totalBeforeDiscount
// # totalDiscount
// # finalTotal
const calculateRestaurantBill = (order) => { 

    if (typeof order !== 'object' || order === null) {
        throw new Error('Invalid order');
    }
    
    let totalBeforeDiscount = 0;
    let totalDiscount = 0;
    
    for (const dish in order) {
        if (order.hasOwnProperty(dish)) {
        const { price, quantity, isSpecialOffer } = order[dish];
    
        if (typeof price !== 'number' || typeof quantity !== 'number' || quantity < 0) {
            throw new Error(`Invalid price or quantity for dish: ${dish}`);
        }
    
        const dishTotal = price * quantity;
        totalBeforeDiscount += dishTotal;
    
        if (isSpecialOffer) {
            const discount = dishTotal * 0.20; // 20% discount
            totalDiscount += discount;
        }
        }
    }
    
    const finalTotal = totalBeforeDiscount - totalDiscount;
    
    return {
        totalBeforeDiscount,
        totalDiscount,
        finalTotal,
    };
}
calculateRestaurantBill({
  "Sushi Platter": { price: 45.99, quantity: 2, isSpecialOffer: true },
  "Green Tea": { price: 3.5, quantity: 4, isSpecialOffer: false },
  "Miso Soup": { price: 2.99, quantity: 3, isSpecialOffer: true },
});