'use strict'

function comesAfter(str, letter) {
    let result = '';
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            result = result + (str[i + 1] || '');
        }
    }

    return result;
}
