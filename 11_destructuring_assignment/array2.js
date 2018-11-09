function getConfig() {
  return [
    true,
    10,
    1,
    3,
    5,
    7
  ]
}

const [isOn, amount, ...data] = getConfig();
console.log(isOn);
console.log(amount);
console.log(data);
console.log(...data);
