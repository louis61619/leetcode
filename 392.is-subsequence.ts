/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0
  let tIndex = 0
  if (s.length === 0) {
    return true
  }
  while (tIndex < t.length) {
    // console.log(t[sIndex], s[tIndex])
    if (sIndex === s.length) {
      return true
    }
    if (t[tIndex] === s[sIndex]) {
      sIndex++
      tIndex++
    } else {
      tIndex++
    }
  }
  // console.log(sIndex, tIndex)
  return sIndex === s.length
};
// isSubsequence("b",
// "c")
// @lc code=end

