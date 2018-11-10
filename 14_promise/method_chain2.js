// 二つの非同期処理をreturnとかを使って連結
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

// getName()
// .then(name => {
//   console.log(name);
//   return getAge();
// })
// .then(age => {
//   console.log(age);
// });
// 上も下も同じこと
getName()
.then(name => {
  console.log(name);
})
.then(getAge)
.then(age => {
  console.log(age);
});
