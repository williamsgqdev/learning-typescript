"use strict";
//BASIC TYPES
let id = 5;
let company = "Williams";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//TUPLE
let person = [1, "brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Williams"],
    [1, "Williams"],
    [1, "Williams"],
];
//Union
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "williams",
};
//Note type is mostly used with primitives and union e.g type Point = number ; let williamsPoint : Point = 10
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Daniel",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.postion = position;
    }
}
const employee1 = new Employee(2, "Daniel ", "Doctor");
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["me", "you", "brad"]);
