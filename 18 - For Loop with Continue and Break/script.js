// Iterators or Loops

// for loop
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`5 is best number`);
  }
  console.log(i);
}

for (i = 1; i <= 10; i++) {
  console.log(`Outer loop value is ${i}`);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// we can write nay number's table using this loop
for (a = 19; a <= 19; a++) {
  for (b = 1; b <= 10; b++) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
}

let myArray = ["flash", "batman", "superman"];
for (i = 0; i < myArray.length; i = i + 1) {
  const element = myArray[i];
  console.log(element);
}

// keywords -- break and continue

// break
for (i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`5 detected`);
    break;
  }
  console.log(i);
}
// continue
for (a = 1; a <= 15; a++) {
  if (a == 12) {
    console.log(`12 detected`);
    continue;
  }
  console.log(a);
}
