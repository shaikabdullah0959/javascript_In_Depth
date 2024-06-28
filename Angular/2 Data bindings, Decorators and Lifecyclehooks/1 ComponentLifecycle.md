**Angular Component Lifecycle Hooks**

In Angular, components go through a series of lifecycle stages from creation to destruction. Angular provides lifecycle hooks that allow developers to execute specific logic at different phases of a component’s life.

### **Lifecycle Hooks and Their Usage**

1. **ngOnChanges()**
   - Called when an `@Input` property changes.
   - Useful for reacting to input property updates.

2. **ngOnInit()**
   - Called once after the component is initialized.
   - Used for component setup, fetching initial data, or subscriptions.

3. **ngDoCheck()**
   - Called during every change detection cycle.
   - Useful for detecting changes Angular doesn’t automatically track.

4. **ngAfterContentInit()**
   - Called after content is projected into the component.
   - Triggered after the first `ngDoCheck()`.

5. **ngAfterContentChecked()**
   - Called after every check of projected content.

6. **ngAfterViewInit()**
   - Called after the component’s view and child views are initialized.

7. **ngAfterViewChecked()**
   - Called after every check of the component’s view and child views.

8. **ngOnDestroy()**
   - Called just before the component is destroyed.
   - Used for cleanup, such as unsubscribing from observables.

---

### **Example of Lifecycle Hooks in Action**

```typescript
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `<p>Lifecycle Demo: {{data}}</p>`
})
export class LifecycleDemoComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data!: string;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges() {
    console.log('ngOnChanges - Input property changed');
  }

  ngOnInit() {
    console.log('ngOnInit - Component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck - Change detection triggered');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - Content projected');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - Projected content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - View initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - View checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Component about to be destroyed');
  }
}
```

### **Explanation of Execution Order**
1. **Constructor:** Runs first when the component is created.
2. **ngOnChanges:** Called whenever an `@Input()` property changes.
3. **ngOnInit:** Called once when the component initializes.
4. **ngDoCheck:** Runs during every change detection cycle.
5. **ngAfterContentInit:** Executes when projected content is initialized.
6. **ngAfterContentChecked:** Runs every time the projected content is checked.
7. **ngAfterViewInit:** Executes when the component’s view (including child views) is initialized.
8. **ngAfterViewChecked:** Runs every time the component’s view is checked.
9. **ngOnDestroy:** Called just before the component is destroyed.

### **Conclusion**
Understanding Angular lifecycle hooks is crucial for writing efficient and optimized applications. Each hook serves a specific purpose and allows developers to handle different stages of a component’s lifecycle effectively.

