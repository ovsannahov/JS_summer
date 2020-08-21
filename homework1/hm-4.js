"use strict";
let credits = 23580;
let pricePerDroid = 3000;
let message;
let number = prompt("Скільки дроїдів бажаєте замовити?");
 if (number === null) {
   console.log(message = 'Скасовано користувачем!');
 } else {
    console.log(pricePerDroid * number);
    if (pricePerDroid * number > credits) {
        console.log(message = 'Недостатньо коштів на рахунку!');
    } else {
        let lastPrice = pricePerDroid * number;
        let rest = credits - lastPrice;
        console.log(message = "Ви купили " + number + " дроїдів, на рахунку залишилося " + rest + " кредитів.");
    }
 }
 alert ( message );