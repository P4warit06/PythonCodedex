// Create a function named petShelterManager
// that helps manage a pet shelter system. The function receives two parameters:
// shelterData (an array of objects containing information about pets)
// newData (an object containing new data)
// The shelterData array contains objects with the following structure:

// {
//   id: "unique-id",
//   name: "pet-name",
//   type: "animal-type",
//   age: number,
//   isVaccinated: boolean,
//   adoptionStatus: "available" | "adopted"
// }
// Your function should do the following:

// Add the newData object to the shelterData array
// Before adding, verify that all required fields (id, name, type, age, isVaccinated, adoptionStatus) exist in newData
// If a field is missing, do not add the newData
// Return the updated shelterData array
const petShelterManager = (shelterData, newData) => { 
    let requiredFields = ["id", "name", "type", "age", "isVaccinated", "adoptionStatus"];
    if (!Array.isArray(shelterData) || typeof newData !== 'object' || newData === null) {
        throw new Error('Invalid input: shelterData must be an array and newData must be an object');
    }else if (shelterData.length === 0) {
        throw new Error('Shelter data cannot be empty');
    }
    for (let field of requiredFields) {
        if (!(field in newData)) {
            console.log(`Missing required field: ${field}`);
            return shelterData; // Do not add newData if any field is missing
        }
    }
    // Check if newData has the correct structure   
    if (typeof newData.id !== 'string' || typeof newData.name !== 'string' || typeof newData.type !== 'string' ||
        typeof newData.age !== 'number' || typeof newData.isVaccinated !== 'boolean' || 
        (newData.adoptionStatus !== 'available' && newData.adoptionStatus !== 'adopted')) {
        throw new Error('Invalid data structure in newData');
    }
    // Add newData to shelterData   
    shelterData.push(newData);
    console.log(shelterData);
    return shelterData; // Return the updated shelterData array

}
petShelterManager(
    [{ id: "A1", name: "Buddy", type: "Dog", age: 3, isVaccinated: true, adoptionStatus: "available" },
    { id: "B2", name: "Whiskers", type: "Cat", age: 5, isVaccinated: false, adoptionStatus: "adopted" }], 
    { id: "C3", name: "Rocky", type: "Hamster", age: 1, isVaccinated: true, adoptionStatus: "available" }
)