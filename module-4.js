"use strict";

const toLearnFrontEnd = function (what, how) {
  how(what);
};
const language = "Java Script";
const video = "webinars";
const toRead = function (variable) {
  console.log(I learn ${variable});
};
const toWatch = function (variable) {
  console.log(I watch ${variable});
};
toLearnFrontEnd("html", () => {
  console.log("Анонімна callback функція");
});
toLearnFrontEnd(language, toRead);
toLearnFrontEnd(video, toWatch);

const repeatFunc = function (count) {
  let result;
  for (let i = 0; i <= count; i++) {
    result = i;
    console.log(result);
  }
};
repeatFunc(5);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
  { name: "oranges", quantity: 120 },
];

const filterFruits = function (array, cbFunc) {
  const filterArray = [];
  for (let element of array) {
    console.log(element);
    const ok = cbFunc(element);
    console.log(ok);
    if (ok) {
      filterArray.push(element);
    }
  }
  return console.log(filterArray);
};

filterFruits(fruits, (fresh) => fresh.isFresh);
filterFruits(fruits, (el) => el.quantity > 100);

// методи cfll apply

const user = {
  name: "Khrystyna",
  toShowName() {
      return this.name;
  } 
};

console.log(user.toShowName);
const greeting = function (name, stars) {
    // для методів call apply
  console.log(Hello ${this.name}, ${name}-${stars} glad to see you!);
};
greeting.call(user, "Hilton", 5);
greeting.apply(user, ["Hilton", 5]);
const a = greeting.bind(user, "Hilton", 5);
a();
// bind
const hello = function (cb) {
    let userName = cb();
    console.log(Hello ${userName});
}
hello(user.toShowName.bind(user)); 