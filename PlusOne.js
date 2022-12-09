/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
      //num = (BigInt(digits.join('')) + BigInt(1))
      // join allow join numbers from array
      //BigInt allow convert strings in big integers and just between each others big integers.
      //Array.from(String(),Number) convert integers to array of strings 
      return Array.from(String(BigInt(digits.join("")) + BigInt(1)), Number)
      ;
};


digits = [1, 2, 3]
output = [1, 2, 4]
digits2 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
output = [4, 3, 2, 2]
digits3 = [9]
output = [10]
console.log(plusOne(digits3))