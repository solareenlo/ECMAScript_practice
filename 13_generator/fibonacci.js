// ジェネレーターを使ったフィボナッチ数列の作り方

function* fibonacci() {
  let n1 = 0;
  let n2 = 1;
  while(true) {
    let current = n1;
    n1 = n2;
    n2 = current + n1;
    yield current;
  }
}

let iter = fibonacci();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// trueを送るとフィボナッチ数列のスタートがリセットされる
function* fibonacci2() {
  let n1 = 0;
  let n2 = 1;
  while(true) {
    let current = n1;
    n1 = n2;
    n2 = current + n1;
    let reset = yield current;
    if(reset) {
      n1 = 0;
      n2 = 1;
    }
  }
}

let iter2 = fibonacci2();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next(true));
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
