const nums = [1, 2, 3, 4];

function appendNum(users) {
  users.forEach(function(user) {
    return nums.push(user.num);
  });
}

appendNum([{num: 10}]);

console.log(nums);



var nums2 = [1, 2, 3, 4];

function appendNum2(users) {
  nums2 = users.map(function(user) {
    return nums2 = user.num;
  });
}

appendNum2([{num: 10}]);

console.log(nums2);
