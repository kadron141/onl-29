'use strict'

// 2. Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде 
// (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке).
// На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”.
//  В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

let bulletNumber = 3;
let shotsFired = prompt('Введите количество выстрелов:');
let shoot;


if (bulletNumber >= 7 || shotsFired >= 7) {
    alert('Ошибка! Барабан вмещает только 6 патронов');
} else {
    for (let i = 1; i <= shotsFired; i++) {
    if (i === bulletNumber) {
      shoot = alert('бах!', i);
      alert('Игрок не выжил');5
      break;

    } else {
      shoot = alert('щёлк', i);

      if (bulletNumber >= shotsFired && i >= shotsFired) {
        alert('Игрок выжил');
      }
    }
}
}