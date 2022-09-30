/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const maxLength = Math.max(a.length, b.length)

  let c = ""
  let plusOne = 0
  for(let i = 0; i < maxLength; i++) {
    const aNum = parseInt(a[a.length - i - 1] || '0') 
    const bNum = parseInt(b[b.length - i - 1] || '0') 
    const cNum = aNum + bNum + plusOne
    plusOne = 0
    c = (cNum % 2).toString() + c
    if (cNum > 1) {
      plusOne = 1
    }
  }
  if (plusOne) {
    c = "1" + c
  }
  return c
};
// @lc code=end

