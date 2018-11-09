const nums = [1, 2, 3, 4];

function appendNum(users) {
  users.forEach(function(user) {
    return nums.push(user.num);
  });
}

appendNum([{num: 10}]);

console.log(nums);
