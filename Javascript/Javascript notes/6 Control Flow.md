#### Control flow statements help determine the execution flow in a program:

- **Conditional statements**: `if`, `else if`, `else`, `switch`.
- **Loops**:
  - `for` - runs a block of code a specified number of times.
  - `while` - runs while a condition is true.
  - `do...while` - executes at least once before checking the condition.
  - `forEach` - iterates over arrays.
  - `for in` - Iterates over keys of an object or indices of an array.
  - `for of` - Iterates Over Values.

### **for...in Loop**
The `for...in` loop iterates over the properties of an object or the indices of an array.

#### Example with an Object:
```javascript
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
  console.log(key, ":", person[key]); 
}
```
**Output:**
```
name : Alice
age : 25
city : New York
```

#### Example with an Array:
```javascript
let colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, ":", colors[index]); 
}
```
**Output:**
```
0 : red
1 : green
2 : blue
```

### **for...of Loop**
The `for...of` loop iterates over values of an iterable object like an array.

#### Example:
```javascript
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
```
**Output:**
```
red
green
blue
```