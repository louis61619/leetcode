/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  if (num === 1) return true;
  let startN = 0;
  let lastN = num;
  // 當前後兩個數字一個小於 num ， 一個大於 num 就可以停止了
  while(startN + 1 !== lastN) {
    const midN = Math.floor((lastN - startN) / 2) + startN
    const squareN = midN * midN
    if (squareN > num) {
      lastN = midN;
    } else if (squareN < num) {
      startN = midN
    } else {
      return true
    }
  }
  return false
};

// 使用數學符號 ** 0.5 然後確認有沒有小數點
// @lc code=end

