// // lexical scoping
// function outer() {
//   const name = `Aditya`;
//   function inner() {
//     let username = `Aditya`;
//     console.log(`inner`, name);
//   }
//   function tooInner() {
//     console.log(`tooInner`, username);
//   }
//   inner();
//   tooInner();
// }
// outer();

// /*

// in case of variable access

// parents ---> children : okay
// children to parent : not possible
// children to children : not possible
// */

// closure

function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById("orange").onclick = clickHandler(`orange`);
document.getElementById("green").onclick = clickHandler("green");

// OTP Generator
function generateOtp() {
  let digits = "123456789abcdefghijklmnopqrstuvwxyz!@#$%&*()";
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp.toUpperCase();
}

console.log(`OTP of 6 dgits is : ${generateOtp()}`);
