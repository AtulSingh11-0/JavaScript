// === -> does the equality check and also checks for the datatype i.e. returns true if the compared datatypes are equal

// normal comparisons
/*
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
console.log(2 === 1);
*/

// comparisons we should avoid but not that much and we should have an understanding off
/*
console.log("2" > 1);
console.log("2" < 1);
console.log("2" >= 1);
console.log("2" <= 1);
console.log("2" == 1);
console.log("2" != 1);
console.log("2" === 1);
*/

// comparisons we should avoid at all cost as it creates a lot of confusion even after having a deep understanding off
/*
console.log(null > 0);
console.log(null >= 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null != 0);
console.log(null == 0);
console.log(null === 0);

// we can use undefined in place of null too

*/
// here equality check (==) & comparisons (<, <=, >, >=) work differently
// Comparisons convert null to a number, treating it as 0. Thats why null >= 0 & nul <= 0 & null != 0 are 'true' and the rest are 'false'