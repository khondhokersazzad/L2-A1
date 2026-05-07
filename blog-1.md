1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.


## Why is `any` labeled a "Type Safety Hole"

We basically use Typescript for checking types , so that before going to the production we can find issue right away in the editor.

But with using `any` type in the code we are basically telling the browser not to check anything and just run the code at whatever is given. So it is like a hole in the wall of type safety. So, we must avoid using `any` in the types.

```typescript
function add(a: any, b: any) {
  return a + b;
}

add(10, "hello");
```
Output
```typescript
"10hello"
```
## Why is `unknown` the safer choice for handling unpredictable data?

`unknown` type is used where we don't know about what data we will receive. That's why we put unknown data type there. 

`unknown` forces to validate the type before doing any operation so that we don't face issue of complete server crash because of error.

```typescript

let value: unknown = "Sazzad";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

```


## Explain the concept of type narrowing

Type narrowing means decreasing types of unknown variable to more specific type.

We use typeof to narrow down data types, it gives safety to unknown which can cause unneccessary server crash.

```typescript
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```


