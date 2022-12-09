/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
      s = s.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, "");
       let left = 0,
         rigth = s.length - 1;
       while (left <= rigth) {
         if (s[left] != s[rigth]) {
           return false;
         }
         left++;
         rigth--;
       }
       return true;  
};

//s = "A man, a plan, a canal: Panama"
s = "race a car";
//s = " "
//console.log(removeElement(nums2, val2));

console.time("Array");
isPalindrome(s);
console.timeEnd("Array");
console.log(isPalindrome(s))
