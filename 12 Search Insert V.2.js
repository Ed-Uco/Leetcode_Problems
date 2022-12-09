/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
        if (nums[i] >= target) return i
  }
  return nums.length;
};
(nums = [3, 5, 7, 9, 10]), (target = 7);
console.log(searchInsert(nums, target));
