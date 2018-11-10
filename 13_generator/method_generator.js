// function*以外でgeneratorを作るには,methodに*を付ければ良い

let obj = {
  *myGenerator() {
    yield 1;
  }
};

let iter = obj.myGenerator();
console.log(iter.next());
console.log(iter.next());
