// タグ付きテンプレート(tagged template)リテラル

function output() {
  console.log(arguments);
}
output("a", "b");
output`"a", "b"`; // ←これがタグ付きテンプレートリテラル


// 例1
function output2(string, ...values) {
  console.log(string);
  console.log(values);
}
output2`"a", "b"`;

// 例2
let name = "太郎";
let age = 18;
output2`私の名前は${name}で、${age}歳です。`;

// 例3 valuesの要素1つずつを<b>で囲む
function output3(string, ...values) {
  let message = "";
  string.forEach((string, index) => {
    message += string;
    if(index < values.length) {
      message += `<b>${values[index]}<b>`;
    }
  });
  return message;
}
const message = output3`私の名前は${name}で、${age}歳です。`;
console.log(message);
