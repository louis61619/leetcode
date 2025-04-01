/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  let num = 0;
  while(3 ** num < n) {
    num++
  }
  // console.log(num)
  return 3 ** num === n
};

// 公式解
// function isPowerOfThree(n: number): boolean {
//   return n > 0 && Math.log10(n) / Math.log10(3) % 1 === 0;
// }
// isPowerOfThree(27)
// @lc code=end

