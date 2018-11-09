class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  jump() {
    console.log("ジャンプ！");
  }
}

let person = new Person("太郎", 30);
console.log(person);
person.jump();

// クラスの継承
class Employee extends Person {
  constructor(name, age, years) {
    super(name, age);
    this.years = years;
  }
  jump() {
    console.log("大ジャンプ！");
  }
  quit() {
    console.log("やめます。");
    this.years = 0;
  }
}

let employee = new Employee("花子", 20, 14);
console.log(employee);
employee.jump();
employee.quit();
console.log(employee);
