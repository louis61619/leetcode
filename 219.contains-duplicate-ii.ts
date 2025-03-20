/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
// 陣列中相同的item, 其index相減出的絕對值不能小於k, 只要有一個就返回 true
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = {}
  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] === undefined) {
      map[nums[i]] = i
    } else {
      const lastIndex = map[nums[i]]
      if (i - lastIndex <= k) {
        return true
      }
      map[nums[i]] = i
    }
  }
  return false
};

// 使用 sliding window
// @lc code=end

