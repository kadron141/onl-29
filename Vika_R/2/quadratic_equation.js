"use strict"
/*
1. Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
— “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
— “корень уравнения повторяется и равен %ваш ответ%
— “у уравнения нет корней”
*/

let a = +prompt('Введите значение a (a не может быть равное 0): ');

if (a === 0) {
    a = null;
    console.log('a не может быть равно 0, попробуйте ещё раз');
    a = +prompt('Введите значение a (a не может быть равное 0): ');
}

let b = +prompt('Введите значение b: ');
let c = +prompt('Введите значение c: ');

let x1, x2, discriminant;

discriminant = b * b - 4 * a * c;
console.log(`discriminant ${discriminant}`);

if (discriminant === 0) {
    x1 = -b / (2 * a);
    console.log(`корень уравнения повторяется и равен: ${x1}`);
} else if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`корни уравнения: х1 = ${x1}, х2 = ${x2}`);
} else if (discriminant < 0) {
    console.log('у уравнения нет корней');
}