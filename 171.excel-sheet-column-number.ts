/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const alphbet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = 0
  for(let i = 0; i < columnTitle.length; i++) {
    const index = alphbet.indexOf(columnTitle[columnTitle.length - i - 1])
    num += (26 ** i) * (index + 1)
  }
  return num
};
// console.log(titleToNumber("ZY"))
// @lc code=end

