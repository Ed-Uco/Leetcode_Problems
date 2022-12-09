var longestCommonPrefix = function (strs) {
      let cur = strs[0];
      let temp = "";
      let i = 1;
      while (i < strs.length) {
            let j = 0;
            while (j < cur.length) {
                 if (cur[j] == strs[i][j]) {
                       temp += cur[j];
                 } else {
                       break;
                }
            j++
            }
      cur = temp;
      temp = "";
      i++;
      }
      return cur;
  }
  


strs = ["cir", "car"];
console.log(longestCommonPrefix(strs));