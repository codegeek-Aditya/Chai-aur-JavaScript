// TODO: Immediately Invoked Function Expression (IIFE)

// to put iife we use parenthesis before and after the end of the function, it is done so to protect some functions from the gloabal scope variables

(function addSum(num_one, num_two) {
  // named iife
  console.log(num_one + num_two);
})(4, 5);
// should always use ; after every iife otherwise we will get

(() => {
  // anonymous iife
  console.log(`Arrow Fn inside IIFE`);
})();

((name) => {
  // simple iife
  console.log(`Hey ${name}. We are using IIFE to print your name`);
})(`Aditya`);


