// Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. Пример:

// “not picking” ->  “pot nicking”
"use strict";
let string = "not picking";
let result = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    result +=
      string[i + 1] +
      string.substring(1, i + 1) +
      string[0] +
      string.substring(i + 2);
  }
}

console.log(result);
