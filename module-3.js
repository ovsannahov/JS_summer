// // Масиви
// const arr = ['1','2','3'];
// console.log(arr);
// console.log('елемент в індексі 0 - ', arr[0]); 
// console.log('елемент в індексі 1 - ', arr[1]);
// console.log('елемент в індексі 2 - ', arr[2]);
// console.log('елемент в індексі 3 - ', arr[3]);

// arr[0]='js';
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// // Ітерація по масиву
// const numbersArray = [13,10,121,157,23,9,3,114,25,100];
// for (let i = 0; i < numbersArray.length; i += 1) {
//     console.log(елемент в індексі ${i} - , numbersArray[i]);
// }

// for (let i = 0; i < 4; i += 1) {
//     numbersArray.push('js');
//     console.log(елемент в індексі ${i} - , numbersArray[i]);
// }

// for (let elem of numbersArray) {
//     console.log(elem);
// }
// console.log(numbersArray);

// // Присвоєння значень
// // Значення примітивів копіюються у значення змінної
// let a = 5;
// let b = a;
// console.log('a:', a , 'b:', b);
// a = 10;
// console.log('a:', a , 'b:', b);
// // Значення об'єктів, масивів та функцій копіюються за посиланням
// const array1 = [1,2,3,4,5];
// const array2 = array1;
// console.log(array1 === array2);

// const array3 = array1.slice();
// console.log(array1 === array3);
// console.log(array1 , array3);

// array2.push('js');
// console.log(array1 , array2 , array3);

// array3.unshift('html');
// console.log(array1 , array2 , array3);

// array3.pop();
// array1.shift();
// console.log(array1 , array2 , array3);

// // методи split i join
// const str1 = "яблука, апельсини, сливи";
// // const arr1 = str1.split(",");
// // console.log(arr1);

// const arr1 = str1.split(",");
// console.log(arr1);

// const newstr = arr1.join();
// console.log(newstr);

// // indexOf
// console.log(array1.indexOf("js"));
// console.log(array1.indexOf("css"));
// console.log(array1.indexOf(3));


// console.log(array1.includes("js"));
// console.log(array1.includes("css"));
// console.log(array1.includes(3));

// // splice

// let allArrays = array1.concat(array2).concat(array3);

// //let allArrays = array1.concat(array2, array3);
// console.log(allArrays);

// функція
// function expression - не можна викликати до оголошення
const func = function (num1, num2) {
  return num1 + num2;
}
console.log(func(2, 3)); // 2 + 3 =5

// arrow function - не можна викликати до оголошення
const func1 = (a, b) => a - b;
console.log(func1(9, 8)); // 9 - 8 = 1

const func2 = c => console.log(c);
func2("Hello world!"); // Hello world!

// function declaration - можна викликати до оголошення
function decl (par1, par2) {
  return console.log(par1 * par2)
}
decl(3, 4); // 3 * 4 = 12

// параметри за замовчуванням
const toBuyProducts = function (product, count = 1) {
  return console.log(I bought ${count} of ${product});
}
toBuyProducts('bread', 8);
toBuyProducts(8, 'bread');
toBuyProducts(8);
toBuyProducts('apple');
toBuyProducts();

// псевдомасив arguments
const total = function () {
  let sum = 0;
  for(const argument of arguments) {
      sum += argument;
  }
  return sum;
}
console.log(total(2, 6)); // 8
console.log(total(7, 89, 8, 5)); //109

const total1 = (...args) => {
  console.log(args);
  let total = 0;
  for(const arg of args) {
      total += arg;
  }
  console.log(total);
}
total1(1, 2, 3);

// перетворення псевдомасиву arguments в нормальний масив

const func3 = function () {
  const array = [1, 2, 3];
  console.log("Звичайний масив", array);
  console.log("Псевдомасив", arguments);
  const newarray = Array.from(arguments);
  console.log("Перетворений псевдомасив", newarray);
}
func3(1, 2, 3);

// Guard clause
const addNewUser = function (age) {
  if (age < 16 || age > 21) {
      console.log("Ми не можемо Вас додати");
  } else if (age >= 16 && age <= 21) {
      console.log("Вітаємо! Ви студент");
  } else {
      console.log("Ви ввели неправильні дані");
  }
}
addNewUser(15);
addNewUser(32);
addNewUser(18);
addNewUser("Hello");