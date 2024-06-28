### **Angular Decorators with Examples**

Angular provides **decorators** to define metadata and enhance various elements like components, directives, pipes, and services. These decorators are categorized into **Class Decorators** and **Property Decorators**.

## **Class Decorators**
Class decorators are used to define Angular elements like modules, components, directives, and pipes.

- **@NgModule**: Defines an Angular module.
- **@Component**: Defines an Angular component.
- **@Directive**: Defines an Angular directive.
- **@Pipe**: Defines an Angular pipe.
- **@Injectable**: Defines a service that can be injected into other components or services.

---

## **Property Decorators**
Property decorators allow interaction between components and directives by binding properties dynamically.

- **@Input**: Binds data from a parent component to a child component.
- **@Output**: Binds data from a child component to a parent component using events.
- **@ContentChild & @ContentChildren**: Queries and retrieves references to projected content inside a component.
- **@ViewChild & @ViewChildren**: Queries and retrieves references to DOM elements or child components.
- **@HostBinding**: Binds a property to the host element dynamically.

---

## **Class Decorators**
Class decorators are used to define Angular elements like modules, components, directives, and pipes.

### **1. @NgModule** - Defines an Angular module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### **2. @Component** - Defines an Angular component.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>Hello Angular</h1>'
})
export class ExampleComponent {}
```

### **3. @Directive** - Defines a directive.

```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
```

### **4. @Pipe** - Defines a pipe.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe'
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
```

### **5. @Injectable** - Defines a service that can be injected into components or other services.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return 'Injected Data';
  }
}
```

---

## **Property Decorators**
Property decorators allow interaction between components and directives by binding properties dynamically.

### **6. @Input** - Binds data from a parent component to a child component.

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>Child: {{ data }}</p>'
})
export class ChildComponent {
  @Input() data!: string;
}
```

```html
<app-child [data]="'Hello from Parent'"></app-child>
```

### **7. @Output** - Sends data from a child component to a parent component using events.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<button (click)="sendData()">Click me</button>'
})
export class ChildComponent {
  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit('Message from Child');
  }
}
```

```html
<app-child (notify)="receiveData($event)"></app-child>
```

### **8. @ViewChild** - Accesses a child component or DOM element inside the parent component.

```typescript
parent.component.ts:
    @Component({
    selector: 'app-parent',
    template: `
        <app-child></app-child>
        <button (click)="changeChildProperty()">Change Child Property</button>
        <input #myInput type="text" />
    `
    })
export class ParentComponent implements AfterViewInit {
        @ViewChild(ChildComponent) childComponent!: ChildComponent;
        @ViewChild('myInput') myInput!: ElementRef;

        ngAfterViewInit() {
            console.log(this.childComponent);
            console.log(this.myInput.nativeElement.value); //Access DOM Elements using template reference variable.
        }

        changeChildProperty() {
            this.childComponent.childProperty = 'New Value';
        }
    }

child.component.ts:
    @Component({
    selector: 'app-child',
    template: `
        <p>Child Component: {{ childProperty }}</p>
    `
    })
    export class ChildComponent {
        childProperty: string = 'Initial Value';
    }

2. Static Option: By default, @ViewChild queries are resolved after the view initialization
 (i.e., after ngAfterViewInit). If you need the reference before that, set the static option to true.
 @ViewChild('myInput', { static: true }) myInput!: ElementRef;

```

### **9. @ViewChildren** - Accesses multiple child components or DOM elements inside the parent component.

```typescript

parent.component.ts
    @Component({
    selector: 'app-parent',
    template: `
        <app-child></app-child>
        <app-child></app-child>
        <app-child></app-child>
        <button (click)="callChildMethods()">Call Child Methods</button>

        //template reference variable
        <div #box class="box">Box 1</div>
        <div #box class="box">Box 2</div>
        <div #box class="box">Box 3</div>
        <button (click)="highlightBoxes()">Highlight Boxes</button>
    `
    })
    export class ParentComponent implements AfterViewInit {
        @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;
        @ViewChildren('box') boxes!: QueryList<ElementRef>;

        ngAfterViewInit() {
            // Accessing the child components after view initialization
            console.log(this.children);
        }

        callChildMethods() {
            // Loop through each child component and call its method
            this.children.forEach((child) => child.logMessage());
        }

        highlightBoxes() {
            this.boxes.forEach((box) => {
            box.nativeElement.style.backgroundColor = 'yellow';
            });
        }
    }
child.Component.ts

    @Component({
    selector: 'app-child',
    template: `<p>Child component</p>`
    })
    export class ChildComponent {
        logMessage() {
            console.log('Child component method called!');
        }
    }

* @ViewChildren(AlertComponent, { read: ElementRef }) alerts: QueryList<ElementRef>
  @ViewChildren(AlertComponent, { read: ViewContainerRef }) alerts: QueryList<ViewContainerRef>
  @ViewChildren(ChildComponent) children!: QueryList<ChildComponent>;  //component reference
  
  In Angular, when using @ViewChild (or @ViewChildren), the read option allows you to specify what type of reference you want to
   retrieve from the queried child elements.
   
  By default, Angular will return the **instance of the component or directive** that matches the query.
   However, with the read option, you can choose to retrieve a different type of reference, **such as an ElementRef (for access to the DOM element)
   or a ViewContainerRef (for managing dynamic views).**

  read: ElementRef: Used to get a reference to the underlying DOM element associated with a component.
  read: ViewContainerRef: Used to get a reference to the ViewContainerRef, which can be used to add, remove, or manipulate views dynamically or create components dynamically
  The read option allows you to query for a different reference than the default (component instance), which can be useful for various operations like DOM manipulation or dynamic component creation.
```

### **10. @ContentChild** - Queries a single projected element inside `<ng-content>`.

```typescript
import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<ng-content></ng-content>'
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('projectedContent') content!: ElementRef;

  ngAfterContentInit() {
    console.log(this.content.nativeElement.textContent);
  }
}
```

```html
<app-child>
  <div #projectedContent>Hello ContentChild!</div>
</app-child>
```

### **11. @ContentChildren** - Queries multiple projected elements inside `<ng-content>`.

```typescript
 Parent component template:
    <child-component>
        <div class="projected-content">Item 1</div>
        <div class="projected-content">Item 2</div>
    </child-component>

Child component:
    import { Component, ContentChildren, QueryList, ElementRef } from '@angular/core';

    @Component({
    selector: 'child-component',
    template: '<ng-content></ng-content>',
    })
    export class ChildComponent {
        @ContentChildren('projectedContent') contents!: QueryList<ElementRef>;

        ngAfterContentInit() {
            this.contents.forEach((content) => {
            console.log(content.nativeElement.textContent); 
            });
            // Output: Item 1
            // Output: Item 2
        }
    }
```

---

## **Summary**
✔ **Class Decorators** define Angular elements like modules, components, directives, and services.
✔ **Property Decorators** help in querying and interacting with elements.
✔ **@ViewChild** is used for accessing a single child component or DOM element.
✔ **@ViewChildren** allows accessing multiple child elements dynamically.
✔ **@ContentChild** and **@ContentChildren** are used to query projected content.
✔ **The `read` option in @ViewChild/@ViewChildren** allows retrieving different references for DOM manipulation or dynamic component creation.
✔ Understanding these decorators helps in **efficient component communication and DOM interactions**.

