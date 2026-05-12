
/**
 * 
 * @param {*} jewels 
 * @param {*} stones 
 * 
 * 
 * 
 * Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 */


// var numJewelsInStones = function(jewels, stones) {
//     let count = 0;

//     for(let i =0; i< stones.length; i++) {

//     for(let j = 0; j <jewels.length; j++) {
//        if(stones[i] === jewels[j]) count++
//     }
//     }
//     return count
// };


var numJewelsInStones = function(jewels, stones) {
    let map = new Map()
    let count = 0;
    for(let item of jewels) {
        if(!map.has(item)) {
            map.set(item,1)
        } else {
            map.set(item,map.get(item)+1)
        }
    }

    for(let item of stones) {
        if(map.has(item)) {
            count++;
        }
    }
    return count;
    console.log(map,"map")
};
let jewels = "aA", stones = "aAAbbbb"
var res = numJewelsInStones(jewels,stones);
console.log(res)