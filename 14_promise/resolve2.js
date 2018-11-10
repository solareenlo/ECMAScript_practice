function getName() {
  return new Promise(resolve => {
    resolve("太郎");
  });
}

getName().then(name => {
  console.log(name);
});

// 上記のようなシンプルな非同期処理は、以下のようにも表現できる
function getName2() {
  return Promise.resolve("太郎");
}

getName2().then(name => {
  console.log(name);
});
