// value must be everything from A and from B

type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2; //must have both id and createdAT

const e: Entity = { id: "e1", createdAt: new Date() };

// homework -> create two types
type Person = { name: string; age: number,gender: "M" | "F" };
type Employee = { company: string; salary: number };

type PersonEmployee = Person & Employee;
const pe: PersonEmployee = {
  name: "John",
  age: 30,
  gender: "M",
  company: "Acme Inc.",
  salary: 50000,
};



type NumberHolderUnique = { a: number };
type StringHolderUnique = { a: string };

// type NumberStringMix = NumberHolderUnique & NumberStringMix
// const bad : NumberStringMix = {a: 123}

type Product = { id: string; title: string };
type Priced = { price: number };

type PricedProduct = Product & Priced;
const book:PricedProduct={
    id: "b1",
    title: "The Great Gatsby",
    price: 10.99
}
console.log(book.id, book.title, book.price)