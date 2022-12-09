var isValid = function (s) {
  s = s.split("");
  var stack = [];
  for (var z of s) {
    if (z === "(" || z === "{" || z === "[") {
          stack.push(z);
          console.log(stack)
          console.log(stack.length)
    } else {
          console.log(stack)
          console.log(stack.length);
          var top = stack[stack.length - 1];
          console.log(top)
          console.log(stack.length)
          console.log(stack.length -1)
          console.log(z)
          console.log(stack)
          if (z === ")" && top === "(" ||
                z === "]" && top === "[" ||
                z === "}" && top === "{")
                stack.pop();
          else 
          return false;
      }
  }
  return stack.length === 0;
};
s = "[]{}";
console.log(isValid(s));