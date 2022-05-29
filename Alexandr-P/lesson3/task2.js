// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"


function comes_after(str,l) {
 
  let result = '';

  for (let i = 0; i < str.length -1; i++){
    if (str[i].toLowerCase() === l && 
        str[i + 1].toLowerCase() !== str[i + 1].toUpperCase()) {

      result += str[i + 1];
    }
    
  } 
  return result;

}
