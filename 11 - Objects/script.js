// object literals -- singleton will not be created
const sym = Symbol("key1");

const jsUser = {
  name: `Aditya`,
  age: 19,
  email: "adityasinha@gmail.com",
  isLoggedIn: false,
  location: `Dhanbad`,
  lastLoginDays: [`Monday`, `Tuesday`, `Saturday`],
  [sym]: `mykey1`,
};
// id we want to know the keys and values of the object
console.log(Object.keys(jsUser)); // keys
console.log(Object.values(jsUser)); // values
// always the keys and values when taken out comes in the form of arrays

// if we want to know that a particlar key is present or not in the object
console.log(jsUser.hasOwnProperty('isLoggedIn')); // true
// if we want to know the entries we can do it so by
console.log(Object.entries(jsUser));
// the value that the entries method provides the result in arrays

console.log(jsUser.email); // 1st Method
console.log(`Aditya Sinha your Email is ${jsUser[`email`]}`); // 2nd method -- jsUser[`email`]
console.log(typeof jsUser[sym]);

jsUser.email = "adityasinha@xyz.com";

// in order to freeze all the value that means no change in values further ----> we use Object.freeze('object_name)
Object.freeze(jsUser);
jsUser.name = "Sinha Aditya"; // this will not take place as the values are set to permanent ie. freeze
console.log(jsUser);

// jsUser.greeting = function () {
//   console.log(`Hello Js User`);
// };

// jsUser.greetingTwo = function () {
//   console.log(`Hello Js User, ${this.name}`);
// };

// console.log(jsUser.greetingTwo());
// above code wont run as JSUSER is set to freeze

// objects singleton

const regualrUser = new Object(); // creates singleton
regualrUser.id = `123abc`;
regualrUser.name = `XYZ`;
regualrUser.location = `Dhn`;
console.log(regualrUser.name);
console.log(regualrUser.id);
console.log(regualrUser.location);

const newUser = {
  email: `xyz@gmail.com`,
  userName: {
    fullName: {
      firstName: `Aditya`,
      lastName: `Sinha`,
    },
  },
};

console.log(newUser.userName.fullName.firstName);

// Concatenation of Objects
const object_one = { 1: `a`, 2: `b` };
const object_two = { 3: `c`, 4: `d` };

// 1st Method
const final_object = { ...object_one, ...object_two };
console.log(final_object);
console.log(typeof final_object);

//2nd Method
const final_fullObject = Object.assign({}, object_one, object_two); // {} is optional but its recommended to have it
console.log(final_fullObject);
console.log(typeof final_fullObject);

const users = [
  {
    // 0-Index
    id: 1,
    email: `x@gmail.com`,
  },
  {
    // 1-Index
    id: 2,
    email: `y@gmail.com`,
  },
  {
    //2 -Index
    id: 3,
    email: `z@gmail.com`,
  },
];

console.log(users[0]); // { id: 1, email: 'x@gmail.com' }
