let index = 0;
while (index <= 10) {
  console.log(`Value of loop is : ${index}`);
  index = index + 2;
}

// while loop in array
let myArray = [`Shaktiman`, `Harry Potter`, `Akbar`, `Hitler`];
let arrayIndex = 0;
while (arrayIndex < myArray.length) {
  console.log(`Superhero name is ${myArray[arrayIndex]}`);
  arrayIndex = arrayIndex + 1;
}

// do while loop

let score = 1;
do {
  console.log(`Score is ${score}`);
  score = score + 1;
} while (score <= 10);

// NOTE: do while loop always runs for 1st time or for one time
let newScore = 11;
do {
  console.log(`New Score is ${newScore}`);
  newScore++;
} while (newScore <= 10); // output : New Score is 11
// this will run for the first time because in do while the code runs and then the condition is checked
