let score = "10"

//console.log(typeof score);


let valueInNumber = Number(score) 
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // 10

// string to number conversion
// Number("33") => 33  
// Number("33abc") => NaN
// Number(true) => 1;
// Number(false) => 0
// Number(undefined) => NaN
// Number(null) => 0
// Number("") => 0
// Number("abc") => NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// Boolean(1) => true;
// Boolean(0) => false
// Boolean("") => false
// Boolean("hitesh") => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  2 to the power of 3
// console.log(10/2);   gives quotient
// console.log(7%3); gives remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2 // concat two strings
// console.log(str3);

// console.log("1" + 2); // if values are of diff data types then they are converted to strings
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

// Post increment operator
let num1 = 6;
let num2 = num1++; // first assign the value of num1 to num2 i.e, 6 then increment num1
console.log(num2); // 6
console.log(num1); // 7

// Pre increment operator
let num3 = 6;
let num4 = ++num3; // first increment the value of num3 (which will be 7) then assign it to num4
console.log(num4); // 7
console.log(num3); // 7

// link to study more about conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

