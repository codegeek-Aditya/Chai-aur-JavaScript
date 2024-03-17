/*
Equality check and Comparisons work Differently

COMPARISONS convert null value to a number, treating it as 0 
*/

console.log(null == 0); //false

console.log(null != 0); // true

console.log(null >= 0); // true -> Reason = bcoz comparison operator converted the null value to 0 and  0 = 0 is getting satisfied that is why the result is true

let v1 = undefined + 1;
console.log(v1); // NaN
console.log(typeof v1); // number

console.log(undefined > null); // false
console.log(undefined >= null); // false
console.log(undefined == null); // true
console.log(undefined <= null); // false
console.log(undefined < null); // false
console.log(undefined != null); // false

// STRICT CHECK (===)

console.log("2" == 2); // TRUE -    bcoz it does not check the datatype, it only checks the value
console.log("2" === 2); // FALSE - bcoz it checks datatype as well as value both
console.log("two" == 2); // FALSE
