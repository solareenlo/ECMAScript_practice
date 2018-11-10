// 同期処理で出力
var func_one = function() {
  console.log("The first ...");
};

var func_two = function() {
  console.log("The second ...");
};

var func_three = function() {
  console.log("... and the third!");
};

func_one();
func_two();
func_three();



// 非同期処理で出力
var func_one2 = function(callback) {
  console.log("The first ...");
  if(callback) {
    callback();
  }
};

var func_two2 = function(callback) {
  console.log("The second ...");
  if(callback) {
    callback();
  }
};

var func_three2 = function(callback) {
  console.log("... and the third!");
  if(callback) {
    callback();
  }
};

func_one2(function() {
  func_two2(function() {
    func_three2();
  });
});
// コールバック関数の入れ子にすると大変です.
