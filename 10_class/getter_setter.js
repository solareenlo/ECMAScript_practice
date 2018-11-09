// ゲッターとセッター

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return "「" + this._name + "」";
  }
  set name(name) {
    this._name = name;
  }
}

let person = new Person("太郎", 20);
console.log(person);

let name = person.name;
console.log(name);

person.name = "二郎";
console.log(person._name);
