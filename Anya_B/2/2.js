/* 2. Написать программу “русская рулетка”
Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) 
задаются в коде (оба числа не должны быть выше 7, в противном случае выводим 
сообщение об ошибке). На каждую попытку выстрела должно выводиться сообщение “щёлк”, 
на успешный выстрел “бах!”. В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил” */

let bulletNumber = 7;
let shotsFired = 6;

if (shotsFired <= 7 && bulletNumber <= 7 && shotsFired != 0 && bulletNumber != 0) {
    let result = true;
    for (let i = 1; i <= shotsFired; i++) {
        if (bulletNumber === i) {
            console.log('Бах!');
            console.log('Игрок не выжил');
            
            result = false;
            break;
        }
        
        console.log('Щёлк!');
    }
    if (result) {
        console.log('Игрок выжил');
    } 
} else {
    console.log('ошибка :(');
}