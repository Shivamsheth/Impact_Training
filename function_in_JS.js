/*✅ 1. Global Context
const name = "Ram";
function say() {
console.log(this.name);
}
say();
Q1: What will be the output of the above code in:
● (a) Browser?
● (b) Node.js?
*/
// (a) Browser: "Ram"
// (b) Node.js: undefined

/*✅ 2. Function Inside Object (Not a Method)
const user = {
name: "Aashi",
greet: function () {
function inner() {
console.log(this.name);
}
inner();
}
};
user.greet();
What will be the output of inner()? Explain the behavior of this.
// Output: undefined
// Explanation: In this case, `inner` is a regular function, not a method of the `user` object. When called, `this` inside `inner` refers to the global context (or undefined in strict mode), not the `user` object. Hence, it logs `undefined`.
*/


/*
✅ 3. Arrow Function Inside a Method
const obj = {
name: "Yogita",
show: function () {
const arrow = () => {
console.log(this.name);
};
arrow();
}
};
obj.show();
Q3: Predict the output and explain how this works inside the arrow function.
*/
// Output: "Yogita"
// Explanation: In this case, `this` inside the arrow function `arrow` refers to the `obj` object because arrow functions do not have their own `this`. They lexically bind `this` from the surrounding context, which is the `show` method of `obj`. Hence, it logs "Yogita".



/*
✅ 4. Arrow Function Assigned Later
const arrow = () => {
console.log(this);
};
const user = {
arrowFunc: arrow
};
user.arrowFunc();
Q4: Will this refer to user? Justify your answer.
*/
// Output: The output will depend on the context in which the arrow function is defined.
// Explanation: Arrow functions do not have their own `this`. They inherit `this` from the surrounding lexical context where they were defined. In this case, if the arrow function is defined in the global scope, `this` will refer to the global object (or undefined in strict mode). If it were defined inside a method of an object, it would refer to that object. Hence, `user.arrowFunc()` will log the global context (or undefined in strict mode), not the `user` object.




/*
✅ 5. Arrow Function Inside Constructor
function Person(name) {
this.name = name;
this.say = () => {
console.log(this.name);
};
}
const p = new Person("Ram");
const sayFn = p.say;
sayFn();
Q5: What will be the output of sayFn()? Explain the reference of this.

*/
// Output: "Ram"
// Explanation: In this case, `this` inside the arrow function `say` refers to the instance of `Person` created by `new Person("Ram")`. Arrow functions do not have their own `this`, so they lexically bind `this` from the surrounding context, which is the instance of `Person`. Therefore, when `sayFn()` is called, it logs "Ram".
   


/*✅ 6. Nested Arrow and Regular Function
const obj = {
name: "Guru",
method: function () {
const arrow1 = () => {
function regular() {
console.log(this.name);
}
regular();
};
arrow1();
}
};
obj.method();
Q6: What will be the output and why? Focus on this in the regular function.
*/

// Output: undefined
// Explanation: In this case, `arrow1` is an arrow function, so it captures `this` from the `method` context, which is the `obj` object. However, when `regular` is called, it is a regular function and does not have its own `this`. Therefore, `this` inside `regular` refers to the global context (or undefined in strict mode), leading to the output being `undefined`. The arrow function does not change the behavior of `this` in the regular function.




/*
✅ 7. Returning a Regular Function from Method
const person = {
name: "Rahul",
getName: function () {
return function () {
console.log(this.name);
};
}
};
const fn = person.getName();
fn();
Q7: What will be logged to the console? Why?


*/ 

// Output: undefined
// Explanation: In this case, `getName` returns a regular function. When `fn()` is called, it is invoked in the global context (or undefined in strict mode), so `this` inside that function refers to the global object (or undefined). Since there is no `name` property on the global object, it logs `undefined` to the console. If you wanted to access `person.name`, you would need to call the returned function as a method of `person`, like `person.getName()()`.



/*

 ✅ 8. Returning an Arrow Function from Method
const person = {
name: "Raj",
getName: function () {
return () => {
console.log(this.name);
};
}
};
const fn = person.getName();
fn();
Q8: What will be the output here? How does arrow function affect this?
   
*/

// Output: "Raj"
// Explanation: In this case, `getName` returns an arrow function. When `fn()` is called, the arrow function retains the `this` context from where it was defined, which is the `person` object. Therefore, `this.name` refers to `person.name`, and it logs "Raj" to the console. Arrow functions do not have their own `this`, so they use the `this` value from their enclosing lexical scope.





/*
✅ 9. Method in Nested Object
const outer = {
name: "Outer",
inner: {
name: "Inner",
getName: function () {
console.log(this.name);
}
}
};
outer.inner.getName();
Q9: Which object does this refer to? What will be the output?

*/  
// Output: "Inner"
// Explanation: In this case, `getName` is a method of the `inner` object. When `outer.inner.getName()` is called, `this` inside `getName` refers to the `inner` object, so it logs "Inner" to the console. The method is invoked in the context of the `inner` object, which has its own `name` property.



/*
✅ 10. this in IIFE Inside a Method
const obj = {
name: "Ram",
method: function () {
(function () {
console.log(this.name);
})();
}
};
obj.method();
Q10: Analyze the behavior of this inside the IIFE.
*/
// Output: undefined
// Explanation: In this case, the IIFE (Immediately Invoked Function Expression) is executed in the global context (or undefined in strict mode). Therefore, `this` inside the IIFE does not refer to the `obj` object but rather to the global context. Since there is no `name` property on the global object, it logs `undefined` to the console. If you wanted to access `obj.name`, you would need to use a different approach, such as storing `this` in a variable before the IIFE or using an arrow function.



/*
✅ 11. this in setTimeout (Regular Function)
const obj = {
name: "Timer",
show: function () {
setTimeout(function () {
console.log(this.name);
}, 0);
}
};
obj.show();
Q11: What will be logged? What does this refer to inside setTimeout?
*/
// Output: undefined
// Explanation: In this case, the function passed to `setTimeout` is a regular function, not a method of `obj`. When it executes, `this` inside that function refers to the global context (or undefined in strict mode), not the `obj` object. Since there is no `name` property on the global object, it logs `undefined`. To access `obj.name`, you could use an arrow function or store `this` in a variable before the `setTimeout` call.
 


/*
✅ 12. this in setTimeout (Arrow Function)
const obj = {
name: "Timer",
show: function () {
setTimeout(() => {
console.log(this.name);
}, 0);
}
};
obj.show();
Q12: What will be the output? Why is arrow function behavior different?

*/
// Output: "Timer"
// Explanation: In this case, the function passed to `setTimeout` is an arrow function. Arrow functions do not have their own `this`, so they lexically bind `this` from the surrounding context, which is the `show` method of `obj`. Therefore, when the arrow function executes, `this.name` refers to `obj.name`, and it logs "Timer" to the console. This is different from the regular function case where `this` would refer to the global context.