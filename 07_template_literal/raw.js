// raw
function output(string, ...values) {
  console.log(string[0]);
}
function output1(string, ...values) {
  console.log(string.raw[0]);
}

output`私の名前は太郎です。\n18歳です。`;
output1`私の名前は太郎です。\n18歳です。`;



// String.raw``
console.log(String.raw`あいう\nえお\nかきくけこ`);
