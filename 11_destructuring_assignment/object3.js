// 分割代入を使うときに、任意の変数名を使う

function getConfig() {
  return {
    isOn: true,
    amount: 10,
    servers: {
      a: "abcd",
      b: "efgh"
    }
  }
}

let {
  isOn: onOffInfo,
  amount: dataAmount,
  servers: {
    a: ServerA
  }
} = getConfig();

console.log(onOffInfo, dataAmount, ServerA);
