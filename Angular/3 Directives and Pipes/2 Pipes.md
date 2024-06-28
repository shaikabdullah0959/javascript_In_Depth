### **Pipes in Angular**

Pipes in Angular are **used to transform data** in templates. They provide a simple way to format values like text, dates, numbers, and more.

---

## **Why Use Pipes?**
- Improve **code readability** in templates.
- Reduce the need for **manual formatting** in TypeScript code.
- **Reusable** transformation logic across components.

---

## **Using Built-in Pipes**
Angular provides several built-in pipes for common transformations.

### **1. Date Pipe** (Formats dates)
```html
<p>{{ today | date:'fullDate' }}</p>
```
```typescript
export class AppComponent {
  today = new Date();
}
```
> Displays date in full format like *Monday, February 14, 2025*.

### **2. Uppercase & Lowercase Pipes** (Transform text case)
```html
<p>{{ 'angular' | uppercase }}</p>  <!-- Output: ANGULAR -->
<p>{{ 'ANGULAR' | lowercase }}</p>  <!-- Output: angular -->
```

### **3. Currency Pipe** (Formats currency values)
```html
<p>{{ price | currency:'USD' }}</p>
```
```typescript
export class AppComponent {
  price = 1500;
}
```
> Output: **$1,500.00** (depending on locale settings).

### **4. Decimal Pipe** (Formats numbers with decimal places)
```html
<p>{{ num | number:'1.2-2' }}</p>
```
```typescript
export class AppComponent {
  num = 3.14159;
}
```
> Output: **3.14** (limits decimal places between 1 and 2).

### **5. Percent Pipe** (Converts numbers to percentages)
```html
<p>{{ 0.85 | percent }}</p>
```
> Output: **85%**.

### **6. JSON Pipe** (Formats objects as JSON strings)
```html
<p>{{ obj | json }}</p>
```
```typescript
export class AppComponent {
  obj = { name: 'John', age: 30 };
}
```
> Output: **{"name":"John","age":30}**.

---

## **Chaining Multiple Pipes**
Pipes can be combined to achieve multiple transformations.
```html
<p>{{ 'angular pipes' | uppercase | slice:0:7 }}</p>
```
> Output: **ANGULAR** (First 7 letters of uppercase text).

---

## **Creating a Custom Pipe**
We can define custom pipes to handle specific transformations.

### **Example: Creating a Custom Pipe to Reverse Text**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```
**Usage in HTML:**
```html
<p>{{ 'Angular' | reverseText }}</p>
```
> Output: **ralugnA**.

---

## **Pure vs Impure Pipes**
- **Pure Pipes**: Executes only when the input changes (default behavior, efficient).
- **Impure Pipes**: Executes on every change detection cycle (less efficient but useful for dynamic updates).

### **Example of a Pure Pipe**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'multiply', pure: true })
export class MultiplyPipe implements PipeTransform {
  transform(value: number, factor: number): number {
    return value * factor;
  }
}
```
**Usage in HTML:**
```html
<p>{{ 5 | multiply:2 }}</p>
```
> Output: **10** (recalculates only when the input value changes).

### **Example of an Impure Pipe**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'randomNumber', pure: false })
export class RandomNumberPipe implements PipeTransform {
  transform(): number {
    return Math.random();
  }
}
```
**Usage in HTML:**
```html
<p>{{ '' | randomNumber }}</p>
```
> Output: **A new random number on every change detection cycle**.

---

## **How Input Changes Affect Pure Pipes**
Pure pipes execute **only when the input value changes**. They do not run on every change detection cycle.

#### **Example: Pure Pipe with Input Change**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'square', pure: true })
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
```
**Usage in Component:**
```typescript
export class AppComponent {
  num = 2;

  changeValue() {
    this.num = 3;  // Pipe executes only when num changes
  }
}
```
**Usage in HTML:**
```html
<p>{{ num | square }}</p>
<button (click)="changeValue()">Change Number</button>
```
> **Pipe executes only when `num` changes (from 2 to 3).**  
> If the value remains the same, it will not recalculate.

---

## **How Change Detection Affects Impure Pipes**
Impure pipes execute **on every change detection cycle**, even if the input does not change.

#### **Example: Impure Pipe Executing on Every Change Detection**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'randomNumber', pure: false })
export class RandomNumberPipe implements PipeTransform {
  transform(): number {
    return Math.random();
  }
}
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-random-demo',
  template: `
    <p>Random Number: {{ '' | randomNumber }}</p>
    <button (click)="increment()">Increment</button>
    <p>Counter: {{ counter }}</p>
  `
})
export class RandomDemoComponent {
  counter = 0;

  increment() {
    this.counter++; // Causes change detection
  }
}
```
**Usage in HTML:**
```html
<p>{{ '' | randomNumber }}</p>
```
**What Happens?**  
- Even if the input remains empty (`''`), the pipe runs **on every change detection cycle**.
- Every small UI change (like a button click or a keystroke) will trigger a **new random number generation**.

---

## **Key Takeaways**
✔ **Pipes transform data** in Angular templates.
✔ **Built-in pipes** simplify common formatting tasks.
✔ **Custom pipes** allow for specific transformations.
✔ **Chaining pipes** helps apply multiple transformations in one go.
✔ **Pure pipes** are optimized for performance, while **impure pipes** update frequently.

---




Pure and Impure pipes:
    
       By default pipes are pure and set to true internally. @Pipe({name: 'exponentialStrength',pure: true})
       Angular executes a pure pipe only when it detects a pure change to the input value. 
       A pure change is either a change to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object).
       *view gets updated for change in input value or change in object reference.
       
       Impure pipe:
       @Pipe({name: 'exponentialStrength', pure: false})
       Angular executes an impure pipe during every component change detection cycle.
       Impure pipes are executed even when source data is changed without change to the object reference.
       An impure pipe is called as often as every keystroke or mouse-move.
       *view gets updated for every DOM event.



