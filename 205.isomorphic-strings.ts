/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  function _isIsomorphic(s: string, t: string) {
    const obj = {}
    for(let i = 0; i < s.length; i++) {
      if (!obj[s[i]]) {
        obj[s[i]] = t[i]
      } else {
        
        if(obj[s[i]] !== t[i]) {
          return false
        }
      }
    }
    return true
  }
  return _isIsomorphic(s, t) && _isIsomorphic(t, s)
};
// @lc code=end

