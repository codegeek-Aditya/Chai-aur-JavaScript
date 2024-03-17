// for-of loop
// array specific loop

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const array of myArray) {
  console.log(`The value is ${array}`);
}

const myName = `Aditya`;
for (const name of myName) {
  console.log(`Each char is ${name}`);
}

// Map -- type of object known for KEY-VALUE Pairs.

const map = new Map();
map.set("Name", `Aditya`);
map.set("Country", `India`);
map.set("City", `Dhanbad`);
map.set("Country", `India`); // this will not print as map is collection of unique values so there is no room for repetitions
console.log(map);
console.log(map.entries());

// for of loop in map
for ([key, value] of map) {
  console.log(`${key} : ${value}`);
}

// for iterating inside an object we need to use for in instead of for of loop
// for in loop in object

const myObject = {
  js: `JavaScript`,
  cpp: `C ++`,
  ruby: `Ruby`,
  HTML: `Hyper Text Markup Language`,
};

for (const object in myObject) {
  console.log(`${object} is shortcut for ${myObject[object]}`);
}

// for in loop being used in array
const techstack = ["js", "cpp", "html", "css", "react"];
for (const tech in techstack) {
  console.log(techstack[tech]);
}

// Map is not iterable using loop

// arrays - forOf loop
// object - forIn loop

// forEach loop
const coding = ["js", "python", "ruby", "css", "c++", "html"];

// simple function
coding.forEach(function (val, index, arr) {
  console.log(`The value is ${val} ${index} ${arr}`);
});

// using arrow function
coding.forEach((item, index, arr) => {
  console.log(`The value using arrow function is ${item} ${index} ${arr} `);
});

// using -- declaring function else ehere and referencing it

function printMe(item, index, arr) {
  console.log(`The item inside is ${item} ${index} ${arr}`);
}
coding.forEach(printMe);

// for each loop inside an Objects in array

const myCoding = [
  {
    langauge: "JavaScript",
    languageFileExtension: `.js`,
  },
  {
    langauge: "TypeScript",
    languageFileExtension: `.ts`,
  },
  {
    langauge: "HTML",
    languageFileExtension: `.html`,
  },
];

myCoding.forEach((item, index, array) => {
  console.log(
    `The langauge is ${item.langauge} and its extension is ${item.languageFileExtension}`
  );
});
