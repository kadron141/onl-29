'use strict'


// Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. 
// Пример: 
// “not picking” ->  “pot nicking”

let Words = prompt('Введите слова')
let newWords = '';

let firstLetter = '';
let secondLetter=  Words[0];

for(let i = 1; i < Words.length; i++){
  if (Words[i-1] === ' ') {
     firstLetter = Words[i];

} }
// получили букву p
newWords += firstLetter;


for( let i = 1; i < Words.length;i++){
 if(Words[i-1] === ' '){
    newWords += secondLetter;
   //  получили букву n
    continue;
 }
 newWords += Words[i];
}

console.log(newWords);



// // Альтернативное решение ,но работает только для этой строчки,т.к. если будет другое количество символов в строчке,всё изменится :(

   // let Words = 'not picking';
   // let newWords = '';
   
   // let residualLetter1 = Words.slice(1,3 );
   // let residualLetter2 = Words.slice (-6);
   
   // let firstLetter = '';
   // let secondLetter=  Words[0];
   
   // for(let i = 1; i < Words.length; i++){
   //   if (Words[i-1] === ' ') {
   //      firstLetter = Words[i];
   
   // } }
   // // получили букву p
   
   // newWords += firstLetter +residualLetter1 +Words[3]+ Words[0] + residualLetter2;
   
   
   // console.log(newWords);
   


   
