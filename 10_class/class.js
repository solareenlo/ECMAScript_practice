//従来のクラスの宣言のやり方
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.jump = function() {
  console.log("ジャンプ！");
};

var person = new Person("太郎", 30);
console.log(person);
person.jump();



// ECMAScriptでのクラスの宣言のやり方
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  jump() {
    console.log("ジャンプ！");
  }
}

let person2 = new Person2("太郎", 30);
console.log(person2);
person2.jump();
