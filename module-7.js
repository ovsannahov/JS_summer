"use strict";
// варіанти отримання доступу до елементів html

// 1) через ім'я тега
const title = document.querySelector("h1");
title.textContent = "Перезаписую значення";
title.style.color = "blue";
title.style.backgroundColor = "green";

const list = document.querySelector("ul");
list.classList.add("myNewClass");
list.classList.remove("myNewClass");

const image = document.querySelector("img");
image.setAttribute("alt", "value");
image.src =
  "https://images.pexels.com/photos/3250260/pexels-photo-3250260.jpeg?cs=srgb&dl=pexels-elizaveta-kozorezova-3250260.jpg&fm=jpg";
image.width = 250;
// image.removeAttribute("width");

// 2) через клас
// const title = document.querySelector(".Main_Title");
// const title = document.getElementsByClassName("item");

// 3) через ідентифікатор
// const title = document.querySelector("#title");
// const title = document.getElementById("title");

// 4) через data-атрибути
// title = document.querySelector([data-action="action"])
console.log(title);
console.dir(title);

// створення елементів
const newLi = document.createElement("li");
newLi.textContent = "4";
console.log(newLi);
list.appendChild(newLi);
// list.prepend("додає на початок");
// list.append("кілька елементів");
// list.removeChild(newLi);
newLi.remove(); // новий метод

const beforeList = document.createElement("a");
beforeList.textContent = "1";

const beginList = document.createElement("a");
beginList.textContent = "2";

const endList = document.createElement("a");
endList.textContent = "3";

const afterList = document.createElement("a");
afterList.textContent = "4";

list.style.border = "1px solid";
list.insertAdjacentElement("afterbegin", beginList);
list.insertAdjacentElement("beforebegin", beforeList);
list.insertAdjacentElement("beforeend", endList);
list.insertAdjacentElement("afterend", afterList);

const newImage = image.cloneNode(true);
list.insertBefore(newImage, endList);

const desc = <h2 style="color:green">Hello!<h2>;
list.insertAdjacentHTML("beforeBegin", desc)
console.dir(desc);
console.dir(endList);
// desc.style.color = "green"; - не працює

list.removeChild(endList);
afterList.remove();

list.innerHTML = "";
list.innerHTML = <li style="color:blue">1<li> <li>2<li> <li>3<li>;

const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("Обробка кліку по кнопці");
    console.log(event.type); // елемент, на якому відбулася подія
    console.log(event.target); // елемент, де прошла подія
    console.log(event.currentTarget);
    list.style.border = "10px solid red";
});

const form = document.querySelector("form");
const input = document.querySelector(".input");
input.addEventListener("input", () => {
    console.log("Обробка події input");
    console.dir(input.value);
});

form.addEventListener("submit", () => {
    event.preventDefault();
    console.log("Обробка події submit");
    console.dir(form);
});

input.addEventListener("focus", () => {
    input.style.backgroundColor = "green";
    console.dir(input);
});

input.addEventListener("blur", () => {
    input.style.border = "2px solid red";
    input.style.backgroundColor = "white";
    console.dir(input);
});

input.addEventListener("change", () => {
    console.dir(input.value);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Відбулося завантаження сторінки");
});

document.addEventListener("load", () => {
    console.log("Сторінка завантажилася");
});

document.addEventListener("beforeunload", () => {
    confirm("Ви покидаєте сторінку");
});

const buttonsList = document.querySelector(".buttons");
buttonsList.style.border = "2px solid";
buttonsList.addEventListener("click", () => {
    console.log(event.target);
    console.log(event.currentTarget);
})

form.addEventListener("input", () => {
    console.log(event.target);
    console.log(event.currentTarget);
    let value = event.target;
    console.log(value.value);
})