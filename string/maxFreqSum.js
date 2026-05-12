/*
Input: s = "successes"

Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.

*/

let str = "aeiaeia"
function maxFreqSum(s) {
    let mapFreq = {};
    let vf = 0;
    let cf = 0

    for (let item of s) {
        mapFreq[item] = (mapFreq[item] || 0) + 1
    }
    for (let [key, value] of Object.entries(mapFreq)) {
        if (["a", "e", "i", "o", "u"].includes(key)) {
            if (value > vf) vf = value
        } else {
            if (value > cf) cf = value
        }
    }
    return cf + vf
}

console.log(maxFreqSum(str));