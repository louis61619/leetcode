/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
// function reverseBits(n: number): number {
//   // 十進位轉二進位字串
//   let s = ''
//   while (n > 0) {
//     // 取餘數
//     s = s + (n % 2)
//     // 除二才能進位
//     n = Math.floor(n / 2)
//   }
//   // 補滿 32 字元
//   const y = (s + '00000000000000000000000000000000').substring(0, 32)
//   let total = 0
//   // 二進位轉十進位
//   for(let i = 0; i < y.length; i++) {
//     total += 2 ** i * Number(y[y.length - 1 - i])
//   }
  
//   return total
// };

// & "按位與" n & 1 將值作為二進制取出最後一位
// >>> 無符號右移 n >>>= 1 將值作為二進制無條件向後偏移一位
function reverseBits(n: number) {
  if (!n) return 0
  
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans = ans * 2 + (n & 1);
    n >>>= 1;
  }

  return ans;
}
// console.log(reverseBits(0b11111111111111111111111111111101))
// @lc code=end

