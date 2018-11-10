// Number.isSafeInteger()
// IEEE754倍精度数かどうかを判断

console.log(Number.isSafeInteger());
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger("1"));
console.log(Number.isSafeInteger(0.1));
console.log(Number.isSafeInteger(10000000000000000000000000000000000));
console.log(Number.isSafeInteger(10));
