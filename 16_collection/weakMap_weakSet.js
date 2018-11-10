// WeakMap, WeakSet
// WeakMap = objectをkeyにもつ
// どこがweakかというと参照がweak

let weakMap = new WeakMap();
let obj1 = {"a": 1, "b": 2};
weakMap.set(obj1, 1);
console.log(weakMap.get(obj1));
console.log(weakMap.has(obj1));
weakMap.delete(obj1);
console.log(weakMap);



// WeakMapの弱い参照について
let map = new Map();
let weakMap2 = new WeakMap();
// garbage collection
(function() {
  let a = {x: 1};
  let b = {y: 2};
  map.set(a, 100);
  weakMap2.set(b, 200);
}());
console.log(map);
console.log(weakMap2);
