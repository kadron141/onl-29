"use strict"


let bulletNumber = +prompt('в каком гнезде пуля?');
let shotsFired = +prompt('колличество выстрелов?');

if (bulletNumber <=7 && shotsFired <=7 && bulletNumber > 0 && shotsFired > 0 ) {
	console.log('Ошибка. Введите значения меньше 8.');

}

for (let i = 1; i <= shotsFired; i++) {
   if (bulletNumber === i) {
      console.log('бах!!!!');
      console.log('Игрок не выжил');
      break;
   } else {
      console.log('щёлк');
   }
}

if (bulletNumber > shotsFired) {
   console.log('Игрок выжил');
}