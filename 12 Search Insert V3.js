let searchInsert = function (nums, target) {
  let arr = new Set(nums);
  return arr.has(target)
    ? [...arr].indexOf(target)
    : [...arr.add(target)].sort((a, b) => a - b).indexOf(target);
};

nums = [1, 3, 5, 6];
target = 7;
console.log(searchInsert(nums, target));
