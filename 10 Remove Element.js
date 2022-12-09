/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
      return nums.splice(
            0,
            nums.length,
            ...nums.filter((v) => {
                  return v != val;
            })
      ).length;
};

(nums = [3, 2, 2, 3]), (val = 3);
(nums2 = [0, 1, 2, 2, 3, 0, 4, 2]), (val2 = 2);
console.log(removeElement(nums, val));