'use strict'
// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы
//  следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

function comesAfter(str,letter) {
  
   let result = '';
   str = str.toLowerCase();
   letter = letter.toLowerCase();
     

   for (let i = 0; i < str.length; i++) {
    
       if (str[i] === letter) {
           result +=  str[i + 1] || '';
        } 
   
   } 
   console.log(result); 
   return result;
   
}


 
comesAfter('are you really learning Ruby', 'r');
comesAfter('Katy Perry is on the radio!', 'r');
comesAfter('Pirates say arrrrrrrrr.','r');
comesAfter('r8 your friend','r');


