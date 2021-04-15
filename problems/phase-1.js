/*1. Is Five Define a function isFive that will return true if a number is equal
   to 5 and false if it is not.
*/
function isFive(num) {
 if (num === 5) {
   return true;
 }else {
   return false;
 }
}

/*2. Is Odd Write a function isOdd that takes in a number as an argument and
   returns true if the number is odd and returns false otherwise.
*/
function isOdd(number) {
  if (typeof number !== 'number'){
    throw Error('some error')
  }else if(number % 2 === 0) {
    return false
  }else {
    return true
  }
}

/*3. Array  of the Range Write a function myRange(min, max, step) that takes in
      3 numbers as parameters. The function should return an array of the
      numbers between and inclusive of min and max at step intervals.
*/

function myRange(min, max, step=1) {
  if(typeof min !== 'number' || typeof max !== 'number' || typeof step !== 'number'){
    throw Error('some error');
  }
  const array = []
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array
}
/*4. Fizz Buzz Define a function fizzBuzz(max) that takes a number and prints
   every number from 0 to max (not inclusive) that is divisible by either 3 or
   5, but not both.
*/

function fizzBuzz(max) {
  if (typeof max !== 'number' ){
    throw TypeError('needs to be a number')
  }
  if (max < 0){
    throw new RangeError
  }

  const array = []
  for (let i = 0; i < max; i++){
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)){
      array.push(i);
    }
  }
  return array
}


module.exports = {isFive, isOdd, myRange, fizzBuzz }
