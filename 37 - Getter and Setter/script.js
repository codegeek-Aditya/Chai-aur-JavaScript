class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toLowerCase();
  }
  set email(value) {
    this._email = value.toLowerCase();
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}
// agar get use kar rahe ho toh its compulsory ki set bhi define karna parega

const Aditya = new User("ADITYA@GMAIL.COM", "123abc");
console.log(Aditya.password);
console.log(Aditya.email);

// function mei getter and setter
function UserOne(email, name) {
  this._email = email;
  this._name = name;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "name", {
    get: function () {
      return this._name.toUpperCase();
    },
    set: function (value) {
      this._name = value;
    },
  });
}
const aditya = new UserOne("jjj", "kkk");
console.log(`name is ${aditya.email} and email is ${aditya.name}`);

// Object mei getter and setter
const nayaUser = {
  _email: `abc@email`,
  _pwd: `abc`,

  hello: function(){
    console.log(`Your email is ${this.email}`);
  },

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    return (this._email = value);
  },

  get pwd() {
    return this._pwd.toUpperCase();
  },

  set pwd(value) {
    return (this._pwd = value);
  },
};
console.log(nayaUser.email, nayaUser.pwd);
console.log(nayaUser.hello());

// agar kisi aur naye variable mei pehle waley object ko access karna hai
const adityaJi = Object.create(nayaUser) // default null
console.log(`New : ${adityaJi.email}`);
