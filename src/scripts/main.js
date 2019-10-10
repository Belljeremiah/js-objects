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

// Output names of part time instructors. 2 output only andy and zoe.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}



console.log(`These are the part time instructors ${nashvilleSoftwareSchool.instructors.partTime}, these are the full time instructors ${nashvilleSoftwareSchool.instructors.fullTime}.`);

// Doing previous as a for loop
const fullTimeInstructors =nashvilleSoftwareSchool.instructors.fullTime

for(let i = 0; i < fullTimeInstructors.length; i++) {
    console.log(fullTimeInstructors[i])
}

const partTimeInstructors =nashvilleSoftwareSchool.instructors.partTime

for(let i = 0; i < partTimeInstructors.length; i++) {
    console.log(partTimeInstructors[i])
}

console.log(`Male instructor ${nashvilleSoftwareSchool.instructors.fullTime[4]} Female Instructor ${nashvilleSoftwareSchool.instructors.partTime[0]};

`)

// how to do it with a for in statement loop

for(let key in nashvilleSoftwareSchool.instructors) {
    console.log(nashvilleSoftwareSchool.instructors[key])
}