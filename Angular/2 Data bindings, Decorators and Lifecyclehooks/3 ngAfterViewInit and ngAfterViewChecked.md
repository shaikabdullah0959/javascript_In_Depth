**ngAfterViewInit & ngAfterViewChecked in Angular**

### **1. ngAfterViewInit**
`ngAfterViewInit` is a lifecycle hook that is called after Angular initializes the component's view and child views. It is useful when you need to perform operations that depend on the view being fully initialized, such as interacting with child components or manipulating the DOM.

#### **Example:**

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h2 #titleRef>Angular Lifecycle Hooks</h2>
  `
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('titleRef') title!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View Initialized');
    this.title.nativeElement.style.color = 'blue';
  }
}
```

##### **Explanation:**
- The `@ViewChild` decorator is used to get a reference to the `h2` element.
- Inside `ngAfterViewInit`, we change the text color to blue.
- Since `ngAfterViewInit` runs after the view is initialized, it is the right place to interact with child components and DOM elements.

---

### **2. ngAfterViewChecked**
`ngAfterViewChecked` is called after every check of the component's view and child views. It is useful for detecting changes that Angular might not catch automatically.

#### **Example:**

```typescript
import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <h2 #titleRef>Angular Lifecycle Hooks</h2>
    <button (click)="changeText()">Change Text</button>
  `
})
export class ExampleComponent implements AfterViewChecked {
  @ViewChild('titleRef') title!: ElementRef;
  text: string = 'Angular Lifecycle Hooks';

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: View Checked');
  }

  changeText() {
    this.title.nativeElement.textContent = 'Updated Lifecycle Hook';
  }
}
```

##### **Explanation:**
- `ngAfterViewChecked` runs after every change detection cycle.
- We added a button that modifies the text of the `h2` element.
- Every time the view is checked (including when the button is clicked), `ngAfterViewChecked` will be called, logging the message to the console.

### **Key Differences:**
| Lifecycle Hook         | Purpose |
|------------------------|---------|
| `ngAfterViewInit`      | Called once after view initialization |
| `ngAfterViewChecked`   | Called after every change detection cycle |

These hooks are essential when working with dynamic content and handling UI updates after view initialization.

