/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
// 循環解法跑太久，也可以利用二進制本身的機制與 >> 移位运算符
function countBits(n: number): number[] {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  // 紀錄前一個的二進制的值，從1開始
  const bArr = [1]
  const getBinaryTotal = () => {
    if (n === 0) return 0
    for(let j = bArr.length - 1; j >= 0; j--) {
      if (bArr[j] + 1 < 2) {
        bArr[j]++;
        break
      } else { 
        bArr[j] = 0
        if (j === 0) {
          bArr.unshift(1)
          break
        }
      }
    }
    return bArr.reduce((pre, cur) => pre += cur, 0)
  }
  const arr = [0, 1];
  for(let i = 1; i < n; i++) {
    arr.push(getBinaryTotal())
  }
  return arr
};
// @lc code=end

