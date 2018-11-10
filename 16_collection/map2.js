// mapとobjectとの違い
// 1. 長さはsizeプロパティで取得
// 2. objectのkeyは文字列かシンボルだが、mapのkeyはほぼ何でも良い
// 3. ループ処理により適している(for/of分を使う)
// 4. 余分なプロパティやメソッドを持たない

let obj1 = {"あ": "a", "い": "b", "う": "c", "え": "d"};
console.log(obj1);

// mapはいろんな型をkeyにできる
let map1 = new Map([
  [3, "a"],
  [NaN, "b"],
  [Infinity, "c"],
  [true, "d"],
  [{}, "e"],
  [undefined, "f"]
]);
console.log(map1);

// objectのループはfor...inが基本
for(let i in obj1) {
  console.log(i, obj1[i]);
}

// mapでkeyだけを取得
for(let i of map1.keys()) {
  console.log(i);
}
// mapでvalueだけを取得
for(let i of map1.values()) {
  console.log(i);
}
// mapでkeyもvalueも両方取得
for(let i of map1.entries()) {
  console.log(i);
}
// mapでkeyとvalueを別々に取得
for(let [key, value] of map1) {
  console.log(key + " = " + value);
}

// mapはforEachも使える
map1.forEach((value, key) => {
  console.log(value, key);
});
