let arr = [1,2,3,4] // [4,3,2,1]


function reverseArr(arr) {
    let n = arr.length;
    let i = 0;
    let j = n - 1

   while(i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--;
   }
   return arr
}

console.log(reverseArr(arr))