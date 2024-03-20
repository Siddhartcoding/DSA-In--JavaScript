// Ques 2 - Fibonacci Nuber
// Fibonacci Series ->0,1,2,3,5,8,13,21,34,55,89,144,233.....

//f(0) = 0, f(1) = 1
//f(n) = f(n-1)+ f(n-2), for n > 1

// Intput: n=3 ------>>>>> Output: 2

const Fibonacci = function (n) {
  if (n == 0 || n == 1) return n;
  else if (n < 0) {
    return 0;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
};

res = Fibonacci(4);
console.log(res);

var fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
