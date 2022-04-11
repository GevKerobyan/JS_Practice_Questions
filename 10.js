/*

10.    Write a JS function, which will work as a calculator.
It will accept 3 arguments, first number, second number and the sign

EX: -----

calc(1, 2, ‘+’) =>3
calc(1, 2, ‘-’) =>-1
calc(1, 2, ‘*’) =>2
calc(1, 2, ‘/’) =>½

*/

const calc = (n1, n2, sign) => {

   switch (n1, n2, sign) {

      case '+': {
         return n1 + n2
      }

      case '-': {
         return n1 - n2
      }

      case '*': {
         return n1 * n2
      }

      case '/': {
         return n1 / n2
      }
   }
}

console.log('consoling: calc(24, 55, -) :::', calc(24, 55, '*'))

// -------------------- DONE -------------------- \\