// Write your helper functions here!


require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    
    document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li> 
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } else {

        return "Not a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus")
    const fuelStatus = document.getElementById("fuelStatus")
    const cargoStatus = document.getElementById("cargoStatus")
    const launchStatus = document.getElementById("launchStatus")
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {


        window.alert('All fields are required')


    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert('Fuel level and Cargo levels must be numbers')
    } else {
        list.style.visibility = "visible"

        pilotStatus.innerHTML = (`Pilot ${pilot} is ready for launch`)
        copilotStatus.innerHTML = (`Co-pilot ${copilot} is ready for launch`)

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = (`Fuel level too low for launch`)
        } else {
            fuelStatus.innerHTML = ('Fuel level high enough for launch')
        }
        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = (`Cargo mass too heavy for launch`)
        } else {
            cargoStatus.innerHTML = ('Cargo mass low enough for launch')
        }
        if (cargoLevel <= 10000 && fuelLevel >= 10000) {
            launchStatus.innerHTML = (`Shuttle is Ready for Launch`)
        } else {
            launchStatus.innerHTML = (`Shuttle Not Ready for Launch`)
        }

    }
    console.log(launchStatus.innerHTML)
    if (launchStatus.innerHTML === 'Shuttle is Ready for Launch') {
        launchStatus.style.color = "green"
    } else if (launchStatus.innerHTML === 'Shuttle Not Ready for Launch') {
        launchStatus.style.color = "red"
}
}

async function myFetch() {
    let planetsReturned = await fetch("https:handlers.education.launchcode.org/static/planets.json"); 
    let data = await planetsReturned.json();
    return data; 
}

function pickPlanet(planets) {
  return planets[(Math.floor(Math.random() * planets.length))];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
