// 2. 

// Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде 
// (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). 
// На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. 
// В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

let bulletNumber = +prompt('в каком гнезде пуля:');
let shotsFired = +prompt('кол-во выстрелов:');

    if (bulletNumber > 7 || bulletNumber <= 0) {
        console.log('Error!');
     }else {
        for (let i = 1; i <= shotsFired; i++) {
            if (i === bulletNumber) {
                console.log('Bah');
                break
            } else {
                console.log('щелк');
            }
        }
     }


    
    
    