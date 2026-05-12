// const users = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Aman", city: "Mumbai" },
//     { id: 3, name: "Rahul", city: "Delhi" }
// ];

// exp 1 : count freq of name 
// output:{
//  Rahul: 2,
//  Aman: 1
// }

// function countNameFreq(users) {
//     const freq = new Map();
//     for (let item of users) {
//         console.log(freq,"freq")
//         let name = item.name
//         console.log(name, "namee")
//         if (freq.has(name)) {
//         console.log(name, "namee has")

//             freq.set(name, freq.get(name) + 1)
//         } else {
//             freq.set(name, 1)
//         }
//     }
//     return  Object.fromEntries(freq)
// }

// console.log(countNameFreq(users))


// {
//  Delhi: ["Rahul", "Rohit"],
//  Mumbai: ["Aman"]
// }



// function nameByCity(users) {
// let cities = new Map();

// for(let {city,name} of users) {
//     if(!cities.has(city)) {
//       cities.set(city,[name])
//     }
//     else {
//         cities.get(city).push(name)
//     }
// }
// return Object.fromEntries(cities)
// }

// console.log(nameByCity(users))

// const users = [
//     { id: 1, name: "Rahul", city: "Delhi" },
//     { id: 2, name: "Aman", city: "Mumbai" },
//     { id: 3, name: "Rahul", city: "Delhi" }
// ];

// const orders = [
//     { userId: 1, product: "Laptop" },
//     { userId: 1, product: "Phone" },
//     { userId: 2, product: "Keyboard" }
// ]


// function usersWithOrders(users, orders) {

//     let arr = []
//     let orderMap = new Map()

//     for (let order of orders) {

//         let userId = order.userId


//         if (!orderMap.has(userId)) {
//             orderMap.set(userId, [order])
//         } else {
//             orderMap.get(userId).push(order)
//         }
//     }

//     for (let item of users) {

//         let id = item.id

//         item.orders = orderMap.get(id) || []

//         arr.push(item)
//     }

//     return arr
// }

// console.log(usersWithOrders(users, orders))



// const users = [
//   { id: 1, email: "rahul@gmail.com" },
//   { id: 2, email: "aman@gmail.com" },
//   { id: 3, email: "rahul@gmail.com" },
//   { id: 4, email: "rohit@gmail.com" },
//   { id: 5, email: "aman@gmail.com" }
// ]


// function findDuplicateEmail(users) {
//     let map = new Map();
//     let duplicateEMail = []
//     for(let {email} of users) {
//         map.set(email,(map.get(email) || 0) +  1)
//     }

//     for(let [pair1,pair2] of map) {
//         if(pair2 > 1) duplicateEMail.push(pair1)
//     }
//     return duplicateEMail
// }

// console.log(findDuplicateEmail(users))



const employees = [
    { name: "Rahul", dept: "IT", salary: 5000 },
    { name: "Aman", dept: "HR", salary: 3000 },
    { name: "Rohit", dept: "IT", salary: 7000 },
    { name: "Neha", dept: "HR", salary: 4000 }
]
// output : {
//   IT: {
//     employees: ["Rahul", "Rohit"],
//     totalSalary: 12000
//   },

//   HR: {
//     employees: ["Aman", "Neha"],
//     totalSalary: 7000
//   }
// }

// function groupByDep(employees) {
//     let employeesMap = new Map();

//     for (let { name, dept, salary } of employees) {
//         if (!employeesMap.has(dept)) {
//             employeesMap.set(dept,
//                 {
//                     employees: [name],
//                     totalSalary: salary
//                 }
//             )
//         }
//         else {
//             employeesMap.get(dept).employees.push(name)
//             employeesMap.get(dept).totalSalary += salary
//         }
//     }
//     return Object.fromEntries(employeesMap)
// }

// console.log(groupByDep(employees))


const developers = [
    { name: "Rahul", skills: ["JS", "React"] },
    { name: "Aman", skills: ["Node", "JS"] },
    { name: "Rohit", skills: ["React", "JS"] }
]

// output :{
//   JS: 3,
//   React: 2,
//   Node: 1
// }

// function mostFrequentSkill(developers) {
//         let skillsMap = new Map()

//     for (let { skills } of developers) {

//         for (let item of skills) {
//             if (skillsMap.has(item)) {
//                 skillsMap.set(item, skillsMap.get(item) + 1)
//             } else {
//                 skillsMap.set(item, 1)
//             }
//         }
//         // console.log(skillsMap, "lllll")

//     }
//     return Object.fromEntries(skillsMap)
// }

// console.log(mostFrequentSkill(developers))


let arr = [{ a: 1, b: 2 }, { a: 2, b: 0 }]
// {a:3,b:2}


function addFreq(arr) {
    let map = new Map()
    for (let { a, b } of arr) {
        if (map.has("a")) {
            map.set("a", map.get("a") + a)
        }
        else {
            map.set("a", a)
        }
        if (map.has("b")) {
            map.set("b", map.get("b") + b)
        }
        else {
            map.set("b", b)
        }
    }
    return map
}
console.log(addFreq(arr))