// あらゆるエラーメソッドをcatch methodで扱えます.

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("エラーが発生しました！");
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

getName()
.then(name => {
  console.log(name);
})
.catch(err => {
  console.log(err);
  return "catch";
})
.then(value => {
  console.log(value);
  console.log("Finally");
})
.then(getAge)
.then(age => {
  console.log(age);
});
