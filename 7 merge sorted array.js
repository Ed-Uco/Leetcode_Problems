const merge = function (nums1, m, nums2, n) {
  nums1.splice(m,n, ...nums2);
  return nums1.sort((a, b) => a - b);
};

nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
m = 6;
nums2 = [1, 2, 2];
n = 3;
console.log(merge(nums1, m, nums2, n));
// [-1,0,0,1,2,2,3,3,3]
//Origin solution
/* var merge = function (nums1, m, nums2, n) {
  let count = 0;
  for (let j = 0; j < nums1.length; j++) {
    if (j >= m) {
      nums1.splice(j, 1, nums2[count]);
      count++;
    }
  }
  return nums1.sort((a, b) => a - b);
}; */