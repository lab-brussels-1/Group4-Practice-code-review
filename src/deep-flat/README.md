# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Strategy

I chose to use built-in array methods to solve this challenge because they're
fun to use and nice to read.

---

## Implementation

- I found few way to figure out solution: but I use `.flat()` built-in array
  method.
- The `.flat()` method modifies the nested array into single array.
  [MDN - _in place_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- In the `.flat()` method I used `infinity` argument for flat all dimensional
  array into single array.
- I wrote `if` statement to throw error. if user pass other type of data it
  gives an error.

---

## Use Cases

This is fat arrow function which I used.

```js

const deepFlat = (array = []) => {
    if(array != array) throw new Error ('this is not an array')
    return array.flat(Infinity);
}

// old methods but its work

const deepFlat1 = (array) => {
    let flatArray = array.reduce((acc, item) => {
        if(Array.isArray(item)){
            acc = acc.concat(deepFlat(item));
        }else{
            acc.push(item);
        }
        return acc;
    }, []);
    return flatArray;
};

// This function use for just 2D array - side effect function

const deepFlat2 = (array) => {
    let flatArray = array.reduce((acc, item) => {
        return acc.concat(item)
    }, []);

    return flatArray;****
}

// test cases

let arr = (['a', ['b', [['c'], ['d']], 'e']])
let returnArr = deepFlat(arr);
console.log(returnArr);  // ['a','b','c','d','e']



let arr1 = ([1, [2, [3, [4]], 5]])
let returnArr = deepFlat(arr1);
console.log(returnArr);   // [1,2,3,4,5]

```

---

## Inspiration

- [This article from flexible.com](https://flexiple.com/flatten-array-javascript/)
  gave me many example to write function in short. it was very helpful for me to
  find solution.
