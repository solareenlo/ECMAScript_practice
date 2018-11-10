// Promiseは非同期処理を行うもの
// 1. Promiseをnewする中で全ての処理を行う
// 2. 処理の終わりに、結果を第一引数のresolve()に渡す
// 3. Promiseオブジェクトのthenメソッドの第一引数で、結果を受け取る

// Promiseを使わずに非同期処理を書くと
function getName() {
  setTimeout(() => {
    console.log("Johndoe");
  }, 1000)
}
getName();

// 上記のコードをPromiseを使って書き直すと
function getName2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Johndoe2");
    }, 1000);
  });
}

getName2().then(name => {
  console.log(name);
});
