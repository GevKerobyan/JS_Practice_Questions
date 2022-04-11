/*

7.    Write a JavaScript function that checks if the given string includes the given substring.

      EX: str = “Hello” substr = “ell” => returned value is true
      EX: str = “Kill” substr = “lolo” => returned value is false

*/

const str = 'Hello';
const sub = 'ell';

const checkInclude = (str, sub) => {
   return (str.includes(sub));
}
console.log('consoling: checkInclude(str, sub) :::', checkInclude(str, sub))

// -------------------- DONE -------------------- \\