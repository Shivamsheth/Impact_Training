const operator = prompt("Enter an operator (+, -, *, /, %, **): ");
switch (operator) {
    case '+':
        console.log(`Result: ${num1 + num2}`);
        break;
    case '-':
        console.log(`Result: ${num1 - num2}`);
        break;  
    case '*':
        console.log(`Result: ${num1 * num2}`);
        break;

    case '/':
        if (num2 !== 0) {
            console.log(`Result: ${num1 / num2}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    case '%':
        if (num2 !== 0) {
            console.log(`Result: ${num1 % num2}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    case '**':
        console.log(`Result: ${num1 ** num2}`);
        break;
    default:
        console.log("Invalid operator. Please use +, -, *, /, %, or **.");
        break;    
}




let month = 1;

switch (month) {
  case 1:
    console.log("january");
    break;
    case 2:
    console.log("February");
    break;  
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("april");
    break;
    case 5:
    console.log("may");
    break;
    case 6:
    console.log("june");
    break;
    case 7:
    console.log("july");
    break;
    case 8:
    console.log("august");
    break;
    case 9:
    console.log("september");
    break;
    case 10:    
    console.log("october"); 
    break;  
    case 11:    
    console.log("november");
    break;
    case 12:
    console.log("december");
    break;

  default:
    console.log("Invalid day");
    break;
}





//Build a switch block to convert grades (A-F) to performance messages.

let grade = 'B';
switch (grade) {
  case 'A':
    console.log("Excellent work!");
    break;
  case 'B':
    console.log("Good job!");
    break;
  case 'C':
    console.log("You passed.");
    break;
  case 'D':
    console.log("You need to improve.");
    break;
  case 'F':
    console.log("Failed. Please try again.");
    break;
  default:
    console.log("Invalid grade.");
    break;
}





let browser = 'Chrome';
switch (browser) {
  case 'Chrome':
    console.log("This is chrome browser.");
    break;
  case 'Firefox':
    console.log("This is Firefox browser.");
    break;
  case 'Safari':
    console.log("This is Safari browser.");
    break;
  case 'Edge':
    console.log("This is Edge browser.");
    break;
  case 'Opera':
    console.log("This is Opera browser.");
    break;
  default:
    console.log("This browser is not supported.");
    break;
}





let number = 7;
switch (number % 2) {
  case 0:
    console.log("The number is even.");
    break;
  case 1:
    console.log("The number is odd.");
    break;
  default:
    console.log("Invalid input.");
    break;
}





//Nested switch: Check user role (admin, user) and their action (create, edit, delete).
let userRole = 'admin';
let userAction = 'create';
switch (userRole) {
  case 'admin':
    switch (userAction) {
      case 'create':
        console.log("Admin can create content.");
        break;
      case 'edit':
        console.log("Admin can edit content.");
        break;
      case 'delete':
        console.log("Admin can delete content.");
        break;
      default:
        console.log("Invalid action for admin.");
        break;
    }
    break;
  case 'user':
    switch (userAction) {
      case 'create':
        console.log("User can create content.");
        break;
      case 'edit':
        console.log("User can edit their own content.");
        break;
      case 'delete':
        console.log("User cannot delete content.");
        break;
      default:
        console.log("Invalid action for user.");
        break;
    }
    break;
  default:
    console.log("Invalid user role.");
    break;
}


let age = 25;
switch (true) {
  case (age >= 0 && age <= 12):
    console.log("Child");
    break;
  case (age >= 13 && age <= 19):
    console.log("Teen");
    break;
  case (age >= 20 && age <= 64):
    console.log("Adult");
    break;
  case (age >= 65):
    console.log("Senior");
    break;
  default:
    console.log("Invalid age.");
    break;
}

/*What happens when break is missing in a switch? Explain with example.
 When the break statement is missing in a switch case, the program 
continues to execute the next case(s) until it encounters a break 
 or reaches the end of the switch block. This is known as "fall-through" behavior.

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
  default:
    console.log("Invalid day");
}

 In this example, if day is 3, it will print "Wednesday", "Thursday",
  "Friday", "Saturday", "Sunday", and "Invalid day" */


 /* Can we place default at the top of the switch block? Show with code

let fruit = 'banana';
switch (fruit) {
  default:
    console.log("Unknown fruit");
    break;
  case 'apple':
    console.log("This is an apple.");
    break;
  case 'banana':
    console.log("This is a banana.");
    break;
  case 'orange':
    console.log("This is an orange.");
    break;
}
Yes, we can place the default case at the top of the switch block.  */



//Explain fall-through in switch with a multi-case example.
/* Fall-through in a switch statement occurs when a case does not have a break statement, 
causing the execution to continue into the next case(s) until a break is encountered or the
 switch block ends.
let day = 3;    
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    // No break here, so it will fall through to the next case
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}   
In this example, if day is 3, it will print "Wednesday" and then fall through to print 
"Thursday" because there is no break statement after the case for 3. This demonstrates 
the fall-through behavior of switch statements. */






//Use map() to convert an array of numbers into their squares

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(num) {
    return num * num;
});
console.log(squares); 


//Use filter() to return only the names longer than 5 characters.
let names = ["Alice", "Bob", "Catherine", "David", "Eleanor"];
let longNames = names.filter(function(name) {
    return name.length > 5;
});
console.log(longNames); 



//Use reduce() to find the sum of all odd numbers in an array
let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumOfOdds = oddNumbers.reduce(function(sum, num) {
    if (num % 2 !== 0) {
        return sum + num;
    }
    return sum;
}, 0);
console.log(sumOfOdds); 




// 14. Implement your own version of map() called customMap().
function customMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
console.log(customMap([1, 2, 3], function(num) {
    return num * 2;
})); 
// 15. Create a function repeat(fn, n) to call any function n times.
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
repeat(function() {
    console.log("Hello, World!");
}
, 3);


// 16. Use forEach() to print the index and value of each array element.
let array = ["apple", "banana", "cherry"];
array.forEach(function(value, index) {
    console.log(`Index: ${index}, Value: ${value}`);
});

// 17. Use reduce() to convert an array of strings into a sentence.
let words = ["This", "is", "a", "sentence."];
let sentence = words.reduce(function(accumulator, word) {
    return accumulator + " " + word;
}, "").trim();
console.log(sentence); 

// 18. Filter out all palindromes from a string array.
let strings = ["level", "world", "radar", "javascript", "madam"];
let nonPalindromes = strings.filter(function(str) {
    let reversed = str.split("").reverse().join("");
    return str !== reversed;
});
console.log(nonPalindromes);

// 19. Map through an array of numbers and return strings like “Even” or “Odd”.
let numbersArray = [1, 2, 3, 4, 5];
let evenOddStrings = numbersArray.map(function(num) {
    return num % 2 === 0 ? "Even" : "Odd";
});
console.log(evenOddStrings);

// 20. Use reduce() to count how many times each number appears in an array.
let numberArray = [1, 2, 2, 3, 3, 3, 4];
let countOccurrences = numberArray.reduce(function(accumulator, num) {
    accumulator[num] = (accumulator[num] || 0) + 1;
    return accumulator;
}, {});
console.log(countOccurrences);

// 21. Create a function that accepts another function and applies delay using setTimeout().
function applyDelay(fn, delay) {
    setTimeout(fn, delay);
}
applyDelay(function() {
    console.log("This message is delayed by 2 seconds.");
}
, 2000);


// 22. Filter an array of user objects (with name, age) to return only adults (age > 18).
let users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 22 }
];
let adults = users.filter(function(user) {
    return user.age > 18;
});
console.log(adults);



//23. What's the difference between map() and forEach()? Show code example
//Ans :  the difference between map() and forEach() is that map() creates a new array with the results of calling a provided function on every element in the calling array, while forEach() executes a provided function once for each array element without returning a new array.







//24. Why is reduce() called powerful in functional programming? Explain with one-liner code.
//Ans: reduce() is called powerful in functional programming because it allows you to accumulate values and transform data structures in a single pass, enabling complex operations like summing, averaging, or grouping data efficiently.
// Example of map() vs forEach()
let numbersList = [1, 2, 3, 4, 5];
// Using map() to create a new array with squares of numbers
let squaresList = numbersList.map(function(num) {
    return num * num;
});
console.log(squaresList); 
// Using forEach() to log each number
numbersList.forEach(function(num) {
    console.log(num); 
});
// Example of reduce() to find the sum of an array
let sum = numbersList.reduce(function(accumulator, num) {
    return accumulator + num;
}, 0);
console.log(sum); 








//25. Explain what makes a function “Higher Order” with real code example.
// A function is considered "Higher Order" if it can take other functions as arguments or return a function as its result.
// Example of a Higher Order Function
function higherOrderFunction(fn) {
    return function(x) {
        return fn(x) * 2; 
    };
}
let square = function(x) {
    return x * x;
};
let doubleSquare = higherOrderFunction(square);
console.log(doubleSquare(3));






//26. Create a bankAccount object with deposit() and withdraw() methods using this.
let bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }
};


//27. Write an object with name and a method sayHello() that uses this correctly
let person = {
    name: "Alice",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};







//28. Use Object.keys() to print only the keys of an object dynamically.
let dynamicObject = {
    name: "Bob",
    age: 30,
    occupation: "Developer"
};
Object.keys(dynamicObject).forEach(function(key) {
    console.log(`Key: ${key}`);
});




//29. Use Object.values() to sum all values of a numeric object.

let numericObject = {
    a: 10,
    b: 20,
    c: 30
};
let sumValues = Object.values(numericObject).reduce(function(accumulator, value) {
    return accumulator + value;
}, 0);
console.log(`Sum of values: ${sumValues}`);



//30. Merge two objects using Object.assign() and print the merged result
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = Object.assign({}, object1, object2);
console.log("Merged Object:", mergedObject); 




//31. Freeze an object using Object.freeze() and try modifying it — verify the result.
let frozenObject = Object.freeze({ x: 1, y: 2 });
frozenObject.x = 10; 
console.log("Frozen Object:", frozenObject); 



//32. Seal an object using Object.seal() and test adding & updating keys.
let sealedObject = Object.seal({ a: 1, b: 2 });
sealedObject.a = 10;
sealedObject.c = 3; 
console.log("Sealed Object:", sealedObject); 




//33. Check if a key exists in an object using hasOwnProperty().
let checkObject = { name: "Charlie", age: 25 };
if (checkObject.hasOwnProperty("name")) {
    console.log("Key 'name' exists in the object.");
}
else {
    console.log("Key 'name' does not exist in the object.");
}




//34. Build an object with custom methods: add(), subtract(), and call them.
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("Addition:", calculator.add(5, 3));
console.log("Subtraction:", calculator.subtract(5, 3));







//35. Create a student object with method getDetails() that returns a formatted string.
let student = {
    name: "David",
    age: 20,
    course: "Computer Science",
    getDetails: function() {
        return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};
console.log(student.getDetails());








//36. Make a method that removes keys with null or undefined values from an object.
function cleanObject(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
let messyObject = { a: 1, b: null, c: 3, d: undefined };
console.log("Cleaned Object:", cleanObject(messyObject)); 







//Explain the difference between Object.freeze() and Object.seal() with examples.
//Ans : Object.freeze() prevents any changes to the object, including adding, removing, or modifying properties.
// Object.seal() allows existing properties to be modified but prevents adding or removing properties.
// Example of Object.freeze()
let frozenExample = Object.freeze({ x: 1, y: 2 });
frozenExample.x = 10; 
console.log("Frozen Example:", frozenExample); 
// Example of Object.seal()
let sealedExample = Object.seal({ a: 1, b: 2 });
sealedExample.a = 10;
sealedExample.c = 3;
console.log("Sealed Example:", sealedExample); 




//38. What happens if we use arrow function as object method and access this? Show output.
let arrowObject = {
    name: "Eve",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
arrowObject.greet();
// Output: Hello, my name is undefined
// Explanation: Arrow functions do not have their own `this` context; they inherit `this` from the surrounding scope, which in this case is the global scope where `name` is not defined.






//39. Show an example where method is passed as callback and loses this context.
let personWithMethod = {
    name: "Frank",
    sayName: function() {
        console.log(`My name is ${this.name}`);
    }
};
function executeCallback(callback) {
    callback(); // This will lose the context of `this`
}
executeCallback(personWithMethod.sayName);
// Output: My name is undefined
// Explanation: When `sayName` is passed as a callback, it loses its context, and `this` refers to the global object (or undefined in strict mode), not the `personWithMethod` object.




//40. Explain Object.entries() and its use in converting object to array of key-value pairs.
// Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let exampleObject = { a: 1, b: 2, c: 3 };
let entriesArray = Object.entries(exampleObject);
console.log("Object Entries:", entriesArray);
// Output: Object Entries: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// Explanation: This method is useful for iterating over an object's properties or converting an object into a format that can be easily manipulated as an array of key-value pairs.


