// TODO: Strings in JavaScript

const name = `Aditya`;
const repoCount = 50;
console.log(`Hello my name is ${name} and my RepoCount is ${repoCount} `);

const newName = new String(`Aditya,Sinha`);
console.log(newName);
console.log(typeof newName);
console.log(typeof name);
//replace
console.log(newName.replace(",", " ")); // Aditya Sinha -- , replaced by space between Aditya & Sinha

const string = `The-quick-brown-fox-jumps-over-the-lazy-dog`;
// split(seperator, limit)
const words = string.split(`-`);
console.log(words[5]);
