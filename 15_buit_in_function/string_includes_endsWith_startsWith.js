// String.includes() その文字列は含まれているか判断
// String.endsWith() その文字列が最後にあるかどうか判断
// String.startsWith() その文字列が最初にあるかどうか判断

let message = "hello, world!";
let substring = "hello";
let answer1 = message.includes(substring);
let answer2 = message.endsWith(substring);
let answer3 = message.startsWith(substring);

console.log(answer1, answer2, answer3);
