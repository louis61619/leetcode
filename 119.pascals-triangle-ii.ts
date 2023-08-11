/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
// 解法1
// function getRow(rowIndex: number): number[] {
//   const arr = [[1], [1, 1]]
//   for(let i = 0; i < rowIndex - 1; i++) {
//     let _arr  = [1, 1]
//     for(let n = 0; n < i + 1; n++) {
//       const add = arr[i + 1][n] + arr[i + 1][n + 1]
//       _arr.splice(n + 1, 0, add)
//     }
//     arr.push(_arr)
//   }
//   return arr[rowIndex]
// };
// 解法2: 只用一個陣列，空間複雜度 O(rowIndex)
//  1 0 0 0
//  1 1 0 0
//  1 2 1 0
//  1 3 3 1
function getRow(rowIndex: number): number[] {
  const arr = [1]
  arr.splice(0, 1, 1)
  for(let i = 1; i < rowIndex + 1; i++) {
    for(let j = 1; j < i + 1; j++) {
      arr[(i + 1) - j] = (arr[(i + 1) - j] || 0) + (arr[(i + 1) - j - 1] || 0)
    }
  }
  return arr
};
// @lc code=end

