## Change Detection in Angular

### **What is Change Detection?**
Change Detection in Angular is the process of keeping the UI in sync with the application state. It determines when and how the DOM updates based on changes in component data.

### **How Does It Work?**
1. **Angular's Change Detection Mechanism**  
   - Angular uses a **zone-based** approach (via Zone.js) to track asynchronous operations (like HTTP calls, setTimeout, user interactions, etc.).
   - When a change occurs, Angular triggers a **change detection cycle** to update the view.

2. **Change Detection Strategies**
   - **Default Strategy (Checks entire component tree)**  
     - Runs change detection on all components whenever any event occurs.
   - **OnPush Strategy (Optimized for performance)**  
     - Runs change detection only when input properties change.

   ```typescript
   import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

   @Component({
     selector: 'app-child',
     template: `<p>{{ data }}</p>`,
     changeDetection: ChangeDetectionStrategy.OnPush
   })
   export class ChildComponent {
     @Input() data!: string;
   }
   ```

3. **Manually Triggering Change Detection**
   - **Using `ChangeDetectorRef`**
     ```typescript
     import { ChangeDetectorRef, Component } from '@angular/core';

     @Component({
       selector: 'app-example',
       template: `<p>{{ counter }}</p> <button (click)="increment()">Increment</button>`
     })
     export class ExampleComponent {
       counter = 0;

       constructor(private cd: ChangeDetectorRef) {}

       increment() {
         this.counter++;
         this.cd.detectChanges(); // Manually trigger change detection
       }
     }
     ```

   **Execution Flow When `increment()` is Called:**
   1. **User clicks the button** → `increment()` function is executed.
   2. `counter++` → The `counter` value increases by 1.
   3. `this.cd.detectChanges();` → Forces Angular to run change detection manually and update the view.
   4. The `<p>{{ counter }}</p>` element in the template updates with the new counter value.

### **When Does Angular Trigger Change Detection?**
- **Component data changes (property updates)**
- **Event listeners (click, input, etc.)**
- **Promises & Observables resolution**
- **Timers (setTimeout, setInterval)**
- **HTTP requests**

### **Optimizing Change Detection**
- **Use `OnPush` Strategy** for performance optimization.
- **Detach Change Detection** when not needed using `cdRef.detach()`.
- **Track Changes with `trackBy` in `ngFor`** to avoid unnecessary DOM updates.

Using these strategies helps in improving performance and optimizing rendering in Angular applications.

