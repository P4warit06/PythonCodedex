// Create a function named analyzeSolarSystem that takes one argument, a JSON string solarSystemData. The JSON string contains information about planets in our solar system. Each planet has the following properties:

// name (string)
// type (string: "rocky" or "gas")
// numberOfMoons (number)
// discoveredIn (number, year)
// surfaceTemperature (object with min and max in Celsius)
// hasRings (boolean)
// Your task:

// Parse the JSON string into an object.
// For each planet:
// Add a property classification based on these rules:
// If it's a rocky planet and surfaceTemperature.max < 50°C: Potentially Habitable
// If it's a rocky planet and surfaceTemperature.max >= 50°C: Extreme Environment
// If it's a gas planet and numberOfMoons > 10: Complex System
// If it's a gas planet and numberOfMoons <= 10: Simple Gas Giant
// Add a property ageOfDiscovery that calculates how many years ago the planet was discovered (from the year 2010)
// If the planet has rings and more than 5 moons, add a property specialFeature with value Ring System with Rich Moon Population
// Return the modified object as a JSON string.
// Example input: 

// {
//   "planets": [
//     {
//       "name": "Mars",
//       "type": "rocky",
//       "numberOfMoons": 2,
//       "discoveredIn": -3000,
//       "surfaceTemperature": {
//         "min": -140,
//         "max": 20
//       },
//       "hasRings": false
//     },
//     {
//       "name": "Saturn",
//       "type": "gas",
//       "numberOfMoons": 82,
//       "discoveredIn": -3000,
//       "surfaceTemperature": {
//         "min": -178,
//         "max": -138
//       },
//       "hasRings": true
//     }
//   ]
// }
const analyzeSolarSystem = (solarSystemData) => { 
    if (typeof solarSystemData !== 'object' || !solarSystemData.planets) {
        throw new Error('Invalid solar system data');
    }
    
    const currentYear = 2010;
    
    solarSystemData.planets.forEach(planet => {
        // Calculate age of discovery
        planet.ageOfDiscovery = currentYear - planet.discoveredIn;
    
        // Determine classification
        if (planet.type === 'rocky') {
        planet.classification = planet.surfaceTemperature.max < 50 ? 'Potentially Habitable' : 'Extreme Environment';
        } else if (planet.type === 'gas') {
        planet.classification = planet.numberOfMoons > 10 ? 'Complex System' : 'Simple Gas Giant';
        }
    
        // Check for special features
        if (planet.hasRings && planet.numberOfMoons > 5) {
        planet.specialFeature = 'Ring System with Rich Moon Population';
        }
    });
    
     return JSON.stringify(solarSystemData);

}
analyzeSolarSystem({
  planets: [
    {
      name: "Mercury",
      type: "rocky",
      numberOfMoons: 0,
      discoveredIn: -3000,
      surfaceTemperature: { min: -180, max: 430 },
      hasRings: false,
    },
  ],
}); 