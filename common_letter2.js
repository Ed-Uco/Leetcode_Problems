/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
      let prim = []
      for (let i = 0; i < strs.length; i++) {
            let sec = [];
            for (let j = 0; j < strs[j].length; j++) {
                 if (prim[strs[i].charCodeAt(j) - ('a').charCodeAt(0)]) sec[strs[i].charCodeAt(j)- ('a').charCodeAt(0)] = true 
                  
            }
            
      }
};
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));