What is Performance Optimization?

Performance optimization in Angular is like fine-tuning a car for better speed and efficiency. It involves various techniques to make your app faster and more efficient.

Why do we need it?

User Experience: It improves the user experience by making the app faster.
Resource Management: It efficiently manages resources, reducing load times and memory usage.
Key Techniques:

Lazy Loading: Load parts of the app only when needed.
AOT Compilation: Use Ahead-of-Time (AOT) compilation to pre-compile the app.
OnPush Change Detection: Optimize change detection by using the OnPush strategy.
Tree Shaking: Remove unused code during the build process.

ng build --prod --aot
## **Ahead-of-Time (AOT) Compilation in Angular**  

### **What is AOT Compilation?**  
Ahead-of-Time (AOT) Compilation is a process in Angular where the application’s TypeScript and HTML templates are compiled **before** the browser downloads and runs the app. This pre-compilation happens at **build time**, reducing the work done at runtime and improving performance.

---

### **Why Use AOT Compilation?**  

✅ **Faster Rendering** – Since templates are compiled at build time, the browser can render the app quickly.  
✅ **Smaller Bundle Size** – Removes unnecessary Angular compiler code from the final bundle.  
✅ **Better Security** – Detects and prevents security vulnerabilities like template injection.  
✅ **Early Error Detection** – Catches compilation errors during development rather than at runtime.  

---

### **How AOT Compilation Works?**  

1. **Angular Compiler (ngc)** compiles HTML templates and TypeScript components into JavaScript before the app is served.  
2. The compiled code is optimized and does not require the Angular compiler at runtime.  
3. The browser receives the pre-compiled, highly efficient JavaScript bundle.  

---

### **How to Enable AOT Compilation?**  

AOT is enabled by default in **production mode**:
```bash
ng build --prod
```
Or explicitly:  
```bash
ng build --aot
```

For development (optional, but helps catch errors early):  
```bash
ng serve --aot
```

---

### **JIT vs. AOT Compilation**  

| Feature | Just-In-Time (JIT) | Ahead-of-Time (AOT) |
|---------|----------------|----------------|
| Compilation Time | During runtime in the browser | Beforehand at build time |
| Performance | Slower, as compilation happens in the browser | Faster, since the browser gets pre-compiled code |
| Error Detection | Runtime errors | Compile-time errors |
| Security | Risk of template injection | Safer, templates are pre-compiled |

---

### **Example: JIT vs. AOT Compilation**

#### **JIT Compilation Example:**
```typescript
@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`
})
export class AppComponent {
  title = 'JIT Compilation Example';
}
```
##### **How JIT Works:**
- When the application runs in the browser, Angular compiles the above template **at runtime**.
- The Angular compiler (which is part of the app bundle) translates the template into JavaScript.
- This increases the load time, as the browser does extra work to compile templates before rendering.

#### **AOT Compilation Example:**
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'AOT Compilation Example';
}
```
##### **How AOT Works:**
- When the app is built (`ng build --aot`), Angular compiles the templates **before deployment**.
- The generated JavaScript does not contain the Angular compiler, making the bundle smaller.
- The browser gets a pre-compiled, optimized version of the application, leading to faster execution.

---

### **Difference Between Compile Time and Runtime**

| Feature | Compile Time | Runtime |
|---------|-------------|---------|
| When it Happens | Before execution, during build time | When the program is running |
| Purpose | Converts code into machine-readable format | Executes the compiled code |
| Errors | Detects syntax, type, and compilation errors | Detects logical, runtime, and unexpected errors |
| Example | AOT Compilation in Angular | JIT Compilation in Angular |
| Speed | Improves performance by pre-compiling code | Can be slower as it compiles at runtime |

---

### **Summary**  
- AOT compiles the app **before runtime**, making it **faster and more secure**.  
- It is **enabled by default** in production builds.  
- AOT **reduces bundle size** and improves performance.  
- It **catches errors early**, ensuring better stability.  
- **Compile Time** refers to the phase when the source code of a program (e.g., TypeScript in Angular) is converted into machine code or executable code before the program runs. 
- **Runtime** is when the program is actively executing.  

By using AOT, Angular applications become more efficient, secure, and optimized for production.


