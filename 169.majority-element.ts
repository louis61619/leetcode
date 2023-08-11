/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
// function majorityElement(nums: number[]): number {
//   const moreThen = (nums.length - 1) / 2
//   const map = {}
//   for(let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]] += 1
//       if (map[nums[i]] > moreThen) {
//         return nums[i]
//       }
//     } else {
//       map[nums[i]]  = 1
//     }
//   }
//   return nums[0]
// };
//  Boyer-Moore majority vote algorithm
function majorityElement(nums: number[]): number {
  let candidate: number; 
  let count = 0
  // 判斷如果下一個為同一個 number 則+1，不同 number 則減一，減到零之後找到下一個 number
  for(const num of nums) {
    if (count === 0) {
      candidate = num
    }
    count += (candidate === num ? 1 : -1)
  }
  return candidate
}
// @lc code=end

