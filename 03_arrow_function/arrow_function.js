// アロー関数
const array = [1, 2, 3, 4];
console.log(array);

const byTwo = array.map(function(number) {
  return number * 2;
});
console.log(byTwo);

const byTwo2 = array.map(number => number * 2);
console.log(byTwo2);

// 1. アロー関数はコールバックまたは無名関数の拡張であり、functionの記述に置き換わる.
// 2. アロー関数の引数が1つならば丸括弧を省略可能
// 3. 引数が複数あるか1つもない場合、丸括弧は必須
// 4. 中身が一部だけならば、処理内容の波括弧とreturnを省略可能
// 5. 4のやり方でオブジェクトを戻り値にする時は、丸括弧で囲む必要あり
