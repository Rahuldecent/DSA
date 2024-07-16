

// 2 pointer method
function reverseArr(arr) {
  let i =0; j=arr.length-1

  while(i<j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]= temp
    i++;
    j--;
  }
  return arr
}
var res = reverseArr([3,4,7,1,8])
console.log(res)
