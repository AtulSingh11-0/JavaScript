// creating a dynnamic value
const num = 400

// explicitly defining a value to be Number
const Num = new Number(192)

console.log(
    num, Num
);

console.log(
    Num.toFixed(5), // 192.00000
    (1000000).toLocaleString('en-IN'), // 10,00,000
);
