import { deepFlat } from './deep-flat';

// three dimensional array into single array

console.log(deepFlat(['a', ['b', [['c'], ['d']], 'e']])); // ['a','b','c','d','e']

let arr1 = [1, [2, [3, [4]], 5]];
let returnArr = deepFlat(arr1);
console.log(returnArr); // [1,2,3,4,5]

// empty array and single array into single array

let arr2 = [];
let returnArr1 = deepFlat(arr2);
console.log(returnArr1); // []

// testing errors

let arr3 = 1234;
let returnArr2 = deepFlat(arr3);
console.log(returnArr2); // throw new Error

let arr4 = 'hi! how are you';
let returnArr3 = deepFlat(arr4);
console.log(returnArr3); // throw new Error
