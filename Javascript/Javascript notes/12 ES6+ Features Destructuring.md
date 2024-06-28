## Modern JavaScript Features

Modern JavaScript features include:
- `let` and `const` for block-scoped variables.
- **Arrow functions**: `()=>{}`.
- **Template literals**: ``Hello, ${name}``.
- **Destructuring**: `const {name, age} = obj`.
- **Spread/rest operators**: `[...arr]`, `{...obj}`.
- **Modules**: `export` and `import`.

---

## **What is Destructuring?**
Destructuring is a convenient way to extract values from arrays and objects into variables.

---

### **Array Destructuring**
Extract values from arrays using square brackets `[]`.

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3
```

**Skipping Values**
```javascript
const [x, , z] = [10, 20, 30];
console.log(x, z); // 10 30
```

**Using Rest Parameter**
```javascript
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]
```

---

### **Object Destructuring**
Extract values from objects using curly braces `{}`.

```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Alice 25
```

**Renaming Variables**
```javascript
const { name: fullName, age: years } = person;
console.log(fullName, years); // Alice 25
```

**Default Values**
```javascript
const { country = "USA" } = person;
console.log(country); // USA
```

---

### **Nested Destructuring**
```javascript
const user = {
  id: 1,
  profile: { username: "john_doe", email: "john@example.com" }
};
const { profile: { username } } = user;
console.log(username); // john_doe
```

---

### **Function Parameter Destructuring**
```javascript
function display({ name, age }) {
  console.log(`${name} is ${age} years old.`);
}
display(person); // Alice is 25 years old.
```

---

## **Summary**
- **Array Destructuring** allows extracting values from arrays into variables.
- **Object Destructuring** extracts properties from objects efficiently.
- **Nested Destructuring** helps access deeply nested object properties.
- **Default values** can be used to handle missing properties.
- **Function Parameter Destructuring** makes functions more readable and clean.
- Destructuring improves code readability and reduces redundant property access, making it essential for modern JavaScript and frameworks like React.

---

### **Conclusion**
Destructuring is a powerful feature that simplifies working with objects and arrays, making JavaScript code more concise and efficient.

