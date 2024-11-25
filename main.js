//  1-misol
// function ReveresAdd(arg) {
//     return arg.split(' ').map(v => v.split('').reverse().join(' '))
// }
// console.log(ReveresAdd("salom"));


// 3-misol
// function counterBoshHarf(arg) {
//     let res = 0; 
//     for (let element of arg) {
//         if (element >= 'A' && element <= 'Z') {
//             res++; 
//         }
//     }
//     return res;
// }
// console.log(counterBoshHarf("Salom Abror, Qalesan"));


// 4-misol
//  let str = 'lorem ipsum dolor sit amet'; 
//  function addrepla(arg) {
// let res = arg.split(' ').map(v => v[0].toLocaleUpperCase() + v.slice(1)).join(' ')
// return res
// }
// console.log(addrepla(str));


// 5-misol
    // function replaceadd(arg, str, str2) {
    //         return arg.split(str).join(str2);
    // }
    // let arr = "salom abror qalesan yaxshimisan.";
    // let res = replaceadd(arr, "a", "o");
    // console.log(res); 


// 6-misol
// function Hisoblash(arg) {
//     return arg.length
// }
// console.log(Hisoblash("salom"));

// 7-misol
// function addPalindrome(arg) {
//     let res = arg.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let sum = res.split('').reverse().join('');
//     return res === sum;
// }
// let matn1 = "Anna";
// let matn2 = "Salom dunyo";
// console.log(addPalindrome(matn1)); 
// console.log(addPalindrome(matn2)); 



// 8-misol
// function reveresstr(arg) {
//     return arg.split(' ').map(v => v.split('').reverse().join(''))
//     .join(' ')
// }
// console.log(reveresstr("salom abror"));

// 9-misol
// function repeatadddelete(arg) {
//     return [...new Set(arg.split(' '))].join(' ');
// }

// let sum  = "salom abror abror qalesan qalesan";
// let result = repeatadddelete(sum);
// console.log(result); 


// 10-misol
// function Indexofreturn(arg) {
//     let result = arg.indexOf("a");
//     return result
// }
// console.log(Indexofreturn("salom"));


// 11-misol
// function removeUnli(arg) {
//     return arg.replace(/[aeiouAEIOU]/g, ''); 
// }
// console.log(removeUnli("salom"));


// 12-misol
// function addAlifbo(arg) {
//     return arg.split(' ').sort().join(' ')
// }
// console.log(addAlifbo("salom abror qalesan"));


// 13-misol
// function findLongestWord(arg) {
//     let words = arg.split(' ');
//     let longest = '';
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }
// console.log(findLongestWord("Salom abror qalesan")); 


// 16-misol
// function birlashtirish(arg ) {
//     let arr = arg.split(' ');
//     return arr.join('');
// }
// console.log(birlashtirish("Salom abror dunyo")); 


// 17-misol
// function add(sentence) {
//     return sentence.toUpperCase();
// }
// console.log(add("salom abror")); 


// 18-misol
// function sonlarniajrotish(arg) {
//     return arg.match(/\d+/g) || [];
// }
// console.log(sonlarniajrotish("Salom abror 12345 qalesan")); 


// 19-misol
// function addtrim(arg) {
//     return arg.trim();
// }
// console.log(addtrim("          Salom abror     "));




// Masivlarga oid masalalr 

// 2-misol
// function addsort(arg, str) {
//     return arg.sort((a, b) => a[str] - b[str]);
// }
// let obj = [{ name: "Abror", age: 25 }, { name: "Salim", age: 30 }, { name: "Aziz", age: 28 }];
// console.log(addsort(obj, "age")); 


// 3-misol
// function addreduce(arg, str) {
//     return arg.reduce((a, b) => a + b[str], 0);
// }
// let obj = [{ name: "Abror", age: 25 }, { name: "Salim", age: 30 }, { name: "Aziz", age: 28 }];
// console.log(addreduce(obj, "age"));


// 4-misol
// function filterByKey(array, key, value) {
//     return array.filter(function(obj) {
//         return obj[key] > value
//     });
// }
// let obj = [{ name: "Abror", age: 25 }, { name: "Salim", age: 30 }, { name: "Aziz", age: 28 }];
// console.log(filterByKey(obj, "age", 28)); 


// 6-misol
// function addKey(arg, str, str2) {
//     return arg.map(obj => ({ ...obj, [str]: str2 }));
// }
// let obj = [{ name: "Abror", age: 25 }, { name: "Salim", age: 30 }, { name: "Aziz", age: 28 }];
// console.log(addKey(obj, "ismarried", true)); 


// 8-misol
// function deleteObj(arg, str, str2) {
//     return arg.filter(obj => obj[str] !== str2);
// }
// let obj = [{ name: "Abror", age: 25 }, { name: "Salim", age: 30 }, { name: "Aziz", age: 28 }];
// console.log(deleteObj(obj, "name", "Salim")); 

// 9-misol
// function addcoun(arg, arg2) {
//     let coun = {};
//     arg.forEach(obj => {
//         let res = obj[arg2];
//         coun[res] = (coun[res] || 0) + 1;
//     });
//     return coun;
// }
// let objs = [
//     { city: "fargona" },
//     { city: "chimyon" },
//     { city: "fargona" }
// ];

// console.log(addcoun(objs, "city"));

