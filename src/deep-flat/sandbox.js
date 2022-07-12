import { deepFlat } from './deep-flat';

// three dimensional array into single array

console.log(deepFlat(['a', ['b', [['c'], ['d']], 'e']])); // ['a','b','c','d','e']

const arr1 = [1, [2, [3, [4]], 5]];
let returnArr = deepFlat(arr1);
console.log(returnArr); // [1,2,3,4,5]

// empty array and single array into single array

const arr2 = [];
let returnArr1 = deepFlat(arr2);
console.log(returnArr1); // []
