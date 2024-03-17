// TODO: this keyword
console.log(this); // in node -- empty parenthesis ; in web browser -- window object

function user() {
  const username = `Aditya`;
  console.log(this.username);
}
user(); // output : undefined

// TODO: Arrow Functions

const addTwoNum = (num1, num2) => {
  // when we use parenthesis, we need to write return keyword
  return num1 + num2; // if we don't use return keyword in parenthesis, we get undefined
};
console.log(`The sum is : `, addTwoNum(3, 4));

const add_two_num = (num1, num2) => num1 + num2;
console.log(add_two_num(9, 9));

const addtwonum = (num1, num2) => ( num1 + num2 ); // when we use small brackets we need not to write the return keyword
console.log(addtwonum(10, 10));
