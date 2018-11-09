class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  static setName(person, name) {
    person.name = name;
  }
}

// クラスの継承
class Employee extends Person {
  constructor(name, age, years) {
    super(name, age);
    this.years = years;
  }
  getName() {
    return super.getName() + "従業員";
  }
}

let employee = new Employee("花子", 20, 14);
console.log(employee);
let name2 = employee.getName();
console.log(name2);

Person.setName(employee, "二郎");
console.log(employee);
