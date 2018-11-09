// computed property name
// プロパティを柔軟に定義できるようになった

let key = "lastname";
function getKey() {
  return "place";
}

let person = {
  firstname: "太郎",
  [key]: "山田", // []はエクスプレッションなので、その中でjavascriptが使える.
  ["birth" + getKey()]: "東京"
};

console.log(person);
