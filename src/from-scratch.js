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

const haveBirthday = () => {
};

const becomeSecretAgent = () => {
};

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
