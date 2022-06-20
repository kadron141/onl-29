'use strict'

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
// Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
// Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow (string){
    let min, max;

    if (string[0] ==='-'){
        min = - string[1];
        max = - string[1];
    } else{
        max = string[0];
        min = string[0];
    }
 
    for (let i = 0; i < string.length; i++){


        if (string[i] !== ' ' && string[i] !== '-'){
            let numToCompare;

            if (i !== 0 && string[i-1] ==='-'){
                numToCompare = -string[i];
            } else {
                numToCompare = string[i];
            }

            if (numToCompare > max){
                max = numToCompare;
            }
            if (numToCompare < min){
                min = numToCompare;
            }
        }
    }

    return max + ' ' + min;
}



// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// ```javascript
let key = false
let documents = true
let pen = true
let apple = false
let orange = true
// ```

let shouldGoToWork;

shouldGoToWork = key && documents && pen && ( apple || orange);

if(shouldGoToWork) {
 console.log('идем на работу');
} else {
console.log('Остаемся дома');
}


//  Проверить все числа от 1 до 100 и сделать следующее:

//     1. Если число делится без остатка на 5 выводим сообщение Buzz
//     2. Если число делится без остатка на 3 выводим сообшение Fizz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizzBuzz

for ( let i = 1; i <= 100; i++ ) {

    let result = '';

    if (i % 3 === 0)
    { result = 'Fizz';
}
    if (i % 5 === 0){
        result += 'Buzz';
    }

    console.log (result || i)
}

let name;
let admin;

name ='john';

admin = name;

alert(admin)

const PLANET_EARTH

let currentUserName
