/**
 * @param {string} s
 * @return {number}
 */

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
var lengthOfLastWord = function(s) {
   s = s.trim();
    let count = 0;
   for(let i= s.length-1; i >= 0; i--) {
    console.log(s[i],"sssssssssss")
     if(s[i] != " ") {
        console.log(s[i],"s[i]")
        count++;
     }else {
        break;
     }

   }
   return count; 
};
// let s = "Hello World"
let s = "    day"

var res = lengthOfLastWord(s);
console.log(res,"res")