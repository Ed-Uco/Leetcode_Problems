function romanToInt(num) {
      let arr = num.split('');
console.log(arr)
      var lookup = {
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1,
      },
            sum = 0;
    
/*       for (let i = 0; i < arr.length; i++) {
            const current = lookup[arr[i]];
            const next = lookup[arr[i+1]];
            if (current < next) {
                  sum -= current
            }
            else {
                  sum += current;
            }
            
            
  } */
      let i = 0;
      while (i < arr.length) {
            const current = lookup[arr[i]];
            const next = lookup[arr[i + 1]];
            if (current < next) {
              sum -= current;
            } else {
              sum += current;
            }
      i++
      }
  return sum;
}
console.log(romanToInt("X"))