"use strict";

const name = "Sanna";
const age = 11;
function greet(name, age) {
  console.log(${name} is ${age} years old);
}

greet(name, age);

// об'єкт на орієнтований код
const user = {
  name: "Sanna",
  age: 11,
  greet() {
    console.log(${this.name} is ${this.age} years old);
  },
};

user.greet();

// функції конструктори
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log($ {this.name} is $ {this.age} years old); 
  };
};

// усі методи для об'єктів потрібно записувати у властивість prototype функції конструктора
User.prototype.toShowName = function () {
  console.log(this.name);
};
const user1 = new User("Sanna", 11);
const user2 = new User("Vlada", 11);
user1.greet();
user2.greet();
user1.toShowName();
user2.toShowName();
console.log(user1);
console.log(user2);

// ES6 Class
class NewUser {
  static className = "User";
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  toShowName() {
    console.log(this.name);
  }
  updateName(val1 = " ", val2 = 0, val3 = "happy") {
    console.log((this.name = val1));
    console.log((this.age = val2));
    console.log(val3);
  }
  // get & set
  get age() {
    return this._age;
  }
  set age(value) {
    return (this._age = value);
  }
}
const classUser = new NewUser("Mark", 6);
console.log(classUser);

classUser.updateName("Sanna", 11, " ");

classUser.updateName();

classUser.updateName(null, 30, null);
console.log(classUser.age); // виклик метода get
// classUser.age(20);
console.log((classUser.age = 40)); // виклик метода set
console.log(classUser.age); // виклик метода get

// статичні властивості та методи

console.log(NewUser.className);

// 

class SuperNewUser extends new NewUser {
    constructor (name, age, superName, superAge) {
    super();
    this.superName = name;
    this.superAge = age;
    }
    toGreet() {
        console.log("Привіт!");
    }
}
const newSuperUser = new SuperNewUser ("Khrystyna", 16);
console.log(newSuperUser);