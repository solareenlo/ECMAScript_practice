var config = {};

function setConfig({isOn, amount}) {
  config = {
    isOn, amount
  };
}

setConfig({
  isOn: false,
  amount: 10
});

console.log(config);
