// OPERATIONS

let value = 9;
let negValue = -value;
console.log(negValue);

console.log(2 ** 5); // meaning : 2 to the power 5

console.log(90 % 1500); // when value of left side is smaller than the value of right side then the answer will always be the value of the left side

// string concatenation
let str1 = `Hello `;
let str2 = `Aditya`;
let str3 = str1 + str2;
console.log(str3);

// string concatenation 2.0

let v1 = "1" + 2;
console.log(v1); // 12 as string
console.log(typeof v1); // typeof : String
let newV1 = Number(v1);
console.log(typeof newV1); // typeof : Number
console.log(newV1); // output : 12 as number

let v2 = 1 + 2 + `1`;
console.log(v2); // result : 32 as string
console.log(typeof v2); // typeof : string

let v3 = 9 - 2 + "9";
console.log(v3); // result : 79 as string

let v4 = `1` + 3 + 3;
console.log(v4); // result: 133

/*
General Rules
-- if the variable has an operation going on and then a string value is concatenated with the operation then the operational value + the string value will be displayed altogether . Eg 1 + 2 + '4' --> OUTPUT : 34

-- if the varibale is having a string number value at first place and then real number in any place with or without a operational function, the operational function will be ignored and all will be treated a string. Eg `1` + 2 + 4 --> OUTPUT : 124  
*/

console.log(+true); // output : 1
console.log(+""); // output : 0
console.log(-true); // output : -1
console.log(-false); // output : -0
console.log(+false); // output : 0
console.log(-""); // output  -0

let a = 100;
// a++; // output : 101
// ++a; // output : 101
console.log(a);
let b = ++a; // postfix  -- first the value is called and then incremented
console.log(b); // output : 100

let c = ++a; // prefix --> first the value is incremented and then printedF
console.log(c); // output : 102
