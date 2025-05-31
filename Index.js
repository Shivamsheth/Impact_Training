// 🔹 Basic Manipulation

// 1. Create an array of numbers. Add one element to the end using push() and one to the beginning using unshift(). Print the final array.
const numbers = [2, 3, 4];
numbers.push(5);
numbers.unshift(1);
console.log(numbers); 

// 2. Create an array of 5 fruits. Remove the last element using pop() and the first element using shift(). Print the modified array.
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
fruits.pop();
fruits.shift();
console.log(fruits); 

// 3. Create an array [10, 20, 30, 40]. Use splice() to remove 20 and insert 25 at the same index. Print the result.
const nums = [10, 20, 30, 40];
nums.splice(1, 1, 25);
console.log(nums);

// 4. Create an array of 4 colors. Use join('-') to convert the array into a single string and print it.
const colors = ['red', 'green', 'blue', 'yellow'];
const colorString = colors.join('-');
console.log(colorString); 

// 5. Use toString() on an array [100, 200, 300] and print the result.
const values = [100, 200, 300];
console.log(values.toString()); 

// 🔹 Accessing and Copying

// 6. Create an array [5, 10, 15, 20]. Use .at(-1) to access the last element and print it.
const arr1 = [5, 10, 15, 20];
console.log(arr1.at(-1)); 

// 7. Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2 positions. Print the result.
const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(3, 0, 2);
console.log(arr2); 

// 8. Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it completely. Print the result.
const nestedArr = [1, [2, 3], [4, [5]]];
const flattenedArr = nestedArr.flat(2);
console.log(flattenedArr); 

// 9. Use slice() to copy the middle two elements of [10, 20, 30, 40, 50]. Print the result.
const arr3 = [10, 20, 30, 40, 50];
const middleElements = arr3.slice(1, 3);
console.log(middleElements); 

// 10. Use concat() to merge two arrays [1, 2] and [3, 4]. Print the final array.
const arr4 = [1, 2];
const arr5 = [3, 4];
const mergedArr = arr4.concat(arr5);
console.log(mergedArr); 

// 🔹 Delete / Replace / Immutability

// 11. Create an array of 5 numbers. Use the delete operator to delete the 2nd index value.
// Print the array and its length.
const arr6 = [1, 2, 3, 4, 5];
delete arr6[2];
console.log(arr6); 
console.log(arr6.length); 

// 12. Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and insert 10, 11 at that position. Print original and new array.
const arr7 = [9, 8, 7, 6];
const newArr7 = arr7.toSpliced(1, 1, 10, 11);
console.log(arr7);
console.log(newArr7); 

// 13. Create an array [1, 2, 3, 4, 5]. Use splice() to remove last 2 elements and print the resulting array.
const arr8 = [1, 2, 3, 4, 5];
arr8.splice(3, 2);
console.log(arr8);

// 14. Make a copy of [7, 8, 9] and insert 6 at the beginning using unshift() without modifying the original array.
const arr9 = [7, 8, 9];
const copyArr9 = [...arr9];
copyArr9.unshift(6);
console.log(arr9);
console.log(copyArr9); 

// 15. Write a function that accepts an array and returns a string of all elements joined with ' | '.
function joinWithPipe(arr) {
  return arr.join(' | ');
}
console.log(joinWithPipe(['a', 'b', 'c'])); 





// 16. Create a function that returns the last item of an array using only .length.
function getLastItem(arr) {
  return arr[arr.length - 1];
}
console.log(getLastItem([1, 2, 3])); 

// 17. Write a function to return the 2nd last element using .at() method.
function getSecondLastItem(arr) {
  return arr.at(-2);
}
console.log(getSecondLastItem([1, 2, 3, 4])); 

// 18. Create a function to reverse an array without using reverse() method (use unshift() inside a loop).
function reverseArray(arr) {
  const reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3])); 

// 19. Flatten a 2D array like [[1,2],[3,4]] using .flat() and return it.
function flatten2DArray(arr) {
  return arr.flat();
}
console.log(flatten2DArray([[1, 2], [3, 4]])); 

// 20. Given two arrays, one of names and one of marks, return a combined array of string format like ["Ram: 80", "Shyam: 90"] using join() and loop.
function combineNamesAndMarks(names, marks) {
  const combined = [];
  for (let i = 0; i < names.length; i++) {
    combined.push(names[i] + ': ' + marks[i]);
  }
  return combined;
}
console.log(combineNamesAndMarks(['Ram', 'Shyam'], [80, 90]));