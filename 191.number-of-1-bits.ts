/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
// 透過轉換為二進位字串
// function hammingWeight(n: number): number {
//   let count = 0
//   while(n > 0) {
//     if(n % 2 === 1) {
//       count++
//     }
//     n = Math.floor(n / 2)
//   }
//   return count
// };
// 透過位運算的方式
function hammingWeight(n: number): number {
  let count = 0
  for(let i = 0; i < 32; i++) {
    if((n & 1) === 1) {
      count++
    }
    n >>>= 1
  }
  return count
}
// @lc code=end

