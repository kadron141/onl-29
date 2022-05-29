/*Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, 
в которой первые буквы слов будут поменяны местами. Пример: 

“not picking” ->  “pot nicking” */

let testStr = 'not picking';

function charChange(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result += str[i + 1] + str.substring(1, i + 1) + str[0] + str.substring(i + 2);

            return result;
        }
    }
}

console.log(charChange(testStr));