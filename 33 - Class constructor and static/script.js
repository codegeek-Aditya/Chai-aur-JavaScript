// CLASS
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  transformUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("aditya", "xyz.com", "def");
console.log(chai.encryptPassword());
console.log(chai.transformUsername());

// INHERITANCE

class newUser {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends newUser {
  constructor(username, password, email) {
    super(username);
    this.password = password;
    this.email = email;
  }

  addCourse() {
    console.log(`A new Course was added by ${this.username}`);
  }
}

const Aditya = new Teacher("Aditya", "123", `hey@aditya`);
console.log(Aditya.addCourse());

const sinha = new newUser("Sinha");
console.log(sinha.logMe());

// to check instance
console.log(Aditya instanceof Teacher); // true
console.log(sinha instanceof Teacher); // false

