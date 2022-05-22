"use strict"

const a = 2;
const b = 6;
const c = 4;

let res1;
let res2;

const discriminant = b * b - 4 * a * c;

if (discriminant === 0) {
    res1 = res2 = -b / (2 * a);
    console.log(`корень уравнения повторяется и равен ${res1}`);
} else if (discriminant > 0) {
    res1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    res2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(res1, res2);
} else {
    console.log('у уравнения нет корней');
}