
//The current temperature is in degrees kelvin.
const kelvin = 0;
//Converting kelvin to celsius
const celcius = kelvin - 273;
//Convert celsius to fahrenheit
let fahrenheit = celcius*(9/5)+32;
//Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`)
