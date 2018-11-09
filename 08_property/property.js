// プロパティとバリューが同じだと省略して書けます.
let firstname = "太郎";
let lastname = "山田";
let age = 20;

// let person = {
//   firstname: firstname,
//   lastname: lastname,
//   age: age
// };
// ↑を↓のように省略して書けるようになった.
let person = {
  firstname,
  lastname,
  age
};

console.log(person);
