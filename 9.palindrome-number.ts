/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start

// ans1: 轉成字串對比
// function isPalindrome(x: number): boolean {
//   if (x < 0) return false
//   const arr = x.toString().split('')
//   for(let i = 0; i < Math.floor(arr.length); i ++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// };

// ans2: 利用數學的方式解(不轉字串)，有使用到多餘的空間(陣列)
// function isPalindrome(x: number): boolean {
//   if (x < 0) { return false }
//   let multipliers: number[] = [1]
//   let range = 1

//   // 多少位數就給予一個1到基於位數乘10倍的陣列，如 x 為 121 => [1, 10, 100]
//   while((x % range) < x) { 
//     console.log(x % range, '我是x:', x,  '位數:', x.toString().length, '我是range:', range, '位數:', range.toString().length)
//     multipliers.push(range *= 10) 
//   }

//   multipliers.pop()

//   for (let i = 0; i < multipliers.length; i++) {
//     const currentMultiplier = multipliers[i]
//     const reverseMultiplier = multipliers[multipliers.length - (i + 1)]
//     // 透過餘數的方式獲取要比對的數字，如第一位數以及最後一位數字
//     if (getDigit(x, currentMultiplier) !== getDigit(x, reverseMultiplier)) { return false }
//   }

//   return true
// }
// function getDigit(n: number, p: number) { return Math.floor(n / p % 10) }

// an3: 利用數學的方式解(不轉字串)，不使用多餘的空間(只用一個變數)
function isPalindrome(x: number): boolean {
  // 透過數學計算獲取一個回文的數字
  let num = x
  let recNum = 0
  while(num > 0) {
    // 先前的數值要進一位數，然後加上當前 x 的最後一位數
    recNum = recNum * 10 + num % 10
    // 這個類似 for 迴圈，不斷除 10，當小於 0 時，就是各個位數全部跑一遍
    num = Math.floor(num/10)
  }
  return recNum == x
}
// @lc code=end

