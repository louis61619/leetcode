/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  let power = 0;
  while(true) {
    if (4 ** power === n) {
      return true
    }
    if (4 ** power > n) {
      return false
    }
    power += 1
  }
};
// 可以使用 Math.log 相關的庫會更快
// @lc code=end

