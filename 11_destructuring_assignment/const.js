// 配列とオブジェクトにおけるデフォルトの方法と振る舞い

const arr = [1, 2];
let [a, b=100] = arr;
console.log(a, b);



const obj = {
  isOn: true,
  amount: 2
};
var {isOn: serverOn, amount=100} = obj;
console.log(serverOn, amount);
