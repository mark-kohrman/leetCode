//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let i;
  let frequencies = {};
  for (i = 0; i < nums.length; i ++) {
    if (frequencies[nums[i]] === undefined) {
      frequencies[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};

containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);