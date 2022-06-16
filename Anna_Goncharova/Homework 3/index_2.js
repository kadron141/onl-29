'use strict'

// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"


function returnLetters(str, letter) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter || str[i] === letter.toUpperCase()) {
        if (str[i+1] != '.' && str[i+1] !== '8' && str[i+1] !== ' ') {
          newStr += str[i+1];
        }
      }
    }
    return newStr;
  }
  
  returnLetters("Katy Perry is on the radio!", 'r');
  returnLetters("Pirates say arrrrrrrrr.", 'r');