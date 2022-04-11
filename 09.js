/*

9.    Write a JavaScript function that accepts a string as a parameter and find the longest word within
      the string.

      Example string : 'Web Development Tutorial'
      Expected Output : 'Development'

*/

let str = 'Web Development Tutorial';
let newStr = str.split(' ');
console.log('consoling: newStr :::', newStr)

const findLongest = (str) => {
   let res = str[0];
   for (let i = 1; i <str.length; i++) {
      if (str[i].length> res.length) {
         res=str[i]
      }else continue;
   }
   return res;
}
console.log('consoling: findLongest :::', findLongest(newStr))

// -------------------- DONE -------------------- \\