// レスト演算子（...仮引数名）

// 従来のやり方
function print() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}
print(1, "a", true, {}, [1, 2, 3]);

// ECMAScriptでのやり方
function print2(...arr) {
  console.log(arr);
}
print2(1, "a", true, {}, [1, 2, 3]);

// ECMAScriptでの部分的なやり方
function print3(ele1, ele2, ...arr) {
  ele1;
  ele2;
  console.log(ele1, ele2, arr);
}
print3(1, "a", true, {}, [1, 2, 3]);
