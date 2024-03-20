//Ques 4 - Two sum
// Given an array of intergers nums and an intenger target,
// retunrn indices of the two numbers such that they add up to target.

// Input : nums = [2,4,11,12,15,7], target = 9
//Output: [0.1] (Because nums[0]+ nums[1] ==9, we retuen [0,1])
//Input nums [3,2,4], target=6
//Output [1,2]
// Brute Force solution
const Sum = function (num, t) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === t) return [i, j];
    }
  }
};

console.log(Sum([2, 1, 4], 6));
