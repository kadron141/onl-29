// 1. Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
// переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
// — “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
// — “корень уравнения повторяется и равен %ваш ответ%
// — “у уравнения нет корней”

"use strict"

// a * x**2 + b * x + c = 0;

let a = +prompt('enter variable a');
let b = +prompt('enter variable b');
let c = +prompt('enter variable c');
let x1, x2;

let discriminant = b**2 - 4 * a * c;

if (discriminant > 0) {
x1 = (-b - Math.sqrt(discriminant)) / (2 * a);

x2 = (-b + Math.sqrt(discriminant)) / (2 * a);

alert ( `корни уравнения: х1 = ${x1}, x2= ${x2}.`);

} else if (discriminant === 0) {

  x1 = (-b + Math.sqrt(discriminant)) / (2 * a);

  alert ( `корень уравнения повторяется и равен:${x}.`);

} else {
  alert (`у уравнения нет корней`);

}


