/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  k = k % nums.length;

  nums.reverse();
  reverseNums(nums, 0, k - 1);
  // reverseNums(nums, k, nums.length - 1);
};

const reverseNums = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    // console.log(nums[start]);
    // console.log(nums[end]);

    console.log([nums[start], nums[end]] );
    start ++;
    end --;
  }
}
rotate([-1,-100,3,99, 45, 88, 74, 123, 3333], 5);
// rotate([1,2,3,4,5,6,7], 3);
