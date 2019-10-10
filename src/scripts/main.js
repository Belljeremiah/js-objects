console.log("We is LEArnInag aboUT ObJeCTs!?")


const muscleCar = {
    carColor : "red",
    carYear : "2015", 
    carModel : "Mustang", 
    carManufacturer : "Ford", 
}

console.log("Muscle Car", muscleCar);

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

const parentOne = {
    name: "Bob",
    gender: "non-binary",
    age: 82

}

const parentTwo = {
    name: "Chad",
    gender: "Male",

}

const parentThree = {
    name: "Madonna",
    gender: "Madonna",
    age: 257

}

const child = {
    name: "Child",
    gender: "Undecided",
    age: 64
}

const familyMembers = [parentOne, parentTwo, parentThree, child]

console.log("Family Members", familyMembers)


// more exercises

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// Console logging the dimensions of the empire state building etc.

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

// Displaying the data remaining with a console log

const addressKey = "address"
const constructionKey = "constructionDate"
const ownerKey = "owner"
const costKey = "cost"
const architectKey = "architect"


console.log(`The empire state building is at ${empireStateBuilding[addressKey]}. It was built in ${empireStateBuilding[constructionKey]},
It is owned by ${empireStateBuilding[ownerKey]}, It cost ${empireStateBuilding[costKey]} to build
and was designed by ${empireStateBuilding[architectKey]}. `)
