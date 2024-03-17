const score = 400;
console.log(typeof score);

const balance = new Number(400.198765);
// if I want to show two places after decimal point then
// toFixed()
console.log(balance.toFixed(2));
console.log(balance);
console.log(typeof balance);

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN")); // Indian Decimal System
console.log(hundreds.toLocaleString("en-US")); // US_decimal-system

// ++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++

// to change negative number to positive
console.log(Math.abs(-69)); // output : 69

// round of ---> =<.5 = +1 otherwise same
console.log(Math.round(4.3)); // output = 4
console.log(Math.round(5.9)); // output = 6

// Math.ceil() - The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(99.2)); // output = 100

// Math.floor () - The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(45.9));
// Math.hypot() - The Math.hypot() static method returns the square root of the sum of squares of its arguments.
console.log(Math.hypot(3, 4)); // output = 5 -----> root of 25 = 5

// Math.pow(x,y) -- The Math.pow() static method returns the value of a base raised to a power. That is 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠
console.log(Math.pow(9, 2)); // 9 raised to the power 2 -- 81

// Math.min() -- min value from the values of array
const array1 = [1, 2, 3, 4, 5, 6];
const output = Math.min(...array1);
console.log(output);

// Math.max () -- max value deta hai
console.log(Math.max(1, 2, 98, 8, 7));

// Math.random () - to get random values
console.log(Math.random());
console.log(Math.random() * 10 + 1); // +1 is written because it may happen that sometime the value is 0 so in order to dodge that we use +1 so that it doesnt happen

// suppose if I want number >=10 but =<20
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// setInterval(() => {
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }, 1);
