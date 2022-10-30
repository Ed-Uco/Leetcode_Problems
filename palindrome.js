/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
      let reversa = 0;
      let residuo = 0;   
      let n = x;
  while (n > 0) {
        const residuo = n % 10;
        reversa = reversa * 10 + residuo;
        n = Math.floor(n / 10);
        console.log("residuo: ", +residuo);
        console.log("cociente: ", +n);
      } 
  //return Math.max(Math.floor(Math.log10(n)), 0) + 1;
return reversa == x
};

number = 1000021;
console.log(isPalindrome(number));
