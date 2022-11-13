/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // 使用 sliding window
  for(let i = 0; i < nums.length - k; i++) {
    for(let j = i; j < i + k; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

