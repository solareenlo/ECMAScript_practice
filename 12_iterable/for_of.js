// for/ofループ
// イテレータがあるものにだけfor/ofループは使えます

let arr = [10, 20, 30];

// 値にだけアクセス
for(n of arr) {
  console.log(n);
}

// キーにだけアクセス
for(n of arr.keys()) {
  console.log(n);
}

// 値とキー両方にアクセス
for(n of arr.entries()) {
  console.log(n);
}
