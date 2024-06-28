// All Primitive data types are stored in stack
    var x = 123;
    var y = x; // copy of x is assigned not the original one so any change in y doesn't affect x
        y = 56;  
    console.log(y); // 56 
// All non Primitive data types are stored in heap
   /* 
      e.g, 
         var x = { name: 'abc'};
         var y = x;            // y is pointing to x
             y.name = 'xyz';   // original object is modified in heap
         console.log(x.name) // xyz 
    */

//  https://medium.com/@iarsham/stack-and-heap-in-js-c09aeabf3967#:~:text=The%20stack%20is%20used%20for,memory%20can%20change%20at%20runtime.