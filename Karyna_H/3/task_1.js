'use strict'

function getParsedString(str) {
    let result = '';
    let letterOne = str[0];
    let letterTwo = '';
    let idxLetterTwo = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            idxLetterTwo = i + 1;
            letterTwo = str[idxLetterTwo];
        }

        if (i > 0 && i !== idxLetterTwo) {
            result = result + str[i];
        }

        if(i !== 0 && i === idxLetterTwo) {
            result = result + letterOne;
        }
    }

    return letterTwo + result;
}
