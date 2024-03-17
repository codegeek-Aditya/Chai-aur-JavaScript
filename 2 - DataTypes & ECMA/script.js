"user strict"; // treat all JS Code as newer version

// code readability should always be high
/*
writing such codes such as 
console.log(3 + 3); console.log(`Aditya`) <----- example of a bad code

READABLITY doesnt mean that you write every letter in a seperate line like this 👇 
console.log(3
        +
        3) <--- though the readability is 100% and also javascript removes or ignores the spaces but still its a bad code
*/

/*
Data-Types
-- number
-- string
-- boolean
-- null => standAlone value
-- symbol => unique
-- object
-- array
-- undefined
*/

age = 19;

console.log(typeof "Aditya"); // output: string
console.log(typeof null); // output : object
console.log(typeof undefined); // output: undefined

/*
Data Types

1. Primitive 
- number
- string
- boolean
- symbol
- null 
- undefined
- BigInt

2. Reference (Non -Primitive)
- Array
- Objects
- Functions

*/
// in order to convert a number to bigInt or write a bigInt numbe we generally add n to the last of/ end of the number
const bigNumber = 12345678998765n;
console.log(typeof bigNumber);

const symbol = Symbol("123");
console.log(typeof symbol); // typeOf : symbol
