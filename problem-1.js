
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    } 
    j++;
  }
  nums.length = i + 1;
  let k = nums.length;
  console.log(k);
};

removeDuplicates([-99, -99, -99, -99, -99,  -2, 1, 2, 2, 3, 4, 4, 4, 4]);
