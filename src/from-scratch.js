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

const carMaker = () => {
};

const weAreNotFriends = () => {
};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

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
