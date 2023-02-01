
//The forecast is 293 Kelvin
const kelvin = 293;

//Celsius is always 273
const celsius = kelvin - 273;

//Newton scale is another measurement
const newton = Math.floor(celsius * (33 / 100));

//Fahrenheit is a bit more complex
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);




console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton.`)
