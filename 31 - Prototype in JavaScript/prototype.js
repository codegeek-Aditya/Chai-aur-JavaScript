// PROTOYPAL Behaviour
// this keyword does not work in arrow functions
let name  = 'Aditya Sinha'

// new keyword
function multiplyByfive(num) {
  return num * 5;
}
console.log(multiplyByfive(5));
multiplyByfive.power = 2;
console.log(multiplyByfive.power);

// prototype
function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increment = function () {
  this.price++;
};

createUser.prototype.printMe = function () {
  console.log(`The price is : ${this.price}`);
};

const hitesh = new createUser("hitesh", 24);
hitesh.printMe();

const aditya = new createUser("aditya", 250);
aditya.increment();

//TODO: Prototype

// if we want to inject any method in the prototype we can do it so by

const myHeroes = ["Spiderman", "thor"];
const hero = {
  thor: `hammer`,
  spiderman: `sling`,
};
// prototype creation -- array
Array.prototype.power = function () {
  console.log(`Aditya added this prototype in the Array`);
};
myHeroes.power();
// hero.power();
// prototype creation -- Object
Object.prototype.newPower = function () {
  console.log(`This power is created by Object Prototype`);
};
// conclusion -- jab hum object mei ek naya protoype create karte hai toh wo prototype array as well as object ke liye available hota hai but jab humlog array ke andar ek naya prototype create karte hai toh wo bs array ke liye hi accessble hota hai na ki object ke liye!!

// inheritance

const user = {
  name: `Aditya`,
  email: `chai@chai.com`,
};
const teacher = {
  makeVideo: true,
};

const teachingAssistant = {
  isAvailable: false,
};

const TAsupprot = {
  makeAssignment: `JS Assignment`,
  fullTime: true,
  __proto__: teachingAssistant,
};

teacher.__proto__ = user;
console.log(`Teacher name is : ${teacher.name}`);

// modern syntax for inheritance
// object.setPrototypeOf(kiska, kiske saath) -- syntax
Object.setPrototypeOf(TAsupprot, user);
console.log(
  `${user.name}'s assistant is making assignment on ${TAsupprot.makeAssignment}`
);



let anothername = `AdityaaurCode     `;
String.prototype.trueLength = function () {
    console.log(this);
  console.log(`The true length is : ${this.trim().length}`);
};
anothername.trueLength();
"Aditya   ".trueLength();
name.trueLength()