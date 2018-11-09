// 分割代入

var numbers = [1, 2, 3, 4];
let [a, b, c, d] = numbers;
console.log(a, b, c, d);

[c, d] = [a, b];
console.log(a, b, c, d);

let [, , e, f] = numbers;
console.log(e, f);

let [, g, h] = numbers;
console.log(g, h);
