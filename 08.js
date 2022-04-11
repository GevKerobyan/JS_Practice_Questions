/*
8.    Write a JavaScript function that accepts a string as a parameter and converts the first
      letter of each word of the string in the upper case.
      EX: ‘i love you’ => ‘I Love You’, (use str.split function)
*/

let str = 'i love you';

const upperCase = (str) => {

   let newStr = str.split(' ');
   console.log('consoling: newStr :::', newStr )
let res = [];
   for(let i = 0; i<newStr.length; i++) {
      res.push((newStr[i].charAt(0).toUpperCase()).concat('', newStr[i].slice(1)))
      
      console.log('consoling: newStr[i].charAt(0) :::', newStr[i].charAt(0) )
   }
return res.join(' ');
}

console.log(upperCase(str));

// -------------------- DONE -------------------- \\