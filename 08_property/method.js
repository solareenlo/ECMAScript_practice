// オブジェクトのメソッドの書き方

function getName() {
  return "getOlder3";
}

let person = {
  firstname: "太郎",
  age: 20,
  getOlder: function() {
    this.age++;
  },
  getOlder2() { // functionを省略可
    this.age++;
  },
  [getName()]() { // メソッドのプロパティをエクスプレッションで決めれる
    this.age++;
  }
};
person.getOlder();
person.getOlder2();
person.getOlder3();
console.log(person);
