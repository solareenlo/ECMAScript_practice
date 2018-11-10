// 複数のawaitをPromise.allでまとめる

function getName() {
  return Promise.resolve("太郎");
}
function getAge() {
  return Promise.resolve(20);
}
async function main() {
  let [name, age] = await Promise.all([getName(), getAge()]);
  console.log(name);
  console.log(age);
}
main();
