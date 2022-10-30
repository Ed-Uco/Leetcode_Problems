/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
      let rev = 0;
      let res = 0;
      let n = x;
  while (n > 0) {
        res = n % 10;
        n = Math.floor(n / 10);
        rev = rev * 10 + res;
  }
      if (rev === x) return true;
      else return false;
      
};

number = ;
console.log(isPalindrome(number));