### Introduction to Numbers
- JavaScript numbers are of type `number`, including integers and floating-point values.

### Number Methods

1. **toFixed(digits)** – Formats a number to a fixed decimal places.  
   - Example: `(5.678).toFixed(2)` → `'5.68'`  

2. **toPrecision(precision)** – Formats a number to a specified length.  
   - Example: `(123.456).toPrecision(4)` → `'123.5'`  

3. **toString(base)** – Converts a number to a string in a given base (default is 10).  
   - Example: `(255).toString(16)` → `'ff'`  

4. **toExponential(digits)** – Returns a number in exponential notation.  
   - Example: `(12345).toExponential(2)` → `'1.23e+4'`  

5. **parseInt(string, radix)** – Converts a string to an integer based on a given base.  
   - Example: `parseInt('101', 2)` → `5`  

6. **parseFloat(string)** – Converts a string to a floating-point number.  
   - Example: `parseFloat('3.14')` → `3.14`  

7. **isFinite(value)** – Checks if a value is a finite number.  
   - Example: `isFinite(10 / 0)` → `false`  

8. **isNaN(value)** – Checks if a value is `NaN` (Not a Number).  
   - Example: `isNaN('abc' / 2)` → `true`  

9. **Number.isInteger(value)** – Checks if a value is an integer.  
   - Example: `Number.isInteger(4.2)` → `false`

10. **Number.MAX_VALUE** – Largest possible number in JavaScript.  
    - Example: `Number.MAX_VALUE` → `1.7976931348623157e+308`  

11. **Number.MIN_VALUE** – Smallest positive number in JavaScript.  
    - Example: `Number.MIN_VALUE` → `5e-324`  

12. **Number.POSITIVE_INFINITY** – Represents positive infinity.  
    - Example: `1 / 0` → `Infinity`  

13. **Number.NEGATIVE_INFINITY** – Represents negative infinity.  
    - Example: `-1 / 0` → `-Infinity`  

14. **Math.round(value)** – Rounds a number to the nearest integer.  
    - Example: `Math.round(4.6)` → `5`  

15. **Math.floor(value)** – Rounds a number down.  
    - Example: `Math.floor(4.9)` → `4`  

16. **Math.ceil(value)** – Rounds a number up.  
    - Example: `Math.ceil(4.1)` → `5`  

17. **Math.abs(value)** – Returns the absolute value.  
    - Example: `Math.abs(-10)` → `10`  

18. **Math.pow(base, exponent)** – Returns the power of a number.  
    - Example: `Math.pow(2, 3)` → `8`  

19. **Math.sqrt(value)** – Returns the square root.  
    - Example: `Math.sqrt(25)` → `5`  

20. **Math.cbrt(value)** – Returns the cube root.  
    - Example: `Math.cbrt(27)` → `3`  

21. **Math.max(a, b, ...)** – Returns the largest number.  
    - Example: `Math.max(10, 20, 5)` → `20`  

22. **Math.min(a, b, ...)** – Returns the smallest number.  
    - Example: `Math.min(10, 20, 5)` → `5`  

23. **Math.random()** – Returns a random number between `0` and `1`.  
    - Example: `Math.random()` → `0.5678` (random)



