'use strict'

// 2. Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде 
// (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). 
// На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. 
// В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

let bulletNumber = 6;
let shotsFired = prompt('Введите количество выстрелов:', 0);
let shoot;


if (bulletNumber <= 7 && shotsFired <= 7) {
  for (let i = 1; i <= shotsFired; i++) {
    if (i === bulletNumber) {
      shoot = prompt('БАХ', i);
      alert('Игрок не выжил');
      break;
    } else {
      shoot = prompt('щёлк', i);
      if (bulletNumber >= shotsFired && i >= shotsFired) {
        alert('Игрок выжил');
      }
    }
  }
} else {
  alert('Error. Количество выстрелов должно быть не более 7-ми ');
}