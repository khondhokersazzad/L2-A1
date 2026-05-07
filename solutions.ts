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

console.log(checkType(42));



type User = {
  id : number,
  name : string,
  age: number,
}

const getProperty = (obj: User, key: keyof User) => {
  return obj[key];
}




interface Book {
  title : string,
  author : string,
  publishedYear : number,
}

const toggleReadStatus = (input : Book) =>{
 return {
  ...input,
  "isRead" : true,
 }
}



class Person{
  constructor(public name: string, public age: number,){}
      
}

class Student extends Person{
  constructor(public name: string, public age: number, public grade : string,){
    super(name , age)
    
  }
}