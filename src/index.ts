//BASIC TYPES
let id: number = 5;
let company: string = "Williams";
let isPublished: boolean = true;
let x: any = "Hello";
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//TUPLE

let person: [number, string, boolean] = [1, "brad", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Williams"],
  [1, "Williams"],
  [1, "Williams"],
];

//Union

let pid: string | number;

pid = "22";

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "williams",
};
//Note type is mostly used with primitives and union e.g type Point = number ; let williamsPoint : Point = 10

// Type Assertion

let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

//functions

function addNum(x: number, y: number): number {
  return x + y;
}

//Void
function log(message: string | number): void {
  console.log(message);
}

//Interface

interface UserInterface {
  //readonly can not be changed
  readonly id: number;
  name: string;
  //age is a conditional property
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Daniel",
};

//Using Interface in functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

//Classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const williams = new Person(1, "Agbunu Williams");

//SubClass
class Employee extends Person {
  postion: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.postion = position;
  }
}

const employee1 = new Employee(2, "Daniel ", "Doctor");

//Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["me", "you", "brad"]);
