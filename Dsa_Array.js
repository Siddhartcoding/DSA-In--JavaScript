// Ques1 - second largest Number
// Given an array of size N , print second larget
// distinct element from array..

// Input : [12, 35, 1 ,10, 34, 1] ------->>>>>>>> Output:34
// Input : [10, 5, 10] --->>>>>> Output: 5

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(secondLargest);
}

secondLargest([10, 5, 10]);

// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by K setps.
// where k in non-negative.
// Input : nums [1,2,3,4,5,6,7], k = 3 ----> output : [5,6,7,1,2,3,4]

function rotateAarray(nums, k) {
  let size = nums.length;
  if (size > k) {
    k = k % size;
  }
  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
}

console.log(rotateAarray([1, 2, 3, 4, 5, 6, 7], 3));

// Ques 3 Remove  Duplicates from Sorted Array
// Given an integer array nums sorted in non decreasing order, remove
// the dupilicates in the place such that each unique element appers
// only once. the relative order of the element should be kept
// the same, Then return the number of unique element in nums.
// Input: [0,0,1,2,2,3,3,4]---->>>> Ouptput: 5

function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) nums.splice(i + 1, 1);
  }
  return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 2, 2, 3, 3, 4]));
