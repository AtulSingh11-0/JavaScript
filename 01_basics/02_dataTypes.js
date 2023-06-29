// "use strict" it is implicitly defined now a days, previously we needed to state this before writing any js code that we are writing it according to the newer standards of js

// alert() // we cannot use it in nodejs, it is meant for browser console window

// Primitive DataTypes :
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Number eg :
const score = 100
const anotherScore = 420.69

// Boolean eg : 
const isLoggedIn = false

// Null eg :
const outsideTemp = null

// Undefined eg :
let email;

// Symbol eg : 
const id1 = Symbol('id1')
const id2 = Symbol('id2')
// console.log(id1, id2);
// console.log(id1 === id2);

// BigInt eg : 
const bigNum = 87654323456765434n
// console.log(bigNum, typeof bigNum);


// Reference / Non-Primitive type : 
// 3 types : Object, Array, Functions

// Array eg :
const fruits = ["apple", "banana", "gauava", "mango"]

// Object eg : 
const userDetails = {
    firstName : "Atul",
    lastName : "Singh",
    age : "19"

}
// console.log(userDetails);

// Functions eg :
const myFun = function() {
    console.log("Haanji aur kya haal !!!!!!");
}
// console.log(myFun.call(this));

// type of every datatype
console.log(typeof score);
console.log(typeof anotherScore);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof email);
console.log(typeof id1);
console.log(typeof id2);
console.log(typeof bigNum);
console.log(typeof fruits);
console.log(typeof userDetails);
console.log(typeof myFun); // it is type Function Object