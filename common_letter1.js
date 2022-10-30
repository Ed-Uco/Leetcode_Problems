/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
      let sum = 0;
      for (let i = 0; i < strs.length; i++) {
            console.log(strs[i])
            let word = strs[i];
            console.log(word);
            let mensaje = strs[i];
            console.log(mensaje)
            console.log(word[i])
            console.log(i)
            for (let n = 0; n < word.length; n++) {
                  const element = word[i];
                  console.log(word[[n]])
                  console.log(element)
                  console.log(mensaje[n])
                  if (mensaje.includes(element)) {
                    console.log(mensaje);
                    console.log(element);
                    sum += 1;
                    console.log(sum);
                  } else {
                    console.log(mensaje[i].includes(word[i]));
                    console.log(mensaje[i]);
                    console.log(word[i]);
                    console.log("No");
                  } 
            }
            

           /*  if (mensaje.indexOf(strs[i] != -1)) {
                  console.log(mensaje)
                  console.log(strs[i]);
            } 
           
/*                   if (strs.some(v=>word.includes(v))) {
                        console.log(strs)
                        console.log(word[i]);
                     console.log(mensaje[i]);
                   }
                   */
          
          
      }
      if (sum == strs.length) {
                        
                    return true;
                  }
                  return "";
};
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs))
