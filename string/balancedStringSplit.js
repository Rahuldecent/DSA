/*Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it into some number of substrings such that:

Each substring is balanced.
Return the maximum number of balanced strings you can obtain.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
*/


let str = "RLRRLLRLRL"
function balancedStringSplit(str) {
    let L = 0;
    let R = 0;
    let count = 0;

    for (let item of str) {

        if (item === "L") {
            ++L;
        } else {
            ++R;
        }

        if (L === R) {
            count++;
            L = R = 0
        }
    }
    return count;
}

console.log(balancedStringSplit(str))
