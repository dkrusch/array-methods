const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(planet => {
    let thing = `<span>${planet.charAt(0).toUpperCase() + planet.slice(1)} </span>`
    planetEl.innerHTML += thing;
})

/*
Use the map method to create a new array where the
first letter of each planet is capitalized. Use the
`toUpperCase()` method on strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let upperPlanets = planets.map(upperCaseIt)
console.log("this", upperPlanets)
console.log(planets)

function upperCaseIt(planet)
{
    return planet.charAt(0).toUpperCase() + planet.slice(1)
}

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let eplanets = []
planets.filter(planet => {
    if (planet.includes("e"))
    {
        eplanets.push(planet)
    }
})
console.log(eplanets)

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((i, y) => y - i).filter(integer => integer < 20).map(i => (i * 1.5) - 1).reduce((a, b) => a + b, 0))