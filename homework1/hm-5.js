"use strict";
let message;
let price;
let country = prompt("В яку країну бажаєте оформити доставку?");
if (country !== null) {
  country = country.toLowerCase();
}
switch (country) {
  case "китай":
    price = 100;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(
      (message =
        "Доставка в " + country + " буде коштувати " + price + " кредитів")
    );
    break;
  case "чилі":
    price = 250;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(
      (message =
        "Доставка в " + country + " буде коштувати " + price + " кредитів")
    );
    break;
  case "австралія":
    price = 170;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(
      (message =
        "Доставка в " + country + " буде коштувати " + price + " кредитів")
    );
    break;
  case "індія":
    price = 80;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(
      (message =
        "Доставка в " + country + " буде коштувати " + price + " кредитів")
    );
    break;
  case "ямайка":
    country = country.charAt(0).toUpperCase() + country.slice(1);
    price = 120;
    console.log(
      (message =
        "Доставка в " + country + " буде коштувати " + price + " кредитів")
    );
    break;
  default:
    console.log((message = "У вашій країні доставка недоступна"));
}
alert(message);