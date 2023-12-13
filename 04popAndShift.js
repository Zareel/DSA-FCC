//* Remove Items from an Array with pop() and shift()

//? We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

// push() => add an item at the end of an array
// unshift() => add an item at the beginning of an array

//pop() => remove an item from the end of an array
//shift() => remove an item from the beginning of an array

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
