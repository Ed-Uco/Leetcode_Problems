/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
for (let i = nums.length; i >= 0 ; i--) {
    loopb(i);
  }
  return nums.length;

      function loopb(i) {
            if (nums[i] === val) {
                  nums.splice(i, 1);
            }
      }
};
(nums = [3, 2, 2, 3]), (val = 3);
(nums2 = [0, 1, 2, 2, 3, 0, 4, 2]), (val2 = 2);


console.time("Array");
removeElement(nums, val);
console.timeEnd("Array");
