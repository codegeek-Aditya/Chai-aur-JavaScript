// TODO: FUNCTIONS

function addTwoNumbers(num1, num2) {
  // Parameter
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
    console.log(
      `This console.log will not be printed in the console as there is rule that says when anything is written below the result, the execution can't happen as the code says its unreachabe and the code can't be detected`
    );
  } else {
    console.log(`Please enter a number`);
  }
}
const finalValue = addTwoNumbers(9, 9); // (9, 9) - arguments
console.log("Result is :", finalValue);

function userLoginMessage(username) {
  if (typeof username === "string") {
    return `${username} just Logged In!`;
  } else {
    return `Please enter a valid username`;
  }
}
console.log(userLoginMessage(`Aditya Sinha`));

// if we want to add infinite numbers, we can do it so by using rest(...) operator
function calculateSum(...nums) {
  let sum = 0;
  for (const num of nums) {
    sum = sum + num;
  }
  return sum;
}
console.log(calculateSum(9, 9, 0, 8));

// new function in Object DataType
function handleObject(anyObject) {
  return `Username is ${anyObject.username} and is enrolled in ${anyObject.course} and the price of the Course is Rs.${anyObject.price}`;
}

const user_one = {
  username: `Aditya`,
  price: 199,
  course: `JavaScript Course`,
};
console.log(handleObject(user_one));

const user_two = {
  username: `Mr. Andrew`,
  price: 9990,
  course: `React Js`,
};
console.log(handleObject(user_two));

// its not necessary that we always declare an object and then run the function
console.log(
  handleObject({
    username: `Sam`,
    price: 69,
    course: `Angular JS`,
  })
);

// creating a funcion using array datatype that returns the second value of the array
const userArray = [200, 400, 500];

function returnSecondValue(getArray) {
  return `The second value of the array is : ${getArray[1]}`;
}

console.log(returnSecondValue(userArray));
