/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
// 找出t的字母中s沒有的
function findTheDifference(s: string, t: string): string {
  const o = {}
  let r = ''
  for(let i =0; i < s.length; i++) {
    if (o[s[i]] === undefined) {
      o[s[i]] = 1
    } else {
      o[s[i]] += 1
    }
  }
  for(let i = 0; i < t.length; i++) {
    if (!o[t[i]]) {
      r += t[i]
    } else {
      o[t[i]] -= 1
    }
  }
  return r
};

// 可以使用 ACII 字母代碼相加，減掉生成前的
// @lc code=end

