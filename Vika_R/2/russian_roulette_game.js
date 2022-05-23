"use strict"
/*
2. Написать программу “русская рулетка”
Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде 
(оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). 
На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. 
В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”
*/

const MIN_COUNT_BULLET_SLOTS = 1;
const MAX_COUNT_BULLET_SLOTS = 7;

let bulletNumber = +prompt('в каком гнезде пуля?');
let shotsFired = +prompt('колличество выстрелов?');

if ((bulletNumber >= MIN_COUNT_BULLET_SLOTS && bulletNumber <= MAX_COUNT_BULLET_SLOTS) &&
    (shotsFired >= MIN_COUNT_BULLET_SLOTS && shotsFired <= MAX_COUNT_BULLET_SLOTS)) {
        for (let i = 1; i <= shotsFired; i++) {
            if (bulletNumber === i) {
                console.log('бах!');
                console.log('Игрок не выжил...');
                break;
            } else {
                console.log('щёлк');
            }
        }
        
        if (bulletNumber > shotsFired) {
            console.log('Игрок выжил!!');
        }

} else{
    console.log(`Ошибка: введите числа в диапазоне от ${MIN_COUNT_BULLET_SLOTS} - ${MAX_COUNT_BULLET_SLOTS}`);
}

