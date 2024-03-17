const coding = [`js`, `html`, `css`, `ruby`, `swift`, `python`];

const coding_values = coding.forEach((item) => {
  return item;
});
console.log(coding_values); // undefined -- as for each loop doesn't return any value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
const filter_myNumbers = myNumbers.filter((num) => num > 4);
console.log(filter_myNumbers); // output : [ 5, 6, 7, 8, 9, 10 ]

const my_nums = [1, 2, 3, 4];
const filterMyNums = my_nums.filter((num) => {
  // always use return keyword when using parenthesis{} otherwise it won't work
  return num < 4;
});
console.log(filterMyNums);

// using for each in array
const newNums = [];
my_nums.forEach((num) => {
  if (num <= 4) {
    newNums.push(num);
  }
});
console.log(newNums);

// filter

const books = [
  { Title: `Book One`, Genre: `Science`, Publish: 1990, Edition: 1991 },
  { Title: `Book Two`, Genre: `Mathematics`, Publish: 1992, Edition: 1993 },
  { Title: `Book Three`, Genre: `History`, Publish: 1994, Edition: 1995 },
  { Title: `Book Four`, Genre: `History`, Publish: 2001, Edition: 2002 },
  { Title: `Book Five`, Genre: `Geography`, Publish: 2003, Edition: 2004 },
  { Title: `Book Six`, Genre: `history`, Publish: 2020, Edition: 2024 },
  { Title: `Book Seven`, Genre: `Non-Fiction`, Publish: 1998, Edition: 1999 },
  { Title: `Book Eight`, Genre: `Mathematics`, Publish: 2009, Edition: 2010 },
  { Title: `Book Nine`, Genre: `Fiction`, Publish: 2008, Edition: 2009 },
  { Title: `Book Ten`, Genre: `Science`, Publish: 1991, Edition: 1992 },
];

const filtered_books = books.filter((bk) => {
  return bk.Genre === "History" || bk.Genre === `history`;
});
console.table(filtered_books);

const new_filteredBook = books.filter(
  (bk) => bk.Publish > 2000 && bk.Edition > 2000
);
console.table(new_filteredBook);

// TODO: map method

// adding +10 to number array values using map method
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered_nums = number.map((num) => num + 10);
console.log(filtered_nums);

// adding +10 to number array values using for each
const filtered_number = [];
number.forEach((num) => {
  number_push = num + 10;
  filtered_number.push(number_push);
});

console.log(`The incremented value is ${filtered_number}`); // The incremented value is 11,12,13,14,15,16,17,18,19,20

// chaining is applying more than one methods back to back
const new_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_num_generate = new_num
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(new_num_generate);

// TODO: Reduce

const array_one = [1, 2, 3, 4, 5];
const sumOf_arrayone = array_one.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // 0 is the initial value before the addition of accumulator and currentValue
);

console.log(`The sum of array_one is ${sumOf_arrayone} using Reduce Method`);

const array_two = [100, 200, 300, 400, 200, 300];
const initialValue = 0;
const sumOf_arrayTwo = array_two.reduce((he, she) => he + she, initialValue);
console.log(`Sum of array_two using reduce method is ${sumOf_arrayTwo}`);

const array_three = [10, 10, 10];
const newinitialValue = 0;
const sumOf_arrayThree = array_three.reduce(function (acc, curr) {
  console.log(`Acc : ${acc} and curr : ${curr}`);
  return acc + curr;
}, newinitialValue);
console.log(`Sum of arrayThree using reduce method is ${sumOf_arrayThree}`);

const courseBuy = [
  {
    course: `JS`,
    price: 599,
  },
  {
    course: `React2.0`,
    price: 399,
  },
  {
    course: `React`,
    price: 399,
  },
  {
    course: `Angular`,
    price: 499,
  },
  {
    course: `HTMl and CSS`,
    price: 599,
  },
];

const priceOf_courseBuy = courseBuy.reduce((acc, item) => acc + item.price, 0);
console.log(`Total Price is ${priceOf_courseBuy}`);
