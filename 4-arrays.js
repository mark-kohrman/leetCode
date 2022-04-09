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

module.exports = containsDuplicate;