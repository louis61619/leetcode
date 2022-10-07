/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

// 一階有一種解法
// 二階有兩種解法
// n階可以拆解為n的前一階走一步和n的前二階走兩步 (n-1 和 n-2)
// 有這個概念可以使用遞迴暴力計算出答案

// 
// 二階   一階 
//   \    /
//    三階   二階   二階  一階
//     \    /       \    /
//       四階        三階
//          \       /
//             五階
// function climbStairs(n: number): number {
//   if (n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   const r = climbStairs(n - 1) + climbStairs(n - 2)
//   return r
// };

// 紀錄下之前的每一階的結果
function climbStairs(n: number): number {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  const r = climbStairs(n - 1) + climbStairs(n - 2)
  return r
};
// @lc code=end

