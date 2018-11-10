// map

let map1 = new Map([[1, "a"], [2, "b"], [3, "c"]]);
console.log(map1);

let obj1 = {"あ": "a", "い": "b", "う": "c"};
console.log(obj1);

// mapの中身にアクセスするには.get
console.log(map1.get(1));

// mapの中身を追加するには.set(key, value)
map1.set(4, "d");
console.log(map1);

// mapの長さを取得するには.size
console.log(map1.size);

// mapの中身を削除するには.delete(key)
map1.delete(4);
console.log(map1);

// mapの中身に探索したいものがあるかどうかを調べるには.has(key)
console.log(map1.has(4));

// mapの中身を全部削除したいときは.clear()
map1.clear();
console.log(map1);
