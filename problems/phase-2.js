/*
1.  mirrorArray
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:
const exampleArray1 = [1, 2, 3]
mirrorArray(exampleArray1) >> [1, 2, 3, 3, 2, 1]

const exampleArray2 = ['a', 'b', 'c']
mirrorArray(exampleArray2) >> ['a', 'b', 'c', 'c', 'b', 'a']
*/
const mirrorArray = (array) => {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    let el = array[i];
    newArray.push(el);
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    let el = array[i];
    newArray.push(el);
  }

  return newArray;
};

/*
2.  hiddenCounter
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.
*/
function hiddenCounter() {
  let count = 0;
  return () => {
    count += 1
    return count;
  };
}
/*
3. myMap
Write a function  named `myMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.
*/
const myMap = (array, cb) => {
  let mapped = [];

  array.forEach((el) => mapped.push(cb(el)));
  return mapped;
};

/*
4. AvgValue
Write a function , `avgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.
*/
const avgValue = (array) => {
  let sum = array.reduce((el, sum = 0) => (sum += el));

  let avg = sum / array.length;
  return avg;
};

module.exports = { mirrorArray, hiddenCounter, myMap, avgValue };
