let _isOn = false;
let _amount = 10;

function setConfig([isOn, amount]) {
  _isOn = isOn;
  _amount = amount;
}

setConfig([
  true,
  20
]);

console.log(_isOn, _amount);
