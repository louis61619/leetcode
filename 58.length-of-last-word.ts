/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
// O(2n)
function lengthOfLastWord(s: string): number {
  const arr = s.split(' ').filter(x => x)
  return arr[arr.length - 1].length
};
// @lc code=end

