
// Input: s = "anagram", t = "nagaram"
// Output: true

function validAnagram(s,t) {
   let map1 = new Map(); let map2 = new Map();
   if (s.length !== t.length) return false;
   for(let item of s) {
     if(map1[item]) {
        map1.set(item,map1.get(item)+1)
     } else {
        map1.set(item,1)
     }
   }

   for(let item of t) {
     if(map2[item]) {
        map2.set(item,(map2.get(item))+1)
     } else {
        map2.set(item,1)
     }
   }

}

let s = "anagram", t = "nagaram"
console.log(validAnagram(s,t))