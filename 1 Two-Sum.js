function twoSum(nums, target) {
  let vals = {};

  for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in vals) {
              console.log(vals)
              console.log(i)
              console.log(target- nums[i])
          console.log(vals[target-nums[i]],i)
          return [vals[target - nums[i]], i];
        } else {
              console.log(i)
              console.log(target-nums[i])
              console.log(vals);
              console.log([nums[i]]);
              vals[nums[i]] = i;
              console.log(vals)
    }
  }
  return [];
}
nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target));