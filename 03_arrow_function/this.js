// アロー関数のthisは、親スコープのthisを引き継ぐ
// アロー関数の注意点
// 1. argumentsは使えない
// 2. コンストラクタには不向きである

let obj = {
  value: 0,
  increment: function() {
    setTimeout(() => {
      this.value++;
      console.log(this.value);
    }, 1000);
  }
};
obj.increment();

this.value = 0;
let obj2 = {
  value: 0,
  increment: () => {
    setTimeout(() => {
      this.value++;
      console.log(this.value);
    }, 1000);
  }
};
obj2.increment();
