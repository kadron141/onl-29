"use strict"


let a = +prompt('Введите значение a (a не может быть равное 0): ');
let b = +prompt('Введите значение b: ');
let c = +prompt('Введите значение c: ');

let x1, x2, D;

D = b ** 2 - 4 * a * c;
console.log(`discriminant ${D}`);

if (D === 0) {
    x1 = -b / (2 * a);
   console.log(`один корень уравнения: ${x1}`);
} else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
   if (x1 === x2) {
      console.log(`корень уравнения повторяется и равен: ${x1}`);
   }
   console.log(`корни уравнения: х1 = ${x1}, х2 = ${x2}`);
} else if (D < 0) {
   console.log('у уравнения нет корней');
}