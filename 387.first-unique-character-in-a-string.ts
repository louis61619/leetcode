/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map = {}
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1
    } else {
      map[s[i]] += 1
    }
  }
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i
    }
  }
  return -1
};
// @lc code=end

