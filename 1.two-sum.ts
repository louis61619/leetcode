/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const obj: { [key: number]: number } = {}
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const result = target - num
    // const value = obj[result]
    if (obj[result] !== undefined) {
      return [i, obj[result]]
    }
    obj[num] = i
  }
  return []
};
// @lc code=end

