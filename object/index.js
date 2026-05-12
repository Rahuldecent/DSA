// let str = "aaabbc"

// function freqCount() {
//     let obj = {}
//     for (let s of str) {
//         obj[s] = (obj[s] || 0) + 1
//     }
//     return obj
// }
// var res = freqCount(str);
// console.log(res,"resss")


// group by properties

// let arr = [
//     { type: "fruit", name: "apple" },
//     { type: "veg", name: "carrot" },
//     { type: "fruit", name: "Mango" },

// ]

// output : {
//   fruit: [{name:"apple"}],
//   veg: [{name:"carrot"}]
// }
// function groupByProperties(arr) {
//     let map = {};
//     for (let item of arr) {
//         let key = item.type
//     map[key] = map[key] || [] 

//     map[key].push(item)
//     }

//     return map
// }

// var res = groupByProperties(arr)
// console.log(res, "resss")


// find duplicate element
// [1,2,2,3,3,3] → {2:2, 3:3}
// function findDuplicate(arr) {
//     let obj = {}

//     for (let item of arr) {

//         obj[item] = (obj[item] || 0) + 1
//     }
//     for (let key of Object.keys(obj)) {
//         if (obj[key] == 1) delete obj[key]
//     }
//     return obj
// }

// var res = findDuplicate([1, 2, 2, 3, 3, 3]);
// console.log(res, "res")


// const obj = {}

// obj[{}] = "a"
// obj[{}] = "b"

// console.log(obj)


const obj = { c: undefined }

// console.log("a" in obj)    // true
console.log(obj.hasOwnProperty("a")) // true
// console.log(obj.a === undefined) // true



// function removeDuplicates(arr) {
//     let result = []

//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false
//         for (let j = 0; j < result.length; j++) {

//             if (arr[i].id === result[j].id && arr[i].name === result[j].name) {
//                 isDuplicate = true
//                 break
//             }
//         }

//         if (!isDuplicate) {
//             result.push(arr[i])
//         }

//     }
// }

// console.log(removeDuplicates([
//     { id: 1, name: "a" },
//     { id: 1, name: "a" },
//     { id: 2, name: "b" }
// ]))



const people = [{ name: "Alice", dept: "Eng" }, { name: "Bob", dept: "HR" }, { name: "Carol", dept: "Eng" }];

// Map { 'Eng' => ['Alice', 'Carol'], 'HR' => ['Bob'] }

function groupByDep(people) {
    let map = new Map();
    for (let item of people) {
        let dep = item.dept
        let name = item.name

        if (!map.has(dep)) {
            map.set(dep, [])
        }
        map.get(dep).push(name)
    }
    return map
}

var res = groupByDep(people)
console.log(res, "resss")