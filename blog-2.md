## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

Generic function is a function that works with multiple data types while it maintains strict type safety.

Generic function basically uses a type parameter by which it can take in multiple types which gives a clean code environment. Instead of multiple function/types we can use only one function/types for multiple works.

```typescript
//Generic Function that create a Array
const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const numString = createArrayWithGeneric(25);
```

In the above example we have used generic function to create array function , we have passed multiple type of data types including string, number. We managed to create one function which works for multiple data types. Thus it works for better reusability of code and can be better understanable.
