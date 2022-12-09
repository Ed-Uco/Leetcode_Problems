const fizzBuzz = function(n) {
    let answer = [];
    let res = ""
    for (let i = 1, fizz = 0, buzz = 0;i <= n; i++) {
        fizz ++
        buzz ++
        console.log(fizz)
        console.log(buzz)
      if(fizz === 3 && buzz === 5) {
            res = "FizzBuzz"
            console.log(res)
            fizz = 0
            buzz = 0
        } else if (fizz === 3) {
            res = "Fizz"
            fizz = 0
        } else if (buzz === 5) {
            res = "Buzz"
            buzz = 0
        } else {
            res = (String(i))
        }
        answer.push(res)
    }

    return answer
}

console.log(fizzBuzz(5))
