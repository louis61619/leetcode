/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
// 還有一種方式，js的 sort 會自動排序，然後比對字串就好
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sObj = {}
  for(let i = 0; i < s.length; i++) {
    if(sObj[s[i]] === undefined) {
      sObj[s[i]] = 1
    } else {
      sObj[s[i]] += 1
    }
    if(sObj[t[i]] === undefined) {
      sObj[t[i]] = -1
    } else {
      sObj[t[i]] -= 1
    }
  };
  return !Object.keys(sObj).find(k => sObj[k] !== 0)
};
// @lc code=end

