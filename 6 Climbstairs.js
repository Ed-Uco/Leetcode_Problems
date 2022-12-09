/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  iter = 0;
  result = 0;
  number1 = 0;
  number2 = 1;
  while (iter < n) {
    nstairs = number1 + number2;
    number1 = number2;
    number2 = nstairs;
    iter++;
  }
  return nstairs;
};

n = 5;
console.log(climbStairs(n));
