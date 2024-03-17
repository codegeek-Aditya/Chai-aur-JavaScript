const name = "Aditya";
let accountId = 123;
var password = 345;
var password = 435;
let accountCity = `Dhanbad`;
let accountState;
// accountState = `Jharkhand`;
console.log(accountState); /// output : undefined // if we dont define any value inside the variable, javascript returns UNDEFINED

// let accountId = 908;// error : cannot redeclare block-scoped variable "accountId"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(name, accountId, password, accountCity);

const number = "123";
console.log(typeof number); // output : number (+/- => by writing plus/minus before a number which is in string changes to number )
