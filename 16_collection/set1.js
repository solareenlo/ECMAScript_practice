// イテラブル、コレクション
// set, map

let arr1 = [1, 2, 3];
console.log(arr1);

let arr2 = new Array(4, 5, 6);
console.log(arr2);

let set1 = new Set([1, 2, 3]);
console.log(set1);

let set2 = new Set("アイウエオ");
console.log(set2);

let [a, b, c] = set2;
console.log(a, b, c);

console.log(set1.size);
