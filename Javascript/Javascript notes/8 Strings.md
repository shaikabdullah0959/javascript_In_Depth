In JavaScript, strings are sequences of characters used to represent text.
Strings are immutable, meaning their values cannot be changed once created.

# JavaScript String Methods

1. length  
   - Returns the length of the string.  
   - Example: `"Hello".length` → `5`  

2. charAt(index)  
   - Returns the character at the specified index.  
   - Example: `"Hello".charAt(1)` → `"e"`  

3. charCodeAt(index)  
   - Returns the Unicode value of the character at the specified index.  
   - Example: `"ABC".charCodeAt(0)` → `65`  

4. concat(str1, str2, ...)  
   - Joins two or more strings.  
   - Example: `"Hello".concat(" ", "World")` → `"Hello World"`  

5. String.fromCharCode(num1, num2, ...)  
   - Converts Unicode values to a string.  
   - Example: `String.fromCharCode(72, 101, 108, 108, 111)` → `"Hello"`  

6. indexOf(substring)  
   - Finds the first occurrence of a substring.  
   - Example: `"Hello World".indexOf("o")` → `4`  

7. lastIndexOf(substring)  
   - Finds the last occurrence of a substring.  
   - Example: `"Hello World".lastIndexOf("o")` → `7`  

8. includes(substring)  
   - Checks if a substring exists in the string (returns `true`/`false`).  
   - Example: `"Hello World".includes("World")` → `true`  

9. search(regex or string)  
   - Searches for a substring (or pattern) and returns the index of the first match.  
   - Example: `"Hello World".search("World")` → `6`  

10. slice(start, end)  
    - Extracts a part of a string.  
    - Example: `"Hello World".slice(0, 5)` → `"Hello"`  

11. substring(start, end)  
    - Similar to `slice`, but does not accept negative indexes.  
    - Example: `"Hello".substring(1, 4)` → `"ell"`  

12. substr(start, length)  
    - Extracts a substring from a given start position and length.  
    - Example: `"Hello World".substr(6, 5)` → `"World"`  

13. replace(old, new)  
    - Replaces a substring.  
    - Example: `"Hello World".replace("World", "JS")` → `"Hello JS"`  

14. split(separator)  
    - Splits a string into an array based on a separator.  
    - Example: `"a,b,c".split(",")` → `["a", "b", "c"]`  

15. trim()  
    - Removes whitespace from both ends of a string.  
    - Example: `"  Hello  ".trim()` → `"Hello"`  

16. repeat(n)  
    - Repeats a string `n` times.  
    - Example: `"Hi".repeat(3)` → `"HiHiHi"`  

17. padStart(length, char)  
    - Pads the start of a string with `char` until it reaches `length`.  
    - Example: `"5".padStart(3, "0")` → `"005"`  

18. padEnd(length, char)  
    - Pads the end of a string with `char` until it reaches `length`.  
    - Example: `"5".padEnd(3, "0")` → `"500"`  

