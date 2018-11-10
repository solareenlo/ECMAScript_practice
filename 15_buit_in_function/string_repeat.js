// String.repeat()
// 文字列を連続して出力する簡単な方法

// 従来のやり方
let string = Array(10).fill("*").join("");
console.log(string);

// ECMAScriptでのやり方
let string2 = "*".repeat(10);
console.log(string2);
