# Difference

Write a function that removes specific values from an array. The values to
remove are provided as a second array argument.

---

## Strategy

I chose to use built-in array (`.filter()`, `.includes()`, `.splice()`) methods.
And for loop to solve this challenge.

## Implementation

- I use `.filter()`, `.includes()` built-in array to check difference between
  two array. and store in new array.
- Then use `for loop` for checking repeated value and in between I use
  `.splice()` method to delete repeat value.
- [I take help from stackoverflow.com](https://stackoverflow.com/questions/40029252/remove-all-repeated-values-in-array-and-leave-the-ones-that-dont-repeat-in-java)
- [MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
- I wrote `if` statement to throw error. if user pass other type of data or
  empty array, throw an error.

---

## Use Cases

This is fat arrow function, which I used.

```js
export const difference = (array = [], value = []) => {
  if (array.length === 0) throw new Error('1st array is empty');
  if (array === !array.isArray) throw new Error('this is not an array');

  let newArr = array.filter((curEle) => !value.includes(curEle));

  for (let i = 0; i < newArr.length; i++) {
    if (i !== newArr.lastIndexOf(newArr[i])) newArr.splice(i, 1);
  }
  return newArr;
};

// test cases

const arr1 = [1, 2, 1];
const arr2 = [2, 3];
result = difference(arr1, arr2);
console.log(result); // [1]

const arr3 = [2, 3];
const arr4 = [4, 5];
result = difference(arr3, arr4);
console.log(result); // [4,5]

// Error testing

const errorArr = [];
const errorArr1 = [4, 5];
errorArr = difference(errorArr, errorArr1);
console.log(errorArr); // throw error
```

---

## Inspiration

- [MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  I studied various method for solve this method like. it's very helpful for us.
