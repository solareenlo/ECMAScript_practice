// イテラブル、コレクション
// set, map

// setでは重複している要素は格納されない
let set1 = new Set([1, 2, 3, 3]);
console.log(set1);

let set2 = new Set("アイウエオアイウ");
console.log(set2);

// setのkeyはiteratorです
console.log(set1.keys());

// setのkeyも分割代入できます
let [a, b, c] = set1.keys();
console.log(a, b, c);

// setではvalueもiteratorです
console.log(set1.values());

// setのvalueも分割代入できます
let [d, e, f] = set1.values();
console.log(d, e, f);
// ですが、set1.keysもset1.valuesもiteratorです

// keyとvalueに一度にアクセスするには
let [g, h, i] = set2.entries();
console.log(g, h, i);

// setの中身にアクセスするには
for(let i of set1) {
  console.log(i);
}
set1.forEach(value => {
  console.log(value);
})

// setの中身を操作するには
set1.add(10);
console.log(set1);
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1);
console.log(set2.has("ア"));
