// Number.isNaN()
// Number.isFinite()

var i;
i++;
console.log(i);
console.log(i !== NaN);
console.log(Number.isNaN(i));

var j = 1 / 0;
console.log(j);
console.log(j === Infinity || j === -Infinity);
console.log(Number.isFinite(j));

// infinity = 無限
// infinite = 無限の〜
// finite = 有限の〜
