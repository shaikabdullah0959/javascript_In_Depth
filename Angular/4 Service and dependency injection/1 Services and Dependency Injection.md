### **Dependency Injection (DI) in Angular**
Dependency Injection (DI) is a **design pattern** in Angular used to **manage dependencies efficiently**. It allows us to inject services or dependencies into components, directives, or other services **without manually creating instances**.

---

## **Why Use Dependency Injection?**
1. **Reusability** – Services can be reused across multiple components.
2. **Maintainability** – Easy to manage and modify dependencies in a centralized way.
3. **Testability** – Easier to mock dependencies in unit testing.
4. **Loose Coupling** – Components depend on abstractions rather than concrete implementations.

---

## **How Dependency Injection Works in Angular?**
### **1. Creating a Service**
A service is a class that contains reusable logic and is **decorated with** `@Injectable()`.  

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Registers this service at the root level
})
export class LoggerService {
  log(message: string) {
    console.log('Log:', message);
  }
}
```
Here, the `@Injectable({ providedIn: 'root' })` makes Angular **provide the service automatically** at the root level.

---

### **2. Injecting the Service into a Component**
Once a service is created, it can be injected into a component using the **constructor**.

```typescript
import { Component } from '@angular/core';
import { LoggerService } from './logger.service'; // Import service

@Component({
  selector: 'app-root',
  template: `<button (click)="logMessage()">Log Message</button>`,
})
export class AppComponent {
  constructor(private logger: LoggerService) {} // Injecting service

  logMessage() {
    this.logger.log('Hello from AppComponent!');
  }
}
```

---

### **3. Providing a Service Manually (Optional)**
Instead of using `providedIn: 'root'`, you can manually provide the service at a module or component level.

#### **At Module Level**
```typescript
import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';

@NgModule({
  providers: [LoggerService], // Manually providing the service
})
export class AppModule {}
```

#### **At Component Level**
```typescript
@Component({
  selector: 'app-child',
  providers: [LoggerService], // Creates a new instance of LoggerService
})
export class ChildComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Hello from ChildComponent!');
  }
}
```
> **Note**: If a service is provided at the **component level**, a **new instance** is created **only for that component and its children**.

---

### **4. Injecting Services into Other Services**
DI is not limited to components. One service can inject another service.

```typescript
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private logger: LoggerService) {}

  getUser() {
    this.logger.log('Fetching user data...');
    return { name: 'John Doe', age: 30 };
  }
}
```
---

### **6. Using Injection Tokens for Configurations**
Sometimes, we need to inject **non-class dependencies** like **strings, numbers, or objects**. This can be done using `InjectionToken`.

```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
```

Register it in the providers:
```typescript
@NgModule({
  providers: [{ provide: API_URL, useValue: 'https://api.example.com' }],
})
export class AppModule {}
```

Inject it into a service:
```typescript
import { Inject, Injectable } from '@angular/core';
import { API_URL } from './api.token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject(API_URL) private apiUrl: string) {
    console.log('API URL:', this.apiUrl);
  }
}
```

---

### **Summary**
| **Scenario**                | **Effect** |
|-----------------------------|-----------|
| **`providedIn: 'root'`**    | A single instance is shared across the entire application. |
| **Service provided inside a module** | Each module gets a separate instance of the service. |
| **Service provided inside a component** | Each component instance gets a separate instance. |


---

## **Key Takeaways**
✔ **Dependency Injection** makes Angular applications modular, testable, and maintainable.  
✔ Services are **provided at different levels** (`root`, `module`, `component`).  
✔ **Hierarchical DI** ensures proper instance management.  
✔ **Injection tokens** help inject non-class dependencies.  
✔ **Component-level providers create isolated service instances.**  

---

This document provides a complete understanding of Dependency Injection in Angular, covering both basic and advanced concepts.

