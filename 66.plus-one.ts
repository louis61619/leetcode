/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
// 大數的加減法必需使用字符串
function plusOne(digits: number[]): number[] {
  let plusOne = true
  for(let i = 0; i < digits.length; i++) {
    const currentIndex = digits.length - i - 1
    if (!plusOne) break
    if (digits[currentIndex] + 1 < 10) {
      digits[currentIndex] += 1
      plusOne = false
    } else {
      digits[currentIndex] = ((digits[currentIndex] + 1) % 10)
    }
  }
  if (plusOne) {
    digits.unshift(1)
  }
  return digits
};

// 使用es6 BigInt
// function plusOne(digits: number[]): number[] {
//   return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(x => parseInt(x))
// }
// @lc code=end