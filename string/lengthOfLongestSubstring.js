function lengthOfLongestSubstring(s) {
    let finalStr = ""
    for (let item of s) {
        for (let ch of finalStr) {
            if (ch !== item) {
                finalStr += item
            } else {
                return finalStr.length
            }

        }
    }
}

// console.log(lengthOfLongestSubstring("abcabcbb"))



//  possible  substring  without repeting char
let s = "abac" // output - 8("a","b","a","c","ab","ba","ac","bac")


function countValidSubstring(s) {
let set = new Set();
let left = 0;
let count = 0;

for(let right = 0; right < s.length; right++) {

    while(set.has(s[right])) {
        set.delete(s[left])
        left++;
    }

    set.add(s[right]);
    console.log(set)

    count = count + right-left + 1
}
return count
}

var res = countValidSubstring(s);
console.log(res)  // 8