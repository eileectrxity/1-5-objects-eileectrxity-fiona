//Lesson 1-5 Assignment: Objects by Eileen[odd q's] + Fiona[even q's]

/*Question 1: a function that takes a single argument: an object, person. the person object will look like:
{
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true
}
if isCool is true, then the function returns the string: "What is UP [UPPERCASED-NAME]? How you been doin'?", otherwise it returns the string "Greetings [name as entered], how have you been lately?" */
//first try
const coolGreeting = (person) => {
  const { name, bio, age, isCool } = person;
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else return `Greetings ${person.name}, how have you been lately?`;
};
// //invoking the object function below
// const coolPerson = {
//   name: 'Sara',
//   isCool: true,
//   age: 30,
//   bio: 'What a legend',
// };

// const notCoolPerson = {
//   name: 'Bob',
//   isCool: false,
//   age: 30,
//   bio: "Kind of mean if we're being honest",
// };

// console.log(coolGreeting(coolPerson)) //"What is UP SARA? How you been doin'?"
// console.log(coolGreeting(notCoolPerson)) //'Greetings Bob, how have you been lately?'

/*Question 2: a function that takes in an object, person. it should increase their age property by one; the function returns nothing
gint: be careful with destructuring when modifying object properties. */
const haveBirthday = (person) => {
  const { name, age } = person //defining the parameter person as an object with key variables called name and age
    person.age = age + 1 //increasing the age key value by 1
};

// //printing results to the console below
//   const age1 = 30;
//   const age2 = 0;
//   const age3 = 100;
//   const person1 = { name: 'Sara', age: age1 };
//   const person2 = { name: 'Bob', age: age2 };
//   const person3 = { name: 'Jo', age: age3 };

// haveBirthday(person1);
// console.log(person1.age); //age1 + 1
// haveBirthday(person2);
// console.log(person2.age) //age2 + 1
// haveBirthday(person3);
// console.log(person3.age) //age3 + 1

//Question 3 = a function that takes 2 arguments: an object person and a string spyHandle. function should delete the name property from person and add the spyHandle value as a property with the same name
const becomeSecretAgent = (person, spyHandle) => {
  const { name, age } = person
  person.spyHandle = spyHandle
  delete person.name
};

// //printing results to the console below
//   const person1 = {
//     name: 'Sara',
//     age: 30,
//   };

//   const person2 = {
//     name: 'Sara',
//     age: 30,
//   };

// becomeSecretAgent(person1, '007');
// console.log(person1); //{ spyHandle: '007', age: 30 }
// becomeSecretAgent(person2, '008');
// console.log(person2); //{ spyHandle: '008', age: 30 }

//Question 4
const carMaker = (name, maker, year) => { 
  return {
    name : name,
    maker : maker,
    year : year,
    needsOilChange : false
  }
};
// console.log(carMaker('Civic', "Honda", 2005))

/* Results printed :
{ name: 'Civic', maker: 'Honda', year: 2005, needsOilChange: false }
*/

//Question 5: a function that takes in a single person object. function should permanently remove the last name from the person.friends array (an array of strings), and return this value
const weAreNotFriends = (person) => {
  // const { name, age, friends } = person; //don't need this because it's referencing the keys from the from-scratch.spec.js
  return person.friends.pop();
  // return person.friends.splice(person.friends.length - 1, 1) //tried it; didn't pass the test and also returns an array not string
};

// // //printing results to the console
//   const person1 = {
//     name: 'Sara',
//     age: 30,
//     friends: ['Bob', 'Joe', 'Sally'],
//   };

//   console.log(weAreNotFriends(person1)); //'Sally'
//   console.log(person1.friends); //['Bob', 'Joe']

//   console.log(weAreNotFriends(person1)) //'Joe'
//   console.log(person1.friends); //['Bob']

//   console.log(weAreNotFriends(person1)); //'Bob'
//   console.log(person1.friends); //[]

//   console.log(weAreNotFriends(person1)) //undefined
//   console.log(person1.friends); //[]

/*Question 6: a function that takes in an object , person- which is shaped like the below
const jo = {
  name: 'Jo',
  age: 34,
  hobbies: ['running', 'biking', 'baking'],
}; */
const jo = {
  name: 'Jo',
  age: 34,
  hobbies: ['running', 'biking', 'baking']
}

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`)
  }
};

//Question 7: a function that takes in an object team. the team object is complex with nested keys
//getNextOpponent() should return the teamName of the first opponent in matches. it should only return the name, and not modify the array. if there is no team in the array (there will always be an array), return null. getNextOpponent(fighters); //should return 'Dunkaroos'

const getNextOpponent = (team) => { //team parameter is just the placeholder for an object that we pass in the argument
  // console.log(team.matches.length): to help me debug
if (team.matches.length === 0) { //originally tried to check for (team.matches[0].teamName.length === 0) but the null test case was breaking this as with matches array being empty, teamName property no longer existed thus returning typeError of undefined- BOOMM!
    return null;
  } else return team.matches[0].teamName; //accessing the teamName key property inside of the matches key array at index 0 within the passed team object argument
};

// // //printing results to the console below
// //nested object with nested keys
// const fighters = {
//   name: 'Fighters',
//   sport: 'basketball',
//   wins: 3,
//   location: {
//     city: 'Bridgeport',
//     state: 'CT',
//   },
//   matches: [
//     {
//       teamName: 'Dunkaroos',
//       skill: 9,
//       wins: 12,
//     },
//     {
//       teamName: 'Space Jammers',
//       skill: 10,
//       wins: 16,
//     },
//     {
//       teamName: 'Mustangs',
//       skill: 6,
//       wins: 10,
//     },
//   ],
// };

// console.log(getNextOpponent(fighters)) //'Dunkaroos'
// fighters.matches.shift();
// console.log(getNextOpponent(fighters)) //'Space Jammers
// fighters.matches.shift();
// console.log(getNextOpponent(fighters)) //'Mustangs'
// fighters.matches.shift();
// console.log(getNextOpponent(fighters)) //null

// Question 8
const keys = {
  a: 'somestring',
  b: 42,
  c: false,
}

const listAllKeys = (object1) => {
return Object.keys(object1);
};

console.log(listAllKeys(keys));

//Question 9: a function that takes in an object. function should return an array of all the values on that object. you can do this a few ways, but just like the above there's a method just for this. look it up!
const listAllValues = (obj) => {
  return Object.values(obj);
};

// Question 10
/* Test case :
let users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },

];
*/

const convertToMatrix = (newprofile) => {
  if (newprofile === null || newprofile.length === 0 || newprofile.length === undefined) {
    return newprofile
  } else {
    let arr = []
    arr.push(Object.keys(newprofile[0]));

    for (let profile of newprofile) {
      // console.log(profile)
    arr.push(Object.values(profile));

    } 
    // console.log(arr)
    return arr

  }    
};
// console.log(convertToMatrix(users))

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
