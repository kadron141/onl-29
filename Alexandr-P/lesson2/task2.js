// 2. Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

"use strict"

const bulletNumber =  +prompt('enter variable bulletNumber');
const shotsFired = +prompt('enter variable shotsFired');

if (bulletNumber && shotsFired && bulletNumber <= 7 && shotsFired <= 7) {
	let alive = true;
	
	for (let i = 1; i <= shotsFired; i++) {
		alert ('щёлк');
		if (bulletNumber == i) {
			alert ('бах!');
			alive = false;
			break;
		}
	}
	
	alert (alive ? 'игрок выжил' : 'игрок не выжил');
	
} else {
  alert ('Вы ввели слишком большое число');
}
