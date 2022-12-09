
var removeDuplicates = function (nums) {
  //    for (let i = nums.length - 1; i >= 0; i--)
let i = nums.length - 1;
while (i >= 0) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
    i--;
}
      return nums;
};
nums = [1, 1, 2];;
console.log(removeDuplicates(nums));