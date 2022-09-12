/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
// O(n2) to array
// function longestCommonPrefix(strs: string[]): string {
//   const _strs = strs.map(x => x.split(""))
//   if (!_strs[0]) return ""
//   let samArr: string[] = []
  
//   for(let i = 0; i < _strs[0].length; i++) {
//     for(let n = 0; n < _strs.length; n ++) {
//       if (!samArr[i]) {
//         samArr.push(_strs[n][i])
//       } else {
//         if (samArr[i] !== _strs[n][i]) {
//           samArr.pop()
//           return samArr.join("")
//         }
//       }
//     }
//   }
//   return samArr.join("")
// };

// 使用 string 的函式的 startsWith 做判斷條件 O(n)
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ""
  if (strs.length === 1) return strs[0]

  let commonPrefix = ""

  while(strs.every(str => str.startsWith(commonPrefix))) {
    const newCommonPrefix = strs[0].substring(0, commonPrefix.length + 1)
    if (newCommonPrefix !== commonPrefix) {
      commonPrefix = newCommonPrefix
    } else if (newCommonPrefix === commonPrefix) {
      return commonPrefix
    } else {
      break
    }
  }
  return commonPrefix.slice(0, -1)
}
// @lc code=end

