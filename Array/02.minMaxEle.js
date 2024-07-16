//Find the maximum and minimum element in an array
/*Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
Maximum element is: 35
*/
function maxMinEle(arr) {
    let max = -Infinity, min = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else {
            min = arr[i]
        }
    }
    return [max, min]
}
var res = maxMinEle([3, 4, 7, -1, 9])
console.log(res)

