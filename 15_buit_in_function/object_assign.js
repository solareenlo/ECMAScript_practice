// Object.assign()
// オブジェクトのコピーを簡単に行ってくれる

let obj1 = {};
let obj2 = {name: "太郎"};
let obj3 = {location: "東京", age: 30};
let obj4 = {name: "花子"};

// 従来のやり方
Object.keys(obj2).forEach(function(key) {
  obj1[key] = obj2[key];
});
console.log(obj1);

// ECMAScriptでのやり方
Object.assign(obj1, obj2, obj3, obj4);
console.log(obj1);

let obj5 = Object.assign({}, obj2, obj3);
console.log(obj5);
