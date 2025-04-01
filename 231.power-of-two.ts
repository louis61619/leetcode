/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  let power = 0;
  while(2 ** power <= n) {
    if (2 ** power === n) {
      return true;
    }
    power += 1
  }
  return false
};
// @lc code=end

