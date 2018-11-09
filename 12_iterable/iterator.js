// - イテラブル = イテレータを持つオブジェクト(ループ処理できるオブジェクト)
// - イテレータは、[Symbol.iterator]()で取得できる
// - イテレータはnext()を持つ
// - next()の戻り値は、.valueと.doneを持つ

let message = "Hello";
let iterator = message[Symbol.iterator]();
console.log(iterator);
let a = iterator.next();
console.log(a);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
