/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
      if (x === 0) return 0;
      for (let i = 1; i <= x; i++) {
            result = i*i;
            if (result <= x) {
                  sqr= Math.floor(i)
            }         
      }
      return sqr
      
};

x = 1
console.log(mySqrt(x))
