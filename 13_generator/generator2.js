// generatorの簡略法

// yield*を使って、似たようなyieldをまとめる
function* myGenerator() {
  // yield 1;
  // yield 2;
  // yield 3;
  // 上の3つをyield*を使って、まとめて下のように書ける
  yield* [1, 2, 3];
}

let iter = myGenerator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());



// スプレッド演算子を使って、next()をまとめる
function* myGenerator2() {
  yield* [1, 2, 3];
  yield "Hello"
}

let iter2 = myGenerator2();
console.log([...iter2]);
