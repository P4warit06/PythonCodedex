// Create a function called mergeSettings that takes three parameters:

// An object defaultSettings containing default application settings
// An object userSettings containing user's custom settings
// An object temporarySettings containing temporary settings
// The function should:

// Merge all three settings objects using the spread operator
// Make sure temporarySettings take highest priority, followed by userSettings, and finally defaultSettings
//  Return the merged settings object
const mergeSettings = (defaultSettings, userSettings, temporarySettings) => {
    const mergedSettings = { ...defaultSettings, ...userSettings, ...temporarySettings };
    console.log(mergedSettings);
    return mergedSettings;

}
mergeSettings({"theme":"light","fontSize":12,"notifications":true,"language":"en"}  , 
{"theme":"dark","fontSize":14},
{"notifications":false,"volume":70} )