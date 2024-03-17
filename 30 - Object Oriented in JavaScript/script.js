const user = {
  username: `Aditya`,
  loginCount: 8,
  signedIn: true,
  getUserData() {
    console.log(`The username is : ${this.username}`);
  },
};
console.log(user.getUserData());

// constructor -- new keyword

function User(username, age, loginCount, isLoggedIn) {
  this.username = username;
  this.age = age;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`); // [Function: User]
  };
  return this;
}
// return this agar nahi bhi likhe toh run karega function

// const firstUser = User(`Aditya`, 19, 8, true);
// const secondUser = User(`Sinha`, 20, 9, false);
// console.log(firstUser);
// writing without new keyword is overwriting the details og the firstUser by the secondUser -- second user ka values firstUser mei print ho raha hai jab humlog new keyword use nahi kar rahe hai

const firstUser = new User(`Aditya`, 19, 9, false);
const secondUser = new User(`Sinha`, 69, 19, true);
console.log(firstUser.constructor);
console.log(secondUser);
// after using new keyword ab overwrite nahi kar raha hai kyuki ab harr new instance deta hai

/*
ABOUT NEW KEYWORD
-- whenever we use new keyword and empty object is created i.e a new instance is formed

-- 
*/
