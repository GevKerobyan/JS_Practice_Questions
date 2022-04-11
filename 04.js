/*

4.    Let’s say we have an object with linked props (i.e

         let list = {
            value: 1,
            next: {
               value: 2,
               next: {
                  value: 3,
                  next: {
                     value: 4,
                     next: null
                  }
               }
            }
         };
      );
      Print all the values with recursion

*/

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};

const recursivePrint = (obj) => {
    console.log('consoling: obj.value :::', obj.value )
      if (obj.next) {
         recursivePrint(obj.next);
      }   
}
console.log('consoling: recursivePrint(list) :::', recursivePrint(list) )

// -------------------- DONE -------------------- \\