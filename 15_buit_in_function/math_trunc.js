// Math.trunc() - truncate(切り捨てるという意味)

function trunc(x) {
  return (x < 0 ? Math.ceil(x) : Math.floor(x));
}

console.log(trunc(-42.195));
console.log(trunc(3.141592));

console.log(Math.trunc(-42.195));
console.log(Math.trunc(3.141592));
