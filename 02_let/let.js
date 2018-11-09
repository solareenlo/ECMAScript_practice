// 同じスコープの中で同じ変数名を再定義できなくするのがlet
// ブロックスコープが適用されるのがlet

// 関数スコープの例
if(true) {
  var x = 1;
}
console.log(x); // 1 と出る.

if(true) {
  let y = 1;
}
console.log(y); // ここで y is not defined になる.

// ブロックスコープの例
{
  let x = 1;
  console.log(x); // 1 と出る.
  {
    let x = 2;
    console.log(x); // 2 と出る.
  }
  console.log(x); // 1 と出る.
}
