console.log("Arrays");

// 1.get duplicates elements from two array
const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const arr2 = ['h', 'b', 'g', 'i', 'e', 'f', 'k', 'l'];

let duplicates = [];
// for (const i in arr1) {
//     for (const j in arr2) {
//         if (arr1[i] === arr2[j]) {
//             duplicates.push(arr1[i]);
//         }
//     }
// }
duplicates = arr1.filter( function(val1) {
    return arr2.indexOf(val1) !== -1
});
console.log(duplicates);

// 2.How to run multiple function parallely
let func1  = async() => {
    console.log("Function One started executing");
    setTimeout(() => {
        console.log("Function One executed");
    },4000);
};
let func2  = async() => {
    console.log("Function Two started executing");
    setTimeout(() => {
        console.log("Function Two executed");
    },2000);
};
func1();
func2();

// 3.First element,last element of an array, index of an element in the array
const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aziz", "Azlan", "Azzam", "Azzedine", "Ben", "Carol", "David"];
console.log( `First element = ${names[0]},last element = ${names[names.length - 1]}`);
console.log(`Index of Azlan is: ${names.indexOf('Azlan') + 1}`);

// 4.Const array= [{ 'n': 4 }, { 'n': 2 }, { 'n': 6 }];  Sum value of n
const array= [
    { 'n': 4 }, 
    { 'n': 2 },    
    { 'n': 6 }
];
let calcTotal = function(items, prop) {
    return items.reduce((a, b) => {
        return a + b[prop];
    }, 0);
};

let totalSum = calcTotal(array, 'n');
console.log(totalSum);

// 5.Example showing usage of .find method and .map method
function checkNames(name) {
    if (name.startsWith('A')) {
        return name;
    }
}
let resArr = names.map(checkNames);
console.log(resArr);
let result = resArr.find(checkNames);

// 6.Difference between map and forEach method
// foreach and map both takes a callback and run it against every element on the array 
// But map method generate a new array based on your existing array which forEach method dosent return
let test = [1, 2, 3, 4, 5, 6];
test.forEach( function(elem) {
    console.log(elem * 10);
});
let forEachArray = test.forEach(elem => elem * 10);
console.log(forEachArray);
let mappedArray = test.map(elem => elem * 10);
console.log(mappedArray);

// 7.What is Spread operator, show example of Concating two array using spread operator.
// Allows expression to be expanded in places where multiple args, variables are expected
// spreads out the array into individual elements
const arraySpread = [...arr1, ...arr2];
console.log(arraySpread);

// 8.Get unique element from an array
let unique = [];
unique = arr1.filter( function(val1) {
    return arr2.indexOf(val1) === -1
});
console.log(unique);