"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let enterPass = prompt("Введіть пароль, будь ласка!");
if (enterPass == ADMIN_PASSWORD) {
  console.log(message = "Ласкаво просимо!");
} else if (enterPass == null) {
  console.log(message = "Скасовано користувачем!");
} else {
  console.log(message = "Доступ заборонений, невірний пароль!");
}
alert( message );