// tyeps of errors in JS

// 1. Syntax Errors
// These occur when the code is not written correctly according to the JavaScript syntax rules.


// 2. Reference Errors
// These occur when code refers to a variable that has not been declared.
//example
function hello(){
    console.log(x); // ReferenceError: x is not defined
}

//example 2 

function greet() {
    console.log(name); // ReferenceError: name is not defined
    let  name = 10;
}


// 3. Type Errors
// These occur when a value is not of the expected type.
function add(a, b) {
    return a + b;
}
// Example of TypeError
try {
    add(5, "10"); // This will not throw an error, but it may not behave as expected
}   catch (error) {
    console.error("TypeError:", error.message);
}

// 4. Range Errors
// These occur when a value is not within the expected range.
function factorial(n) {
    if (n < 0) {
        throw new RangeError("Negative numbers are not allowed");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example of RangeError
try {
    console.log(factorial(-5)); // This will throw a RangeError
} catch (error) {
    console.error("RangeError:", error.message);
}


const user = {
    name: "John"
};
console.log(user.address.city);// Example of a common mistake that can lead to a ReferenceError

let x= 5 ;
if (x = 10) {
    console.log("x is 10");
}
// Example of a common mistake that can lead to unexpected behavior



    

//what is function in javascript
// A function in JavaScript is a block of code designed to perform a particular task. It is executed when "called" or "invoked". Functions can take inputs, called parameters, and can return a value.




//what is function expression in javascript?
// A function expression is a way to define a function in JavaScript using an expression. It can be assigned to a variable, passed as an argument, or returned from another function. Function expressions can be anonymous or named.
// Example of a function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};
// Example of an anonymous function expression
const add = function(a, b) {
    return a + b;
};
// Example of a named function expression
const multiply = function multiply(a, b) {
    return a * b;
};




//what is function declaration in javascript?
// A function declaration is a way to define a function in JavaScript using the `function` keyword followed by the function name and parentheses. Function declarations are hoisted, meaning they can be called before they are defined in the code.
// Example of a function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
// Example of a function declaration with parameters
function add(a, b) {
    return a + b;
}
// Example of a function declaration with no parameters
function sayHello() {
    return "Hello!";
}
// Example of a function declaration with default parameters
function multiply(a, b = 1) {
    return a * b;
}



//function statements
// A function statement is another term for a function declaration. It defines a named function that can be called later in the code. Function statements are hoisted, allowing them to be called before their definition.
// Example of a function statement  
function greet(name) {
    return `Hello, ${name}!`;
}
// Example of a function statement with parameters
function add(a, b) {
    return a + b;
}
// Example of a function statement with no parameters
function sayHello() {
    return "Hello!";
}
// Example of a function statement with default parameters
function multiply(a, b = 1) {
    return a * b;
}
// Example of a function statement with rest parameters
    function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Example of a function statement with a callback  
function processArray(arr, callback) {
    return arr.map(callback);
}
//create a html page which looks like a calculator



setTimeout(
function (){
console.log(2*3);
},2000)
// create an arrow function
const multiply = (a, b) => a * b;
// Example of an arrow function with parameters
const add = (a, b) => {
    return a + b;
};