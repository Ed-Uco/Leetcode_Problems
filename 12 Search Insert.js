/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let arr = new Set(nums);
  if (arr.has(target)) {
    return [...arr].indexOf(target);
  }
  return [...arr.add(target)].sort((a,b) => a-b).indexOf(target);
};


nums = [ 3, 5, 7, 9, 10], target = 8;
console.log(searchInsert(nums,target))