/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let length = nums.length
  for(let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      length--
    }
  }
};
// 第二種做法，循環將每個 item 都設為 0，紀錄另一個 writePointer 去把不為 0 的數字寫回去 
// @lc code=end

