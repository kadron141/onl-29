"use strict";

// Дана строка из двух слов, разделённых пробелом.
// Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. Пример:

// “not picking” ->  “pot nicking”

function newLetters(str) {
   let secondLetter = '';
   let newStr = '';

   for (let i = 0; i < str.length; i++) {
      if (str[i - 1] === " ") {
      secondLetter += str[i];
      }
	}

   for (let i = 0; i < str.length; i++) {
      if (i === 0) {
      newStr += secondBigLetter;
      } else if (str[i - 1] === " ") {
      newStr += str[0];
      } else {
      newStr += str[i];
      }
      
   }
   return newStr;
}
newLetters("not picking");