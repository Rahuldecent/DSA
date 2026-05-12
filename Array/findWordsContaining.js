/* 
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
*/


// var findWordsContaining = function (words, x) {
//     let Output = []
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].includes(x)) {
//             Output.push(i)
//         }
//     }
//     return Output

// };

var findWordsContaining = function (words, x) {
    let output = []
    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                output.push(i)
                break;
            }
        }
    }
    return output;
};

const words = ["abc", "bcd", "aaaa", "cbc"], x = "a"
console.log(findWordsContaining(words, x))

// sc - O(1)