// デフォルトの引数について
// 丸括弧の中で初期化できる

function buy(item = "milk", amount = 1) {
  item;
  amount;
  console.log(item, amount);
}
buy("book");

// 初期化はオブジェクトでも配列でも可能
function buy2(item = {name: "mild"}, amount = [1, 2, 3]) {
  item;
  amount;
  console.log(item, amount);
}
buy2();
