# Intersection

Write a function that finds all the values shared between two arrays.

---

## Strategy

I chose to use built-in array (`.filter()`, `.includes()`, `.splice()`) methods.
And for loop to solve this challenge.

## Implementation

- I use `.filter()`, `.includes()` built-in array to check intersection between
  two array. and store in new array.
- Then I use `Array.from(new Set())` for removing repeated value.
- [I take help from stackoverflow.com](https://stackoverflow.com/questions/40029252/remove-all-repeated-values-in-array-and-leave-the-ones-that-dont-repeat-in-java)
- [MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
- I wrote `if` statement to throw error. if user pass other type of data or
  empty array, throw an error.

---

## Use Cases

This is fat arrow function, which I used.

```js
export const intersection = (array = [], values = []) => {
  if (array.length === 0) throw new Error('1st array is empty');
  if (array === !array.isArray) throw new Error('this is not an array');

  let filterArray = array.filter((curEle) => values.includes(curEle));
  filterArray = Array.from(new Set(filterArray));
  return filterArray;
};

// test cases

const arr1 = [1, 2, 1];
const arr2 = [2, 3];
result = intersection(arr1, arr2);
console.log(result); // [1]

const arr3 = [2, 3];
const arr4 = [4, 5];
result = intersection(arr3, arr4);
console.log(result); // [4,5]

// Error testing

const errorArr = [];
const errorArr1 = [4, 5];
errorArr = intersection(errorArr, errorArr1);
console.log(errorArr); // throw error
```

---

## Inspiration

- [MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  I studied various method for solve this method. it's very helpful for us.
