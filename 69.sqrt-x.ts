/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
// 透過不斷+1求取平方後大於x的數
// function mySqrt1(x: number): number {
//   let n = 0
//   while((n * n) <= x) {
//     n++
//   }
//   return n - 1
// };

// function timeit(func: () => any) {
//   const start =  new Date().getTime()
//   func()
//   const end = new Date().getTime()
//   return (end - start)
// }

/**
 * 使用二分搜索
    65
    65 擷取一半 32
    32 * 32 > 64
    32 擷取一半 16
    ...
    8 擷取一半 4
    4 * 4 < 64
    最小值為 4，最大值為前一步擷取一半的值 8
    取最大最小值區間的中間值
    (8 - 4) / 2 + 4   = 6
    6 * 6 < 64
    最小值為 4 + 1
 */
function mySqrt(x: number): number {
  let max = x
  let min = 0

  if (x <= 1) {
    return x
  }

  while(min < max) {
    // 計算出最大最小值區間的中間值 然後取整數
    const mid = min + (max - min) / 2 | 0 
    if ((mid * mid) > x) {
      max = mid
    } else {
      min = mid + 1
    }
  }
  return min - 1
};

// const num = 8901291029102120
// // 0毫秒
// console.log(timeit(() => mySqrt(num)))
// // 47毫秒
// console.log(timeit(() => mySqrt1(num)))

// 使用 Math.sqrt 運算
// const mySqrt = (x: number) => parseInt(Math.sqrt(x).toString())

// 使用數學公式計算:牛頓法
// @lc code=end

