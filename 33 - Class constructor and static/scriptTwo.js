class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
  createId() {
    console.log(`123`);
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Aditya = new Teacher("Aditya", `AdityaSinha@gmail.com`);
Aditya.createId();

// abhi jo teacher class hai wo User ke andar jo createId() method hai wo access kar paa raha hai

// but if we want ki koi particular class ka jo method hai wo dusre class ke liye accessible na ho
// toh we use STATIC keyword, lets see

class newUser {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  logMe() {
    console.log(`NAME is ${this.name}`);
  }
  static userAge() {
    console.log(`AGE is ${this.age}`);
  }
}

class aadmi extends newUser {
  constructor(name, username) {
    super(name);
    this.username = username;
  }
}

const AdityaSinha = new aadmi("aditya", "adi");
// AdityaSinha.userAge(); // adityasinha is not a function because STATIC word jaise hi use karte hai toh newUSer ka jo method hai wo accessible nahi hai koi dusre class ke liye

AdityaSinha.logMe(); // NAME is Aditya ;  aa raha hai kyuki humne usme static word nahi laga hai before the method isliye ke dusre class ke liye accessible hai
