// Write a function named analyzeBudget that:

// Takes three arguments: a list of prices, a list of item names, and a budget per item.
// Prints:
// A list of items you can afford.
// The total cost of the affordable items.
// The number of items out of budget.
// Example:
// For prices = [10, 20, 5, 15], items = ["Notebook", "Pen", "Eraser", "Bag"], and budget = 10,
//  the output should be:

// Affordable items: "Notebook", "Eraser"
// Total budget needed: 15
// Items out of budget: 2
const analyzeBudget = (prices, items, budget) => { 
    let affordableItems = [];
    let totalCost = 0;
    let outOfBudgetCount = 0;

    prices.forEach((price, index) => {
        if (price <= budget) {
            affordableItems.push(items[index]);
            totalCost += price;
        } else {
            outOfBudgetCount++;
        }
    });

    console.log(`Affordable items: ${affordableItems.join(", ")}`);
    console.log(`Total budget needed to buy it : ${totalCost}`);
    console.log(`Items out of budget: ${outOfBudgetCount}`);
    console.log(`Total price you have : ${budget}`);
    
}
analyzeBudget([10, 20, 5, 15], ["Notebook", "Pen", "Eraser", "Bag"],10);