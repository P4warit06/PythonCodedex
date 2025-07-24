// Create a function named analyzeCarData that takes a JSON object as input.
//  The object contains data about a car dealership's inventory where:

// keys are the car models
// values are the prices
// The function should return an object containing:

// mostExpensive: the name of the most expensive car
// cheapest: the name of the cheapest car
//  averagePrice: the average price of all cars
const analyzeCarData = (carData) => { 
    if (typeof carData !== 'object' || carData === null) {
        throw new Error('Invalid car data');
    }
    let mostExpensive = '';
    let cheapest = '';  
    let totalPrice = 0;
    let carCount = 0;
    let maxPrice = -Infinity;
    let minPrice = Infinity;
    for (const [car, price] of Object.entries(carData)) {
        if (typeof price !== 'number' || price < 0) {
            throw new Error(`Invalid price for car: ${car}`);
        }
        totalPrice += price;
        carCount++;
        
        if (price > maxPrice) {
            maxPrice = price;
            mostExpensive = car;
        }
        
        if (price < minPrice) {
            minPrice = price;
            cheapest = car;
        }
    }
    const averagePrice = totalPrice / carCount;         
    return {
        mostExpensive,
        cheapest,
        averagePrice: parseFloat(averagePrice.toFixed(2)) // rounding to 2 decimal places
    };

}
console.log(
    analyzeCarData({
        "Rolls-Royce Phantom": 460000,
        "Bentley Continental GT": 202500,
        "Mercedes-Maybach S680": 229000,
        "Aston Martin DB11": 205600,
        "Porsche 911 GT3": 169700,
    }));