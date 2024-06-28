### Stack and heap are two areas in memory where data is stored.
The **stack** is used for **static memory allocation**, while the **heap** is used for **dynamic memory allocation**.

**Static memory allocation** means that the size and location of the memory is fixed at compile time,
while **dynamic memory allocation** means that the size and location of the memory can change at runtime.

Primitive values (such as numbers, strings, booleans, etc.) are stored in the stack,
while objects (such as arrays, functions, objects, etc.) are stored in the heap.

```javascript
let person = {
    name: "James",
    age: 23,
    isMale: true,
};
console.log(person);

let newPerson = person;
newPerson.isMale = false; // Value of isMale updated in the same object (person) as newPerson is pointing
                           // to the person object in heap memory.
                           // Memory location of person and newPerson is same in heap
console.log(person);
```

### Solution to Copy an Object Without the Same Reference

1. **Deep Copy of an Object**
   ```javascript
   let newPerson = JSON.parse(JSON.stringify(person));
   ```
2. **Shallow Copy of an Object**
   ```javascript
   let newPerson = Object.assign({}, person);
   let newPerson = { ...person };
   ```

[Source](https://medium.com/@iarsham/stack-and-heap-in-js-c09aeabf3967#:~:text=The%20stack%20is%20used%20for,memory%20can%20change%20at%20runtime)

