const filterEvenNumbers = (input: number[]) => {
  return input.filter((num) => num % 2 === 0);
};

const reverseString = (input: string) => {
  return input.split("").reverse().join("");
};

type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): StringOrNumber => {
  if (typeof input === "string") {
    return "String";
  } else return "Number";
};

type User = {
  id: number;
  name: string;
  age: number;
};
const getProperty = (obj: User, key: keyof User) => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (input: Book) => {
  return {
    ...input,
    isRead: true,
  };
};

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const getIntersection = (arr1: number[], arr2: number[]) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set1].filter(item => set2.has(item));
};

