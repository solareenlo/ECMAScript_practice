// asyncとawaitによる非同期関数
// async = asynchronous(非同期)
// await = 期待しながら待つ
// asyncとawaitを使うとPromiseをより簡潔に書ける

// 例1
let myPromise = new Promise(resolve => {
  resolve("太郎");
});
async function main() { // functionの前にasyncを
  let name = await myPromise; // Promiseの前にawaitがある関数を非同期関数という
  console.log(name);
}
main();



// 例2
function getName() {
  return Promise.resolve("太郎");
}
function getAge() {
  return Promise.resolve(20);
}
async function main2() {
  let name = await getName();
  let age = await getAge();
  console.log(name);
  console.log(age);
}
main2();
