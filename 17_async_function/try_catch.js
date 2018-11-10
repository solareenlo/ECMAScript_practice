// エラー処理をrejectで、try and catchで処理

function getName() {
  return Promise.reject("エラー発生");
}
function getAge() {
  return Promise.resolve(20);
}
async function main2() {
  try {
    let name = await getName();
    let age = await getAge();
    console.log(name);
    console.log(age);
  } catch(err) {
    console.log(err);
  }
}
main2();
