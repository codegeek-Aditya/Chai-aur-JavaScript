// Types of JavaScript Evaluation Context
/*
-- Global Execution Context
-- Function Execution Context
-- Eval Execution Context
*/

// TODO: Logic Control or Control Flow

/*Comparison Operators
-- < less than
-- > greater than
-- == equal to but doesnt check the data type
-- === strict equal to and also checks the data type too
-- <= less than or equal to
-- >= greater than or equal to
-- != not equal to
-- !== 
*/

// !== strict not equal to

// if statement
if (2 !== "2") {
  console.log(`strict not eqaul to found it true`);
}

// if else statement
const balance = 2001;
if (balance > 500) {
  console.log(`you have more than enough money`);
} else {
  console.log(`go and do some work nigga!`);
}

if (balance > 2000) console.log(`jyada paise ho gaye hai laure ke paas`); // should not write this type of code as its not readable

// nesting inside a function
const Balance = 2000;
if (balance < 500) {
  console.log(`Balance is less than 500`);
} else if (balance < 750) {
  console.log(`balance is less than 750`);
} else if (balance < 900) {
  console.log(`Balance is less than 900`);
} else {
  console.log(`You have enough money and that is ${Balance}`);
}

// && operator -- checks both the conditions and both the conditions should be true
const debitCard = true;
const userLoggedIn = true;
const creditCard = false;

if (userLoggedIn && debitCard) {
  console.log(`Allowed to buy course`);
} else {
  console.log(`Please Login`);
}

// || OR Operator -- any one of the codition must be true in order to run the operation
const loggedInFromGoogle = true;
const loggedInFromFacebook = false;
if (loggedInFromGoogle || loggedInFromFacebook) {
  console.log(`User is allowed to use the website`);
}

// SWITCH Case -- its case sensitive
// if we dont use break then all the cases will run except default

const month = 11;
switch (month) {
  case 1:
    console.log(`January`);
    break;
  case 2:
    console.log(`February`);
    break;
  case 3:
    console.log(`March`);
    break;
  case 4:
    console.log(`April`);
    break;
  case 5:
    console.log(`May`);
    break;
  case 6:
    console.log(`June`);
    break;
  case 7:
    console.log(`July`);
    break;
  case 8:
    console.log(`August`);
    break;
  case 9:
    console.log(`September`);
    break;
  case 10:
    console.log(`October`);
    break;
  case 11:
    console.log(`November`);
    break;
  case 12:
    console.log(`December`);
    break;
  default:
    console.log(`The month doesnt exists`);
    break;
}

// truthy and falsy value

/*Falsy Values 

-- false
-- 0 
-- negative 0 / -ve 0
-- bigInt 0n
-- ""
-- null
-- undefined
-- NaN

*/

/*
Truthy Values

-- ' '
-- {}
-- function(){}
-- []
-- "0"
-- 'False'

*/

// to check if the array is empty or not
const emptyArray = [];
if (emptyArray.length === 0) {
  console.log(`Array is empty`);
} else {
  console.log(`Array has values in it`);
}

// if we want to check that the object is empty
const emptyObject = {
  //   name: "Aditya",
};
if (Object.keys(emptyObject).length === 0) {
  console.log(`Object is empty`);
} else {
  console.log(`Object has values in it`);
}

//
console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true

// Nullish Coalescing Operator (??)
// maan lo ki data laya jaa raha hai database sei and data null aaya toh null aane ke chakkar mei aisa ho sakta hai ki pura code hi disturb karde to we uss ?? ki agar null aay atoh dusra complex function ya value runn ho jaaye
let value1;
value1 = null ?? 20;
console.log(value1); // output = 20

let value2;
value2 = null ?? undefined;
console.log(value2); // output = undefined

let value3;
value3 = null ?? 100 ?? 200;
console.log(value3); // output - 100 ----- // first value after null will be printed

// ternary oeprator ?
// condition ? true statement : false statement
const iceTeaPrice = 100;
iceTeaPrice >= 80
  ? console.log(`greater than 80`)
  : console.log(`less than 80`);
