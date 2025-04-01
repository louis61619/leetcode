/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const mMap = {}
  for(let i = 0; i < magazine.length; i++) {
    if (mMap[magazine[i]] === undefined) {
      mMap[magazine[i]] = 1
    } else {
      mMap[magazine[i]] += 1
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (mMap[ransomNote[i]]) {
      mMap[ransomNote[i]] -= 1
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

