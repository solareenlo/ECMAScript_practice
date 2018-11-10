// asyncとアロー関数

let myPromise =
  (word, sec) => new Promise(resolve => {
    setTimeout(() => {
      console.log(word);
    }, sec);
    resolve();
  });

let outputWords = async () => {
  await Promise.all([
    myPromise("four", 4000),
    myPromise("three", 3000),
    myPromise("one", 1000),
    myPromise("two", 2000)
  ]);
};

outputWords();
