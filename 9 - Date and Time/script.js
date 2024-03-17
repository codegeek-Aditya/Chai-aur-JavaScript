let myDate = new Date();
console.log(typeof myDate);
console.log(myDate); // object
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getSeconds());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

let myCreatedDate = new Date(2023, 0, 23); // month starts from 0
console.log(myCreatedDate.toDateString());
