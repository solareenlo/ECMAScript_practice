// resolveの補足
// Promiseの中には処理を続けようと思えば、resolveの終わりにresolve()を必ず置くこと

let myPromise =
  (word, sec) => new Promise(resolve => {
    setTimeout(() => {
      console.log(word);
    }, sec);
    resolve(); // これがないと連続して.thenが働かない
  });

myPromise("hello", 1000)
.then(() => myPromise("world", 2000))
.then(() => myPromise(("!"), 3000));
