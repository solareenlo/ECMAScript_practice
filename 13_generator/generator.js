// ジェネレータ
// 1. function*を使って宣言する
// 2. 中でyieldを使う
// yield = 産出する、生み出す

// 簡単なジェネレータ
function* myGenerator() {
  yield 1;
}

let iter = myGenerator();
console.log(iter.next());
console.log(iter.next());



// もうちょっと複雑なことをします.
function* myGenerator2() {
  console.log("a");
  yield 1;
  console.log("b");
  yield 2;
  console.log("c");
  yield 3;
}

let iter2 = myGenerator2();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
// つまり,ジェネレータを使ってより複雑なイテレータを作れるということ
