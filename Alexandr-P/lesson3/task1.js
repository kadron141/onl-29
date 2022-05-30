// Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. Пример: 

// “not picking” ->  “pot nicking”

function spoonerize (words) {
  const spaceIndex = words.indexOf(' '); 

  return words.substring(spaceIndex + 1, spaceIndex + 2) +
  words.substring(1, spaceIndex) +
  ' ' +
  words.substring(0, 1) +
  words.substring(spaceIndex + 2);
  }


