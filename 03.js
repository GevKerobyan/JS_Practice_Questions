/*

3.    Create function that will return all the most repeated
      element.

*/

let mostRepArr = [1, 1, 1, 1, 1, 4, 4, 2, 2, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6]

const findMostRep = (arr) => {
   let newObj = {};
   for (let i = 0; i < arr.length; i++) {
      if (!Object.keys(newObj).includes(arr[i].toString())) {
         newObj[arr[i]] = 1;
      } else if (Object.keys(newObj).toString().includes(arr[i].toString())) {
         newObj[arr[i]] += 1;
      }
   }
   let values = Object.values(newObj);
   let maxSort = values.sort();
   let max = maxSort[maxSort.length - 1];
   let result = [];

   for (key in newObj) {
      if (newObj[key] === max) {
         result.push(key);
      } else {
         continue
      }
      return result
   }
   return result
}

console.log('consoling: findMostRep(mostRepArr) :::', findMostRep(mostRepArr))


// -------------------- DONE -------------------- \\