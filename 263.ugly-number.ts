/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
  if (n === 0) return false;
  if (n % 2 === 0) {
    return isUgly(n / 2)
  }
  if (n % 3 === 0) {
    return isUgly(n / 3)
  }
  if (n % 5 === 0) {
    return isUgly(n / 5)
  }
  // console.log(n)
  return n === 1;
};
// console.log(isUgly(6))
// @lc code=end

