


let arr = [0,1,0,3,12]  // [1,3,12,0,0]

function moveZero(arr) {
   let i = 0;

   for(let j  = 0; j < arr.length; j++) {
    
       if(arr[j] != 0) {
          let temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
          i++
       }
   }
   return arr
}

console.log(moveZero(arr))