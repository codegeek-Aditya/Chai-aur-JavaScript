// TODO: SCOPE

if (!false) {
  let a = 20;
  const b = 30;
  var c = 9;
  console.log(`Value of a : ${a}`);
  console.log(`Value of b : ${b}`);
}

// console.log(a); //  not defined as let is block scope
// console.log(b); // not defined as const is block scope
console.log(c); // output : 9 -- this is why we don't use var because it because it can be called from out side the scope which is not a good thing!!

// TODO: NESTED SCOPE

function one() {
  const username = `Aditya`;
  function two() {
    const website = `Youtube`;
    console.log(username);
    // console.log(website);
  }
  //console.log(website); // this wont run because its outside the scope
  two();
}
one(); // output : Aditya
