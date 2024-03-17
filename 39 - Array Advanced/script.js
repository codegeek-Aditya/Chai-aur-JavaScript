// jsvu

// const arr = [];
// %DebugPrint(arr);

// continuous,holey array
/*
In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.
*/

/*
Types of Integer
-- SMI - Small Integer
-- Packed elements
-- Double
*/

/*
holey array
-- has holes in it
*/

const arrayOne = [1, 2, 3, 4, 5];
/* PACKED_SMI_ELEMENT or CONTINOUS ELEMENTS 
-- best type of array 
-- only numbers are allowed no other types of data are
*/

arrayOne.push(6.0);
//PACKED_DOUBLE_ELEMENTS

arrayOne.push("7");
// PACKED ELEMENTS

arrayOne[10] = 11;
// HOLEY_ELEMENTS bann gaya hai kyuki issme ab hole aa chuka hai

console.log(arrayOne); // [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrayOne[9]); // undefined

/*agar holes hai aapke array mei toh itne check honge jo ki is expensive
-- arrays mei bound check hota hai
-- arrays.hasOwnProperty(arrayOne, 9)
-- array.hasOwnProperty(ArrayOne.prototype, 10)
-- hasOwnProperty(Object.property,10) -- most expensive check in whole js
*/

// HOLES are expensive in JavaScript

/*
in terms of OPTIMISATION
-- continuous array
SMI> DOUBLE> PACKED

-- holey array
H_SMI> H_DOUBLE > H_PACKED
*/

// ek baar array downgrade ho gaya hai jaise ki continuous sei holey mei chal gaya toh its almost impossible ki wo phir waps continuous mei jaaye!!

// ye nahi karna hai
// optimisation issue
const arrayFour = new Array(3);
// just 3 holes -- HOLEY_SMI_ELEMENTS
arrayFour[0] = "1"; // HOLEY ITEMS
arrayFour[1] = "2"; // HOLEY ITEMS
arrayFour[2] = "3"; // HOLEY ITEMS
console.log(arrayFour);

// ye kar sakte hai in terms of optimisation
const arrayFive = [];
arrayFive.push("1");
arrayFive.push("2");
arrayFive.push("3");
console.log(arrayFive);
