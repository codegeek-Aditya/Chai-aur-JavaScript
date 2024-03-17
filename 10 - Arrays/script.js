const bioData = [];

// push() - add items in an array at the end
bioData.push("Aditya");
bioData.push("Sinha");
bioData.push("true");
bioData.push("dps dhanbad");
bioData.push("Jharkhand");
bioData.push("Dhanbad");
bioData.push("India");
bioData.push("19");

// pop() - removes the array values from end
bioData.pop();
bioData.pop();
bioData.pop();
bioData.pop();
bioData.pop();
bioData.pop();
bioData.pop();

// unshift() -- adds value in the array at first position or 0 index
// Drawback of Unshift is that if we add a new value at the 0 index the wholeindex of the array gets disturbed which will be scary for developers
bioData.unshift("Sinha");

// shift() -- removes the value of array from -0 indexed position
bioData.shift();

console.log(bioData);

// .join -- joins the array value withany seperator you want
// join changes the array into string type
const firstName = [`Aditya`, `Sinha`];
console.log(typeof firstName); // array -- object
const fullName = firstName.join(`-`);
console.log(fullName);
console.log(typeof fullName); // string type

const marvel_heroes = [`spiderman`, `thor`, `ironamn`];
const dc_heroes = ["batman", `flash`, `superman`];
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // output [ 'spiderman', 'thor', 'ironamn', [ 'batman', 'flash', 'superman' ] ]
console.log(marvel_heroes[3][1]); // output : flash

const join_heroes = marvel_heroes.join(`,`);
console.log(join_heroes); // output : spiderman,thor,ironamn,batman,flash,superman

// in order to join two arrays, we have two methods for this
const states = ["Jharkhand", "Bihar", `Punjab`, `New Delhi`];
const ut = [`andaman and nicobar island`, `lakshwadeep`];
// 1st Method -- using concat
const geographical_info = states.concat(ut);
console.table(geographical_info);
console.log(typeof geographical_info);

// 2nd Method -- using spread operator
const new_geographical_info = [...states, ...ut];
console.table(new_geographical_info);
console.log(typeof new_geographical_info);

// flat - used to concatenate sub elements of array into single array // main array should also be counted in order to concatenate the sub elements of the arrra into single array
const new_array = [
  1,
  2,
  4,
  [23, 45, 6, 7, 8, 9],
  10,
  19,
  23,
  [1234, 897],
  98,
  [9898],
];

const usable_array = new_array.flat(4);
console.table(usable_array);

// converting values into array
console.log(Array.from("Aditya")); // output :  [ 'A', 'd', 'i', 't', 'y', 'a' ]

console.log(Array.isArray({ name: "Aditya" })); // interview purpose question

// if we want to convert a group of elements into an array
let score1 = 100;
let score2 = 890;
let score3 = 110;
let score4 = 109;
let score5 = 140;

const overall_score = Array.of(score1, score2, score3, score4, score5);
console.log(overall_score); // output - [ 100, 890, 110, 109, 140 ]
