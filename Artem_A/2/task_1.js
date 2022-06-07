'use strict'

// 1

// Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, 
// в которой первые буквы слов будут поменяны местами. Пример: 
// “not picking” ->  “pot nicking”

let str = 'not picking';
let newStr = '';

let firstLetterWord = '';
let secondLetterWord = str[0];

// console.log(newStr);

function wordReverse() {
    for (let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            firstLetterWord += str[i]; // присваиваем первую букву второго слова в новую переменную
        }
    }
    newStr += firstLetterWord; // затем ее в переменную новая строка newStr
    // console.log(newStr);
    
    for (let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            newStr += secondLetterWord; 
            continue;
        }
        newStr += str[i];
    }
}
wordReverse();
console.log(newStr);










