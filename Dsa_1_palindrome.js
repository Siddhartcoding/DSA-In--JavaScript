// Ques 1 - palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input : x = 121 --------->>>>>>>> Output : true
// Input : x = 10 --------->>>>>>>> Output : false

const isPalindrom = function (x) {
  if (x < 0) return false;

  return x === +x.toString().split("").reverse().join("");
};

const res = isPalindrom(12);
console.log(res);
// 121 => "121" => ["1","2","1"] => ["1","2","1"]=> "121"
// +operator is use to convert result string to a number
