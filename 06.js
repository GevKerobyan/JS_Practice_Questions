/*

6.    Write a function which will remove all repeated items of array.

*/

const repArr = [11, 3, 5, 2, 5, 5, 7, 8, 8];

const removeRepeat = (arr) => {
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
         result.push(arr[i]);
      }
   }
   return result;
}
console.log('consoling: removeRepeat :::', removeRepeat(repArr))

// -------------------- DONE -------------------- \\