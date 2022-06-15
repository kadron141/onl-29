// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

"use strict";

function comesAfter(string, letter) {
  let result = "";

  for (let i = 0; i < string.length - 1; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      result += string[i + 1].toLowerCase();
    }
  }
  return result;
}
