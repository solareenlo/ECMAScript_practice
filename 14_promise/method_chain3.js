// 複数の.thenを一つにまとめる
function getName() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Johndoe");
    }, 1000);
  });
}

function getAge() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
}

Promise.all([
  getName(),
  getAge()
])
.then(([name, age]) => {
  console.log(name);
  console.log(age);
});
