
// brute force approach
// function countPairs(arr, k) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) === k) {
//         console.log(arr[i], arr[j]);
//         count++;
//       }
//     }
//   }

//   return count;
// }



// optimized approach

function countPairs(arr, k) {
    let count = 0;
    let set = new Set(arr);

    for (let item of arr) {
        if (set.has(item + k)) {
            count++;
        }
    }

    return count;
}



let arr = [1, 5, 3, 4, 2]
let k = 2

console.log(countPairs(arr, k))


// console.log("Helloooooooo")