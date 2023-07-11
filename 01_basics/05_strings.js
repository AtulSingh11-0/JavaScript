const name = "Atul"
const projectsDone = 0

// console.log(`Hi, my name is ${name} and I have completed ${projectsDone} projects`);
// this is the most readable way of printing something using js

const id = new String('coc_atul')
// console.log(id);

// console.log(id.length);
// console.log(id.charAt(3));
// console.log(id[3]);

const fname = 'john'
const lname = 'doe'
// console.log(fname.concat('-',lname));

// console.log(fname.endsWith('n'))
// console.log(fname.endsWith('h',4))

const sent = 'The quick brown fox jumps over the lazy dog'
const word = "Brown"
// console.log(sent.includes('lazy')); // true
// console.log(sent.includes(word)); // false, since its case sensitive
// console.log(sent.includes(word.toLowerCase())); // true

// console.log(
//     'Hello World'.indexOf('o'), // 4
//     'Hello World'.indexOf('', 1), // 1
//     'Hello World'.indexOf('', 14), // 11 since give position 14 is greater than the length of the string
// );
// console.log('Hello World'.indexOf('o', 6)); // 7 i.e. the lastIndexOf o

// lastIndexOf is the same as indexOf but it prints the last occuring index position of the given param


// console.log(
//     'a'.localeCompare('c'),
//     'zebra'.localeCompare('Horse'),
//     'atul'.localeCompare('atul')
// );

// console.log(
//     'Java is the best'.padEnd(25,'-'),
//     'Java is the best'.padEnd(25,'.'),
//     'Java is the best '.padEnd(25,'WoW')
// );

// padStart is the same as padEnd its just that it pads from the front and is really helpful in masking cc numbers, phone no.s, etc.

// console.log(
//     'abc'.repeat('0'),// ''
//     'abc'.repeat('1'),// abc
//     'abc'.repeat('3')// abcabcabc
// );

// console.log(
//     'Python is the best programming language'.replace('Python','Java')
// );
// // replaceAll is the same as replace() it just replaces every encounter of the word that you want to change

const str = "It's a nice morning today"
// console.log(
//     str.slice(-1), // y
//     str.slice(0, 12), // It's a nice (0 to 12-1)
//     str.slice(-13, -1) // morning toda
// );

const sent2 = 'The quick brown fox jumps over the lazy dog.';
// const words = sent2.split(' ')
// console.log(words);
// console.log(
    //     words[2],
    //     words[8]
// );
// const words2 = sent2.split(' ', 4)
// console.log(words2);

// console.log(
//     'Friday night party'.startsWith('Friday'), // true
//     'Friday night party'.startsWith('Friday', 5), // false
//     'Friday night party'.startsWith('night', 7) // true
// );

// console.log(
//     'Mozilla'.substring(3), //illa
//     'Mozilla'.substring(3, 9), //illa
//     'Mozilla'.substring(9, 5), //la
//     'Mozilla'.substring(0, 1), //M
//     'Mozilla'.substring(-5, -2), //""
//     'Mozilla'.substring(-5, 2), // Mo
// );

// console.log(
//     'giga'.toLowerCase(),
//     'GIGA'.toLowerCase()
// );