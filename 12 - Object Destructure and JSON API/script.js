//TODO: Destructuring Object

const course = {
  courseName: `JS in Hindi`,
  price: 999,
  courseInstructor: `Aditya`,
};

const { courseName: cName, price, courseInstructor: Instructor } = course;

console.log(cName);
console.log(price);
console.log(Instructor);

// we can change the name of the variables inside the object when destructuring.

// TODO: API
// JSON - JavaScript On Notation 