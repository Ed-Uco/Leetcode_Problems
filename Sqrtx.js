
var mySqrt = function (x) {
      if (x === 0 || x === 1) return x;
      max = x;
      min = 0;
      q = Math.floor((min + max)/2);
      while(min < max){
            c = q * q;
            if (c == x) 
                return q;
            else if (c < x) 
                min = q+1;
            else 
                max=q;
            q = Math.floor((min + max)/2);
      }
       return q - 1;
}

x = 
console.log(mySqrt(x))