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
      const openSymbol = stack.pop()

      if (obj[arr[i]] !== openSymbol) { return false }
    } else {
      stack.push(arr[i])
    }
  }
  return stack.length === 0
};
// @lc code=end

