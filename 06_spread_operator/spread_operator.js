// スプレッド演算子（...配列名）

// concatを使って配列を合体させる従来のやり方
var arr = ["Hello, ", "world!"];
arr = ["<br>"].concat(arr).concat(["<br>"]);
console.log(arr.join(""));

// スプレッド演算子を使って配列を合体させるECMAScriptでのやり方
var arr2 = ["Hello, ", "world!"];
arr2 = ["<br>", ...arr2, "<br>"];
console.log(arr2.join(""));



// 文字列を配列にする
const message = "Hello, world!";
const chars = [...message];
console.log(chars);



// スプレッド演算子を使って、配列を引数にする
function add(a, b) {
  return a + b;
}
var arr = [1, 3];
console.log(add(...arr));



// pushとスプレッド演算子を使って、二つの配列を合体
const arr1 = [1, 2, 3];
const arr3 = [4, 5, 6];
arr1.push(...arr3);
console.log(arr1);



// unshiftとスプレッド演算子を使って、二つの配列を合体
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
arr4.unshift(...arr5);
console.log(arr4);



// スプレッド演算子を使って、配列のコピー
let arr6 = [1, 2, 3];
let arr7 = [...arr6];
console.log(arr7);



// スプレッド演算子を使って、色々くっつける
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];
const arr10 = ["a", ...arr9, true, {}, ...arr8];
console.log(arr10);



// スプレッド演算子を使って、配列を分解する
let [a, b, ...arr11] = [1, 2, 3, 4, 5];
console.log(a, b, arr11);
