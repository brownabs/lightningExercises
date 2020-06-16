//using .map creates a new array
const people = [
  "Meg",
  "Steve",
  "kimmy",
  "Madi",
  "Jisie",
  "Joe",
  "Emily",
  "Andy",
];

let peopleInAllCaps = people.map((p) => p.toUpperCase());
console.log(peopleInAllCaps);

const thisIsAFunction = (peopleArray) => {
  for (i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i]);
  }
};
thisIsAFunction(people);

//console array in reverse order

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"];

console.log(hyperbole.reverse());

//change the value of the stories key using square bracket notation
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
  architect: "Shreve, Lamb & Harmon",
};

const empireStateBuildingStories = (empireStateBuilding["stories"] = "203");
console.log(empireStateBuildingStories);

//Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

//Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    partTime: ["Zoe", "Nathan"],
  },
  address: "500 Interstate Blvd. S",
};

let instructorsPartTime = nashvilleSoftwareSchool.instructors.partTime;
let instructorsFullTime = nashvilleSoftwareSchool.instructors.fullTime;

//includes array method result is a boolean: true or false, in this case true
console.log(instructorsPartTime.includes("Zoe"));
console.log(instructorsFullTime.includes("Andy"));

//created a function that could return name key in an array
function searchForName(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].name === nameKey) {
      return nameKey;
    }
    console.log(nameKey);
  }
}

searchForName("Zoe", instructorsPartTime);
searchForName("Andy", instructorsFullTime);

//Output the following value to the console.
//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

const beatles = {
  albums: [
    "Abbey Road",
    "Sgt Peppers Lonely Heart's Club Band",
    "Revolver",
    "Magical Mystery Tour",
    "Something New",
  ],
  history: {
    formed: 1960,
    disbanded: 1970,
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001,
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null,
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980,
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null,
    },
  ],
};

function searchForMember(nameKey, myArray) {

    for(i=0; i < myArray.length; i++) {
      if(myArray[i].name === nameKey) {
        let newObject = {
            name : myArray[i].name,
            birth : myArray[i].birth,
            death : myArray[i].death,
        }
        return newObject
      }
    }
  }

  function searchForAlbum(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
        return nameKey;
      }
      return nameKey;
    }
  }

let Paul = searchForMember("Paul McCartney", beatles.members);
console.log(Paul)
let MagicalAlbum = searchForAlbum("Magical Mystery Tour", beatles.albums);

console.log(`${Paul.name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${Paul.birth}. He contributed heavily to the ${MagicalAlbum}`)
