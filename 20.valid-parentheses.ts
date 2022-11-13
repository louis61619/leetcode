/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const obj: { [key: string]: string } = {
  ']': '[',
  '}': '{',
  ')': '('
}
// 核心概念是反著來透過右符號找左符合，而非由左至右
// 符合 stack 後進先出的結構
function isValid(s: string): boolean {
  const arr = s.split("")

  const stack: string[] = []

  for(let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      // 右符號查找有沒有對應的左符號
      // 先找到的右符號對應後找到的左符號
      const openSymbol = stack.pop()

      if (obj[arr[i]] !== openSymbol) { return false }
    } else {
      // 左符號推入stack中
      stack.push(arr[i])
    }
  }
  return stack.length === 0
};
// isValid("{{}}")
// @lc code=end

