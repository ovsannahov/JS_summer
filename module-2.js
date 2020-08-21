//array
// const arr = [1, 2, 3];
// console.log(arr);
// console.log(arr[0]);
// arr [0] = 'js';
// console.log(arr);
// const arrayLength = arr.length;
// console.log(arrayLength);

// Итерация по массиву
// const numbersArray = [13, 10, 121, 157, 23, 9, 3, 114, 25, 100];
// for (let i = 0; i < numbersArray.length; i++) {
//     console.log(элемент в индексе ${i} -, numbersArray[i]);
// };
// for (let i = 0; i < 4; i++) {
//     numbersArray.push(js);
//     console.log(элемент в индексе ${i} -, numbersArray[i]);
// };
// for (let elem of numbersArray) {
//     console.log(elem);
// };
// console.log(numbersArray);

//Присвоение значений
// Значения примитивов копируются
// let a = 5;
// let b = a;
// console.log(a:, a, b:, b);
// a = 3;
// console.log(a:, a, b:, b);
//Значение объектов и функций копируютсся за посыланием
const array1 = [1, 2, 3, 4, 5];
const array2 = array1;
console.log(array1 === array2);
const array3 = array1.slice();
console.log(array1 === array3);
console.log(array1 , array3);
array2.push(js);
console.log(array1, array2, array3);
array2.unshift(html);
console.log(array1, array2, array3);
array3.pop();
array3.shift();
console.log(array1, array2, array3);

//split & join
const str1 = "apples, orandes, cherrys";
const arr1 = str1.split(" ");
console.log(arr1);
const arr2 = str1.split(",");
console.log(arr2);
const str2 = arr1.join(" - ");
console.log(str2);

//indexOF & includes(boolean)
console.log(array1.indexOf(js)); //6
console.log(array1.indexOf(css)); //-1
console.log(array1.indexOf(3)); //3

console.log(array1.includes(js)); //true
console.log(array1.includes(css)); //false
console.log(array1.includes(3)); //true

//splice
// let allArrays = array1.concat(array2).concat(array3);
// let allArrays = array1.concat(array2, array3);
// console.log(allArrays);

//функции
//function expression
const func = function(a, b) {
    return a + b;
}
console.log(func(2, 3)); //2 + 3 = 5

//arron function
const func1 = (a, b) => a-b;
console.log(func1(9, 8)); //9 - 8 = 1

const func2 = c => console.log(c);
func2("Hello world") //Hello world

//function declaration
function decl (par1, par2) {
  return console.log(par1 * par2);
}
decl(3,4); //3 * 4 = 12

//параметры по умолчанию 
const toBuyProducts = function (product, count) {
  return console.log('I bought ${count} of ${product}')
}
toBuyProducts('bread', 8);
toBuyProducts(8, 'bread');
toBuyProducts(8);
toBuyProducts('apple');
toBuyProducts();


const total = function () {
  let sum = '0';
  for(const argumenst of arguments) {
    sum += arguments;
  }
  return sum;
}
console.log(total1(2, 6));
console.log(total1(7, 89, 8, 5))

