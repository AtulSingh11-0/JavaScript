// how to declare an array
const arr = [1, 2, 3, 4, 5]

// how to access a subscripted variable in an array
// console.log(arr[3]); // 4

// another way of creating an array using constructor
const arr2 = new Array(0, 1, 2, 3, 4)
// console.log(arr2);

arr.length = 10; // this add 5 extra empty element indices in the array
// and if we decrease the size of the array then it deletes the values
// console.log(arr); // [ 1, 2, 3, 4, 5, <5 empty items> ]
arr.length = 3
// console.log(arr); // [ 1, 2, 3 ]

/*
    Empty slots in sparse arrays behave inconsistently between array methods. Generally, the older methods will skip
    empty slots, while newer ones treat them as undefined
*/

// iterating over an array
for(i = 0; i < arr2.length; i++) {
    arr2[i] *= 2;
}
// console.log(arr2); // [ 0, 2, 4, 6, 8 ]

// shortening an array using if-else
if(arr2.length > 2) {
    arr2.length = 2;
}
// console.log(arr2);

// declaring an empty array
const emptyArray = [];
emptyArray.length = 5;
// console.log(emptyArray); // [ <5 empty items> ]

// if u dont want ur length to be dynamic then declare ur length property to be false
// this will prevent ur array from updating the length 
// eg. Object.defineProperty(numbers, "length", { writable: false });

const fruits = ["apple", "banana", "guava", "pineapple", "tomato"]

// console.log(fruits.at(1)); // banana
// console.log(fruits.at(-4)); // banana

// console.log(fruits.indexOf('guava')); // 2
// console.log(fruits.includes('apple')); // true

fruits.push('orange')
fruits.push('watermelon')
fruits.push('muskmelon')
fruits.push('berries')
// console.log(fruits);

fruits.pop()
fruits.pop()
// console.log(fruits);

/*
 *  there is also a .shift() method in the array but dont rely on it that much as it removes an item from the      beginning index resulting in a non-optimized operation
 */

const a = [1, 2, 3, 4, 5]
// console.log("A ", a);
// console.log(a.slice(1,3));
// console.log(a);

const b = [1, 2, 3, 4, 5]
// console.log("B ", a);
// console.log(b.splice(1,3));
// console.log(b);

/*
A  [ 1, 2, 3, 4, 5 ]
[ 2, 3 ]
[ 1, 2, 3, 4, 5 ]
B  [ 1, 2, 3, 4, 5 ]
[ 2, 3, 4 ]
[ 1, 5 ]

as u can clearly see the difference that how slice vs splice works
slice returns a shallow copy of a portion of an array into a new array Object
whereas splice changes the contents of the array by removing or replacing the existing elements or by adding them inplace
note = in both the methods negative indices as params, counts back from the end of the array
*/

const fruitNames = ['apple', 'mango', 'guava']
const vegetableNames = ['Potato', 'onion', 'pumpkin']

const merged = [...fruitNames, ...vegetableNames]
// console.log(merged);

const dummyArr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11], 12], 13, 14]
const flatEX = dummyArr.flat(Infinity)
// console.log(flatEX);

// console.log(Array.isArray('Lion')); // false
// console.log(Array.isArray(dummyArr)); // true
// console.log(Array.from('Atul')); // [ 'A', 't', 'u', 'l' ]
// console.log(Array.from({name:'Atul'})); // [] interesting question may also come in interviews

let x = 100;
let y = 200;
let z = 300;
// console.log(Array.of(x, y, z)); // [ 100, 200, 300 ]

