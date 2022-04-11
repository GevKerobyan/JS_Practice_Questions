/*

5.    Reduce, Map…..

*/

// ---------- Map Implementation ----------\\

const arrMap = [11, 3, 5, 2, 5, 5, 7, 8, 8];

const callBack = (item) => {
 return item*2;
}

Array.prototype.mapot = function (callBack) {
   let newArr = [];
   for (let i = 0; i<this.length; i++) {
      newArr.push(callBack(this[i], i, this));
   }
   return newArr;
}

console.log('consoling: arr.mapot(callBack) :::', arrMap.mapot(callBack) )


// ---------- Reducer Implementation ----------\\

const arrRed = [1,2,3];

const callReduce = (acc, item, index) => {

   return acc+=item;
}

Array.prototype.reducot = function (callReduce, init) {
   let start;
   let reducotAcc;
   init ? (reducotAcc=init, start  = 0) : (reducotAcc=this[0], start = 1);
   for (let i = start; i<this.length; i++) {
       reducotAcc = callReduce(reducotAcc, this[i], i, this);
   }
   return reducotAcc;
}

console.log(arrRed.reducot(callReduce))

// -------------------- DONE -------------------- \\