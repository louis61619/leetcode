/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
// 暴力解法
function getRow(rowIndex: number): number[] {
  const arr = [[1], [1, 1]]
  for(let i = 0; i < rowIndex - 1; i++) {
    let _arr  = [1, 1]
    for(let n = 0; n < i + 1; n++) {
      const add = arr[i + 1][n] + arr[i + 1][n + 1]
      _arr.splice(n + 1, 0, add)
    }
    arr.push(_arr)
  }
  return arr[rowIndex]
};
// @lc code=end

