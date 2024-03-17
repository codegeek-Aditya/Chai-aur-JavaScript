/*There are two types of Memory 
1. Stack                        2.Heap

Stack Memory is used in Primitive Data type
Heap Memory is used in Non-Primitive Data Type




*/

// As we know stack memory is used in Primitive data type ---> the original value is not changed but the copy of the original value is given to the oher variable name
let tubeChannel = `youtube@gmail.com`;
let youtubeChannel = tubeChannel;
youtubeChannel = `xyz@gmail.com`;
console.log(youtubeChannel); // output : xyz@gmail.com
console.log(tubeChannel); // output :  youtube@gmail.com

// heap memory ----> reference value is used --> original value is only used
const userOne = {
  name: `Aditya`,
  upi: `xyz@upi`,
};

const userTwo = userOne;
userTwo.name = `xyz`;
console.log(userOne.name); // output : xyz
console.log(userTwo.upi); // output : xyz@upi
