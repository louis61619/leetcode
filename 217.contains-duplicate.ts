/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (obj[num]) {
        return true
      }
      obj[num] = 1
    }
    return false
};
// @lc code=end

