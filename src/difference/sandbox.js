import { difference } from './difference.js';

console.log(difference([1, 2, 3], [2, 3])); // [1]

// example testing
const arr1 = [1, 2, 1];
const arr2 = [2, 3];
const difResult = difference(arr1, arr2);
console.log(difResult); // [1]

const arr3 = [2, 3];
const arr4 = [4, 5];
const result = difference(arr3, arr4);
console.log(result); // [4,5]

// Error testing

const errorArr = [];
const errorArr1 = [4, 5];
const ArrResult = difference(errorArr, errorArr1);
console.log(ArrResult); // throw error
