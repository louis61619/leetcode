/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
// function addDigits(num: number): number {
//   if (num < 10) return num;
//   let newNum = 0;
  
//   while(num >= 10) {
//     newNum += num % 10
//     num = Math.floor(num / 10)
//   }
//   if (num % 10 !== 0) {
//     newNum += num;
//   }
//   return addDigits(newNum)
// };
// 公式解 直接除9
function addDigits(num: number): number {
  if (num === 0) return 0
  return num % 9 === 0 ? 9 : num % 9
};
// @lc code=end

