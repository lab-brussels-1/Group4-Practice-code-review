import { intersection } from './intersection.js';

console.log(intersection([1, 2, 3], [3, 4, 5])); // [3]

const arr1 = [1, 2, 1];
const arr2 = [2, 3];

const result = intersection(arr1, arr2);
console.log(result); // [2]

const filter1 = [4, 4, 4, 4, 5, 6, 7];
const filter2 = [6, 7];

const filterResult = intersection(filter1, filter2);
console.log(filterResult); // [6,7]

const negativeArr = [-1, -2, -3];
const positiveArr = [1, 2, 3];

const bothResult = intersection(negativeArr, positiveArr);
console.log(bothResult); // []
