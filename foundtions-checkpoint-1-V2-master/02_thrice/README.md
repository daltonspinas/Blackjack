### The Thrice Function

#### 7 Points

The "thrice" function accepts a function object as an argument.  The "thrice" function returns a function.  The function returned can only be invoked three times.  Note: The function returned *will also return a value.*

```
const helloWorld = thrice(function() { return "Hello World" });

const returnValue = `${helloWorld()} ${helloWorld()} ${helloWorld()} ${helloWorld()}`;

// returnValue:  "Hello World Hello World Hello World undefined";
```

Note: On the final invocation of helloWorld() there isn't a return value so the value undefined is concatenated on to the string.  **A closure should be used in your solution, placing
a property on the function will not receive full credit.**

