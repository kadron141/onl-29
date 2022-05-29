"use strict"


let bulletNumber = prompt('В каком гнезде пуля');
let shotsFired = prompt('Количество выстрелов');

if (bulletNumber > 8 || shotsFired > 8) {
	console.log('Ошибка.');
	

} else {
	for (let i = 1; i <= shotsFired; i++) {
		if (i < bulletNumber) {
			console.log(i + '- Щёлк');
		} else if (i === bulletNumber) {
			console.log(i + '- Бах');
			console.log('Игрок не выжил');
			break;
		}
	}
}

if (bulletNumber > shotsFired) {
	console.log('Игрок выжил');
}