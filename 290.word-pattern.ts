/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const map = {};
  const sMap = {}
  const sArr = s.split(' ')
  if (sArr.length !== pattern.length) return false;
  for(let i = 0; i <= pattern.length; i++) {
    if (map[pattern[i]] === undefined) {
      map[pattern[i]] = sArr[i];
      
      if (sMap[sArr[i] + '0'] !== undefined) {
        return false
      } else {
        sMap[sArr[i] + '0'] = pattern[i]
      }
    } else if (map[pattern[i]] !== sArr[i]) {
      return false
    }
  }
  return true
};
// console.log(wordPattern("abba", "dog constructor constructor dog"))
// @lc code=end

