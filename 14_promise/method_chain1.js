// .thenを複数個繋げて、非同期処理をつなぐことができる.
function getName() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Johndoe");
    }, 1000);
  });
}

// .thenは複数個続けて書くことができる.
// return を使って、次の.thenの引数に値を渡すことができる.
getName()
.then(name => {
  console.log(name);
  return 20;
})
.then(age => {
  console.log(age);
});
