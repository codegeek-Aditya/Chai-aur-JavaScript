/*

Promise is an object

*/

// Promise Creation
const promiseOne = new Promise(function (resolve, reject) {
  // do async task
  setTimeout(() => {
    console.log(`Async is Completed`);
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log(`Promise Consumed`);
});

// new way to create promise

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`Asyn 2 process`);
    resolve();
  }, 1000);
}).then(function () {
  console.log(`Async 2 Resolved`);
});

// data fetch using promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Aditya", email: "aditya@xyz.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// catch error
const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ username: `Aditya`, pwd: `123` });
  } else {
    reject(`ERROR: Something Went Wrong`);
  }
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => console.log(username))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`the promise is either resolved or rejected`);
  });

// async await in promises
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve({ course: `JavaScript`, price: 1999 });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  });
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// response with promises

// https://jsonplaceholder.typicode.com/users

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`error ho gaya jii`);
  }
}

getAllUsers();

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData);
  })
  .catch((error) => console.log(`Error ho gaya jiii`));
