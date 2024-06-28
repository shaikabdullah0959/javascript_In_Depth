### **Directives in Angular**  

Directives in Angular are **special classes** that allow developers to **modify the structure, behavior, or appearance** of elements in the DOM. They help in making the application more **dynamic and reusable**.  

---

## **Types of Directives in Angular**  
Angular provides three types of directives:  

1. **Component Directives** (Directives with templates)  
2. **Structural Directives** (Modify the DOM structure)  
3. **Attribute Directives** (Modify the behavior or appearance of elements)  

---

## **1. Component Directives**  
- A component is technically a directive with an attached template.  
- It is created using `@Component()`.  

**Example:**  
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, Angular!</h1>`
})
export class HelloComponent {}
```
> Components are the most commonly used directives in Angular applications.  

---

## **2. Structural Directives**  
Structural directives are used to **modify the structure of the DOM** by adding, removing, or manipulating elements.  
These directives **start with an asterisk (`*`)** when used in templates.  

### **Common Structural Directives**  
- `*ngIf` → Conditionally adds or removes elements  
- `*ngFor` → Loops through an array and creates elements dynamically  
- `*ngSwitch` → Used for multiple conditional cases  

#### **Example of `*ngIf`**
```html
<p *ngIf="isVisible">This paragraph is visible.</p>
```
```typescript
export class AppComponent {
  isVisible = true;
}
```
> If `isVisible` is `true`, the paragraph is displayed; otherwise, it is removed from the DOM.  

#### **Example of `*ngFor`**
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```
```typescript
export class AppComponent {
  items = ['Apple', 'Banana', 'Orange'];
}
```
> Iterates over the `items` array and creates `<li>` elements dynamically.  

#### **Example of `*ngSwitch`**
```html
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red Color</p>
  <p *ngSwitchCase="'blue'">Blue Color</p>
  <p *ngSwitchDefault>Other Color</p>
</div>
```
```typescript
export class AppComponent {
  color = 'red';
}
```
> Displays the `<p>` tag corresponding to the `color` variable.  

---

## **3. Attribute Directives**  
Attribute directives are used to **change the appearance or behavior** of an element.  

### **Common Attribute Directives**
- `ngClass` → Adds or removes CSS classes  
- `ngStyle` → Dynamically changes inline styles  
- Custom Attribute Directives → Create your own behavior  

#### **Example of `ngClass`**
```html
<p [ngClass]="{'active': isActive}">This text is conditionally styled.</p>
```
```typescript
export class AppComponent {
  isActive = true;
}
```
> If `isActive` is `true`, the class `active` is applied to the `<p>` element.  

#### **Example of `ngStyle`**
```html
<p [ngStyle]="{'color': textColor}">This text has dynamic color.</p>
```
```typescript
export class AppComponent {
  textColor = 'blue';
}
```
> The paragraph text color is set to `'blue'`.  

---

## **Creating a Custom Directive**  
We can create our own attribute directives using the `@Directive()` decorator.  

### **Example: Custom Directive to Change Background Color**
```typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
```
**Usage in HTML:**
```html
<p appHighlight>Hover over this text to see the effect.</p>
```
> When the user hovers over the paragraph, the background color changes to yellow.  

---

## **Key Takeaways**  
✔ **Directives extend HTML functionality** in Angular.  
✔ **Structural directives** modify the DOM structure (`*ngIf`, `*ngFor`, `*ngSwitch`).  
✔ **Attribute directives** modify the appearance or behavior of elements (`ngClass`, `ngStyle`).  
✔ **Custom directives** allow developers to create reusable UI behaviors.  

---

