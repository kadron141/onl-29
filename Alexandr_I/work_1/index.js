"use strict"


const a = prompt('Введите значение a');
const b = prompt('Введите значение b');
const c = prompt('Введите значение c');

let x1 = '';
let x2 = '';
let D = b ** 2 - 4 * a * c;

if (D < 0) {
	console.log('У уравнения нет корней');
} else if (D === 0) {
	x1 = -b / (2 * a);
	console.log('корень уравнения повторяется и равен' + x1);
} else {
	x1 = (-b + Math.sqrt(D)) / (2 * a);
	x2 = (-b - Math.sqrt(D)) / (2 * a);
	console.log('корни уравнения: x1 = ' + x1 + ', x2 = ' + x2);
}

