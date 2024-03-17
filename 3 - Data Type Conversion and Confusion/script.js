let score = "33";

console.log(typeof score);

const valueInNumber = Number(score); // 33 which is string is changed to number using Number method
console.log(typeof valueInNumber); // output : Number

// we can also change a string into number by using +/- sign before the string
const scoreIs = +"100";
console.log(typeof scoreIs); // output : number

const number = `69abc`;
const changeType = Number(number);
console.log(typeof changeType); // output : number -- but 69abc is not a number
// lets check whats inside changeType
console.log(changeType); // output : Not a Number -- NaN

// so its very important that we check such type of JavaScript flaws

const check = +"45xyz";
console.log(typeof check); // output : Number
// but still we know that 45xyz isn't a number
console.log(check); // output : NaN ( not a number )

/*
Recommended that we should always check the type of and also the value that the variable holds before doing any operation
*/

// what id score is null

let score1 = null;
let changeIt = Number(score1);
console.log(typeof changeIt); // output : number
console.log(changeIt); // output : 0

// if the value is sett to null in a ariable and we try to change it to number, the typeof the data will be convertd to number and the value it will hold will be )

// for true 👇
// let booleanScore = true;
// console.log(typeof booleanScore); // output : boolena
// let booChange = Number(booleanScore);
// console.log(typeof booChange); // output : number
// console.log(booChange); // output : 1

//for false 👇
let booleanScore = false;
console.log(typeof booleanScore); // output : boolean
let booChange = Number(booleanScore);
console.log(typeof booChange); // output : number
console.log(booChange); // output : 0

let undefinedScore = undefined;
let undefinedChange = Number(undefinedScore);
console.log(typeof undefinedChange); // output : number
console.log(undefinedChange); // output : Nan

const string = "Aditya";
let stringChange = Number(string);
console.log(typeof stringChange); // output : number
console.log(stringChange); // output : NaN

// boolean case ----->

let isLoggedIn = 1;
let booleanChange = Boolean(isLoggedIn);
console.log(typeof booleanChange); // output : boolean
console.log(booleanChange); // output : true

let loggedIn = 0;
let booChanges = Boolean(loggedIn);
console.log(typeof booChanges); // output : boolean
console.log(booChanges); // output: false

let LoggedIn = 4;
let bChange = Boolean(LoggedIn);
console.log(typeof bChange); // output : boolean
console.log(bChange); // output : true

let loggedin = ``;
let changeTypeIs = Boolean(loggedIn);
console.log(typeof changeTypeIs); // output : boolean
console.log(changeTypeIs); // output  : false

let checks = null;
let changeKaro = Boolean(checks);
console.log(typeof changeKaro); // output : boolean
console.log(changeKaro); //  output : false

let checkAgain = undefined;
let changeKaroNa = Boolean(checkAgain);
console.log(typeof changeKaroNa);
console.log(changeKaroNa); // output : false

/*
Boolean Case

"" --> value: false
0 --> value: false
1 --> value : true
any number and string ---> true
null -->` value: false
undefined --> value: false

*/

let strings = 33;
let changeString = Number(strings);
console.log(typeof changeString); // output : numebr
console.log(changeString); // output : 33(number)

/*
String Case
33 --> value : string but its still 33 i.e numebr
*/
