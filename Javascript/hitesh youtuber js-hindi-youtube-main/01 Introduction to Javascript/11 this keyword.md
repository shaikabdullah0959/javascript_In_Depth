 ### this behavior in global scope/function/object/function constructor


1. this in global scope
    console.log(this) // globalObject -  window in case of browser
                      // globalObject -  global in case of node

2. this inside a function

    function a() {
        console.log(this); // Window
    }

    function b() {
        'use strict';
        console.log(this); // undefined
    }

if value of this keyword is undefined/null then it will be replaced with globalObject in case of non strict mode

// value of this keyword depends on how the function is called
name();  -> this value is undefined
window.a(); -> this value is window

3. this inside an object's method

    let student = {
        name: "shaik",
        PrintName: function() {
            console.log(this); // this value is student ({name: "shaik", PrintName: f})
            console.log(this.name); // shaik
        }
    }
    student.PrintName();

    function inside an object is called method.
    value of this keyword present in a method is the object the method belongs to.

4. this inside object arrow function

    let student = {
        name: "shaik",
        PrintName: () => {
            console.log(this);  // window
        }
    }
    student.PrintName();

    value of this keyword present in arrow function is based on enclosing lexical context

5. this inside nested arrow function

    let student = {
        name: "shaik",
        PrintName: function () {
            let student2 = () => {
                console.log(this); // this = student
            }
            student2();
        }
    }
    student.PrintName();

6. call apply bind (sharing methods)
   
   In general this inside function return window object but if we want to change the context of this 
   we can use call/apply/bind

   function z() {
    console.log(this); // window
   }
    
    Changing the value of this
    let student1 = {
        name: "MD",
    }

    let student = {
        name: "shaik",
        PrintName: function() {
            console.log(this);  // value of this =  student1
        }
    }

    If we want to share PrintName method with student2 then we can use call apply bind 

    student.PrintName.call(student1);

    let student2 = {
        name: "MD",
    }
    function x() {
        console.log(this); // this = student2
    }
    x.call(student2);

summary
JavaScript's "this" keyword can be confusing for many and behaves differently in various scenarios.
00:55  The behavior of the "this" keyword depends on the context, such as whether it's in a function, global space, or an arrow function.
04:17  In the global space, the value of "this" is the global object, which can vary depending on the JavaScript runtime environment (e.g., window in browsers, Global in Node.js).
07:30  Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
10:06  JavaScript uses a mechanism called "this substitution," where "this" is replaced with the global object when it's undefined or null in non-strict mode.
16:11  Inside an object's method, "this" refers to the object itself where the method is called.
21:11  "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
46:01  Arrow functions do not have their own 'this' binding and take the value of the enclosing lexical context.
48:46  In the context of DOM elements, 'this' refers to the specific HTML element being interacted with.
https://www.youtube.com/watch?v=9T4z98JcHR0&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=8

// window
    console.log(this);
    function
    object -> arrow function

// object
    object -> normal function
    object -> function -> arrow function (nested function)


    

Execute Output
function a() {
  console.log(this); // Window
}

function b() {
  'use strict';
  console.log(this); // undefined
}

a();
b();

let student = {
  name: "shaik",
  PrintName: function() {
      console.log(this); // this value is student ({name: "shaik", PrintName: f})
  }
}
student.PrintName();

let student1 = {
  name: "shaik",
  PrintName: () => {
      console.log(this);  // window
  }
}
student1.PrintName();

let student2 = {
  name: "shaik",
  PrintName: function () {
      let student2 = () => {
          console.log(this); // this = student
      }
      student2();
  }
}
student2.PrintName();