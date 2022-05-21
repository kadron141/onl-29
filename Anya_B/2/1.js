/* 1. Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
— “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
— “корень уравнения повторяется и равен %ваш ответ%
— “у уравнения нет корней” */

let a = 1;
let b = 5;
let c = 5;

let discriminant = b ** 2 - 4 * a * c;
console.log(`D = ${discriminant}`);

if (discriminant < 0) {
    console.log('у уравнения нет корней');
} else if (discriminant === 0){
    let x = -b / (2 * a);

    console.log(`корень уравнения повторяется и равен ${x}`);
} else {
    let x1 = (-b + discriminant ** 0.5) / (2 * a);
    let x2 = (-b - discriminant ** 0.5) / (2 * a);

    console.log(`корни уравнения: х1 = ${x1}, х2 = ${x2}`);
}

// или так
if (discriminant < 0) {
    console.log('у уравнения нет корней');
} else {
    let x1 = (-b + discriminant ** 0.5) / (2 * a);
    let x2 = (-b - discriminant ** 0.5) / (2 * a);

    if (x1 === x2) {
        console.log(`корень уравнения повторяется и равен ${x1}`);
    } else {
        console.log(`корни уравнения: х1 = ${x1}, х2 = ${x2}`);
    }
} 
