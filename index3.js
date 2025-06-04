
//Create a function statement that takes a string and returns the number of vowels present in it.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


//Use a function expression to check if a number is a prime number or not.
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


//Write a function declaration that checks whether a given string is an anagram of another.
function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);

}console.log(isAnagram("listen", "silent")); // true




//Use an anonymous function inside setInterval to log the current timestamp every 3 seconds.
setInterval(
    function(){
        console.log(`Current Timestamp: ${new Date().toISOString()}`);
    }
, 3000);


//Implement a named function expression that recursively calculates the sum of digits of a number. without using math functions like Math.floor or Math.ceil.
const sumOfDigits = function(num) {
    if (num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
};




//Use a named function expression to count the number of words in a string.
const countWords = function(str) {
    return str.trim().split(/\s+/).length;
};





//Create a function generateReport(studentName, totalMarks, grade) that logs a structured report using the passed arguments.
function generateReport(studentName, totalMarks, grade) {
    console.log(`Student Name: ${studentName}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Grade: ${grade}`);
}
//Call the generateReport function with appropriate arguments.
generateReport('John Doe', 85, 'A');



//Write a function that accepts an object as a parameter and destructures it to extract and display user details.
function displayUserDetails({ name, age, email }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}
//Call the displayUserDetails function with an object containing user details.
displayUserDetails({
    name: 'Alice',
    age: 30,
    email: 'alice@gmail.com'})



//Write a function that accepts another function as an argument, adds some logging before and after its execution, and then executes it.
function executeWithLogging(func) {
    console.log("Starting execution...");
    func();
    console.log("Execution finished.");
}
//Call the executeWithLogging function with a simple function that logs a message.
executeWithLogging(function() {
    console.log("Hello, this is a logged message!");
});

//Create a function that returns another function which greets a specific user (closure concept).
function createGreeter(userName) {
    return function() {
        console.log(`Hello, ${userName}!`);
    };
}
//Call the createGreeter function and store the returned function in a variable, then invoke it.
const greetAlice = createGreeter('Alice');
greetAlice(); 

//Store multiple functions inside an array and invoke each one in a loop.
const functionsArray = [
    function() { console.log("Function 1 executed"); },
    function() { console.log("Function 2 executed"); },
    function() { console.log("Function 3 executed"); }
];
for (const func of functionsArray) {
    func();
}



//Rewrite a traditional function into an arrow function that checks if a year is a leap year.
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
//Call the isLeapYear function with a year and log the result.
console.log(isLeapYear(2020)); // true


//Write an arrow function that filters an array of numbers and returns only those divisible by 3 and 5.
const filterDivisibleBy3And5 = (numbers) => {
    return numbers.filter(num => num % 3 === 0 && num % 5 === 0);
};
//Call the filterDivisibleBy3And5 function with an array of numbers and log the result.
const numbersArray = [15, 30, 45, 10, 20, 25, 60];
console.log(filterDivisibleBy3And5(numbersArray)); 

//Use an arrow function with .reduce() to calculate the total price from a list of products (with price field)
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 300 }
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(`Total Price: $${totalPrice}`);


//Write a function customMap(arr, callback) that mimics the behavior of the native .map() method.
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
//Call the customMap function with an array and a callback that doubles each element.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


//Create a function that takes another function and an argument, and applies the function after a delay of 2 seconds.
function delayedExecution(func, arg) {
    setTimeout(() => {
        func(arg);
    }, 2000);
}
//Call the delayedExecution function with a simple function that logs a message and an argument.
delayedExecution((message) => {
    console.log(`Delayed message: ${message}`);
}, "Hello after 2 seconds!");



//Create a calculator function that takes two numbers and a callback to perform operations like add, subtract, multiply, etc.
function calculator(num1, num2, operation) {
    return operation(num1, num2);
}
//Call the calculator function with two numbers and a callback for addition.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
console.log(calculator(10, 5, add)); // 15
console.log(calculator(10, 5, subtract)); // 5


//Write a function fetchUserData(id, callback) that simulates an asynchronous API call using setTimeout.
function fetchUserData(id, callback) {
    setTimeout(() => {
        const userData = { id: id, name: "User" + id };
        callback(userData);
    }, 1000);
}
//Call the fetchUserData function with an ID and a callback that logs the user data.
fetchUserData(1, (data) => {
    console.log(`Fetched User Data: ID = ${data.id}, Name = ${data.name}`);
});




//Implement a function that maintains a counter using closure and returns increment/decrement methods.
function createCounter() {
    let count = 0;
    return {
        increment: () => {
            count++;
            console.log(`Count after increment: ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`Count after decrement: ${count}`);
        },
        getCount: () => count
    };
}
const counter = createCounter();
counter.increment(); // Count after increment: 1
counter.increment(); // Count after increment: 2
counter.decrement(); // Count after decrement: 1


//Create a function secureAccess(role) that returns another function which checks if the user has access based on role (admin, user, guest).
function secureAccess(role) {
    return function(action) {
        if (role === 'admin') {
            console.log(`Admin access granted for action: ${action}`);
        } else if (role === 'user') {
            console.log(`User access granted for action: ${action}`);
        } else {
            console.log(`Guest access denied for action: ${action}`);
        }
    };
}
//Call the secureAccess function with a role and invoke the returned function with an action.
const adminAccess = secureAccess('admin');
adminAccess('delete user'); 
const userAccess = secureAccess('user');
userAccess('view profile'); 



