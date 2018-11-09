// オブジェクトの分割代入は、代入する先の変数名はプロパティ名と同じにしないといけない
// その代わりに、順番を飛ばして代入できる

function getConfig() {
  return {
    isOn: true,
    amount: 10,
    hello: "Hello, world!",
    shouldDelete: true
  }
}

var {hello, shouldDelete} = getConfig();
console.log(hello, shouldDelete);

var {isOn, amount} = getConfig();
console.log(isOn, amount);
