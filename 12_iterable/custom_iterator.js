// 配列のイテレータ
let arr = [10, 20, 30];
for(let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());



// オブジェクトのイテレータは直接はできない
let letters = {"a": "あ"};
// let iter2 = letters[Symbol.iterator](); // ←これはできない



// なので、オブジェクトには独自のイテレータを作成する
// イテレータシンボルは自分で作れます
// でも、下記のままだとtrueとfalseが逆になっちゃう
let nums = {
  [Symbol.iterator]() {
    let data  = [1, 2, 3, 4];
    let num = 0;
    return {
      next() {
        return {
          value: data[num],
          done: num++ < 4
        }
      }
    }
  }
};

let iter3 = nums[Symbol.iterator]();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
