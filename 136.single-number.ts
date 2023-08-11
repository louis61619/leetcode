/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
// O(n * 2)
function singleNumber(nums: number[]): number {
  let map: { [key: number]: number } = {}
  for(let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]+= 1
    } else {
      map[nums[i]] = 1
    }
  }
  for(const key in map) {
    if (map[key] === 1) return Number(key)
  }
};
// @lc code=end

