

// const str = "m";

// function isPalindrome(str) {
//     if (str.length == 1) return true

//     let i = 0;
//     let j = str.length - 1;

//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false

//         }
//         i++;
//         j--;
//     }
//     return true
// }

// console.log(isPalindrome(str))


let n = 121;

function isPalindrome(n) {
    let original = n;
    let rev = 0;

    while (n != 0) {
        let lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n = Math.floor(n / 10)
    }
    return original == rev
}

console.log(isPalindrome(n))