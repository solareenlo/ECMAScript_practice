// ` - バッククオート, バックティック

// 従来の書き方
let name = "太郎";
let age = 18;
let message = "私の名前は" + name + "で、" + age + "歳です。";
console.log(message);

// ECMAScriptでの書き方
let message1 = `私の名前は${name}で、${age}歳です。`;
console.log(message1);

// この${}のことをエクスプレッション(expression)と言います.



// 改行のやり方
let message2 = "私の名前は" + name + "で、\n" + age + "歳です。";
console.log(message2);
let message3 = `私の名前は${name}で、
${age}歳です。`;
console.log(message3);



// バッククオートの中では、打ったものがそのままで出てきます.
let message4 = `私の名前は\${name}   で、
  ${age}歳\nです。`;
console.log(message4);
