// Array.find()
// Array.findIndex()
let arr = [1, 20, 30, 10, 5];

// 10以上を全部取得
let result1 = arr.filter(number => {
  return number > 10;
});
// 10以上のうちのはじめの一つ目の値を取得
let result2 = arr.find(number => {
  return number > 10;
});
// 10以上のうちのはじめの一つ目のインデックスを取得
let result3 = arr.findIndex(number => {
  return number > 10;
});

console.log(result1);
console.log(result2);
console.log(result3);
