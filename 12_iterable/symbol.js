// シンボル

// シンボルはプリミティブな関数
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);

// シンボルは自分としかtrueにならない.
// 同じシンボルを持っていたとしてもfalseになる.
let symbolA = Symbol("symbol");
let symbolB = Symbol("symbol");
console.log(symbolA === symbolB);

// シンボルはオブジェクトのプロパティ名になる.
var obj = {
  [symbolA]: "hello world!"
};
console.log(obj[symbolA]);

// ですが,通常のプロパティとしてはアクセスできない.
console.log(Object.getOwnPropertyNames(obj));
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));

// ですが,getOwnPropertySymbolsで,アクセスできる.
console.log(Object.getOwnPropertySymbols(obj));
let firstSymbol = Object.getOwnPropertySymbols(obj)[0];
console.log(symbolA === firstSymbol);

// シンボルは一般的な開発にはあまり使いません.
// ECMAScriptを開発している人がよく使います.
