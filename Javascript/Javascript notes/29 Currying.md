## Currying in JavaScript
Currying transforms a function with multiple parameters into a sequence of functions, each taking a single parameter.

### Regular Function:
```javascript
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}
console.log(simpleFunction(4, 5, 6)); // 15
```

### Curried Function:
```javascript
function curriedFunction(param1) {
    return function(param2) {
        return function(param3) {
            return param1 + param2 + param3;
        };
    };
}
console.log(curriedFunction(4)(5)(6)); // 15
```

### Why is Currying Useful?
- Helps create higher-order functions.
- Reduces errors by breaking functions into smaller, manageable pieces.
- Improves code readability and reusability.

