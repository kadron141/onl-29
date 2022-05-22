'use strict'

// 1. Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
// переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
// — “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
// — “корень уравнения повторяется и равен %ваш ответ%
// — “у уравнения нет корней”

let leadingCoefficient = 2;
let сoefficient = -16;
let freeСoefficient = 30;
const NUMERIC_INDEX = 4;
const FOR_ARGUMENT_NUMERIC_INDEX = 2;
let discriminant = сoefficient**2 - NUMERIC_INDEX * (leadingCoefficient * freeСoefficient );
let result1 = 0;
let result2 = 0;


if (discriminant < 0){
    console.log ('У уравнения нет корней');
} else if (discriminant > 0){
    result1 += ( (-сoefficient + Math.sqrt(discriminant) ) / (leadingCoefficient * FOR_ARGUMENT_NUMERIC_INDEX));
    result2 += ( (-сoefficient - Math.sqrt(discriminant) ) / (leadingCoefficient * FOR_ARGUMENT_NUMERIC_INDEX));
    console.log ('Корни уравнения: х1 = ' + result1 + ', х2 = ' + result2);
} else { 
    result1 += ( (!сoefficient) / (leadingCoefficient * FOR_ARGUMENT_NUMERIC_INDEX));
console.log ('Корень уравнения повторяется и равен ' + result1);
}
