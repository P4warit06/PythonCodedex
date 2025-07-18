// Create a function named mergeCars that 
// takes two car objects as parameters. 
// The function should merge the second car's properties
//  into the first car's properties and return a new car object
//  without modifying any of the original objects.
const mergeCars = (car1, car2) => { 
    const mergedCar = { ...car1, ...car2 };
    console.log(mergedCar);

}
mergeCars({ brand: "Toyota", model: "Camry", year: 2020, color: "Silver" } , 
{ color: "Black", mileage: 50000, transmission: "Automatic" }
); 