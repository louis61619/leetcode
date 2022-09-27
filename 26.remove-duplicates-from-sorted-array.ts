/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start

// 冒泡排序
function removeDuplicates(nums: number[]): number {
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const nextNum = nums[i + 1]
    if(num === nextNum) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};
// console.log(nums)
// @lc code=end

