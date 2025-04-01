/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
// 用可以梯形公式相加 並且互減可以得答案
function missingNumber(nums: number[]): number {
  const maxNum = nums.length;
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    map[nums[i]] = true
  }
  for(let i = 0; i <= maxNum; i++) {
    if (!map[i]) {
      return i
    }
  }
};
// console.log(missingNumber([3,0,1]))
// @lc code=end

