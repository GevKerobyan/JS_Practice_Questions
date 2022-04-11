/*

2.    Return the sum of all arguments passed to function.

      Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4

*/

let arr = [1, 2, 3, 4, 5];

const argsSum = (arr) => {
   let sum = arr.reduce((acc, curr) => {
      return acc += curr;
   })
   return sum
}
console.log('consoling: argsSum(arr) :::', argsSum(arr))

// -------------------- DONE -------------------- \\