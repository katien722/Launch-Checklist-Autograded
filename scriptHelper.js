// Write your helper functions here!


require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
      
    
        window.alert('All fields are required')

        
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert('Fuel level and Cargo levels must be numbers')
    } else {
        list.style.visibility = "visible"
        const pilotStatus = document.getElementById("pilotStatus")
        const copilotStatus = document.getElementById("copilotStatus")
        const fuelStatus = document.getElementById("fuelStatus")
        const cargoStatus = document.getElementById("cargoStatus")

        pilotStatus.innerHTML = (`Pilot ${pilot} is ready for launch`)
 copilotStatus.innerHTML = (`Co-pilot ${copilot} is ready for launch`)

   if 
    (fuelLevel < 10000)
   fuelStatus.innerHTML = (`Fuel level too low for launch`)

   } if (cargoLevel > 10000)
    cargoStatus.innerHTML = (`Cargo mass too heavy for launch`)

}

    

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;